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

#QR Code
api_key = "samplebeaconstacAPIkey"
request = requests.Request("POST", "https://api.beaconstac.com/v1/qrcodes", headers={
    "Authorization": "Token {}".format(api_key),
    "OrganizationId": organization_id
})

data = {
    "content": "Please collect your order within 48 hours"
}

response = requests.Session().send(request, data=data)

if response.status_code == 200:
    # QR code image data
    qr_code_data = response.content

    # Save the QR code image data to a file
    with open("qr_code.png", "wb") as f:
        f.write(qr_code_data)

else:
    print("Error generating QR code: {}".format(response.status_code))

def main():
  url = 'https://www.makro.cz/'
  data = get_grocery_data(url)
  individual_costs = split_grocery_items(data, individuals)
  for individual, cost in individual_costs.items():
    print(f'{individual} owes ${cost}')




if __name__ == '__main__':
  main()
