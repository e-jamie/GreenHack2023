import requests
import json

def get_grocery_data(url):
  response = requests.get(url)
  data = json.loads(response.content)
  return data

def prorate_costs(total_cost, individuals):
  prorated_costs = {}
  for individual in individuals:
    prorated_costs[individual] = total_cost / len(individuals)

  return prorated_costs

def get_individuals_from_source():

  # Get the inputs from the source.
  inputs = get_inputs_from_source()

  # Create a list of individuals.
  individuals = []
  for input in inputs:
    individuals.append(input['name'])
    
  return individuals

def split_grocery_items(data, individuals):
  grocery_items = {}
  for item in data['items']:
    quantity = item['quantity']
    cost = item['cost']
    total_cost = quantity * cost
    grocery_items[item['name']] = total_cost

  individual_costs = {}
  for individual in individuals:
    total_cost = total_cost
    for item in grocery_items:
      individual_cost = grocery_items[item] / len(individuals)
      total_cost += individual_cost
    individual_costs[individual] = total_cost

  return individual_costs


def main():
  url = 'https://www.makro.cz/'
  data = get_grocery_data(url)
  individual_costs = split_grocery_items(data, individuals)
  for individual, cost in individual_costs.items():
    print(f'{individual} owes ${cost}')




if __name__ == '__main__':
  main()
