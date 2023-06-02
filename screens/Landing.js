import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import FoodWasteReducerContainer from "../components/FoodWasteReducerContainer";
import { Border, Color } from "../GlobalStyles";

const Landing = () => {
  return (
    <View style={styles.landing}>
      <Image
        style={styles.landingChild}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Image
        style={[styles.paperBagWithHealthyFoodHeIcon, styles.paperIconLayout]}
        contentFit="cover"
        source={require("../assets/paperbagwithhealthyfoodhealthyfoodbackgroundsupermarketfoodconceptshoppingsupermarkethomedeliverymin.png")}
      />
      <Image
        style={[styles.paperBagWithHealthyFoodHeIcon1, styles.paperIconLayout]}
        contentFit="cover"
        source={require("../assets/paperbagwithhealthyfoodhealthyfoodbackgroundsupermarketfoodconceptshoppingsupermarkethomedeliverymin1.png")}
      />
      <Image
        style={styles.kindpng73363541Icon}
        contentFit="cover"
        source={require("../assets/kindpng-7336354-1.png")}
      />
      <Image
        style={styles.kindpng73363543Icon}
        contentFit="cover"
        source={require("../assets/kindpng-7336354-3.png")}
      />
      <Image
        style={styles.kindpng73363542Icon}
        contentFit="cover"
        source={require("../assets/kindpng-7336354-2.png")}
      />
      <FoodWasteReducerContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  paperIconLayout: {
    height: 360,
    position: "absolute",
  },
  landingChild: {
    top: 0,
    width: 565,
    height: 535,
    left: 0,
    position: "absolute",
  },
  paperBagWithHealthyFoodHeIcon: {
    top: 509,
    left: 100,
    width: 540,
  },
  paperBagWithHealthyFoodHeIcon1: {
    top: 499,
    width: 482,
    left: 0,
  },
  kindpng73363541Icon: {
    top: 31,
    left: 316,
    width: 48,
    height: 53,
    position: "absolute",
  },
  kindpng73363543Icon: {
    top: 374,
    left: 349,
    width: 41,
    height: 75,
    position: "absolute",
  },
  kindpng73363542Icon: {
    top: 489,
    left: 36,
    width: 42,
    height: 39,
    position: "absolute",
  },
  landing: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Landing;
