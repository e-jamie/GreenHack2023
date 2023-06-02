import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const FoodWasteReducerContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View style={styles.groupWrapper}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-13.png")}
          />
        </View>
        <View style={styles.reduceSpendingAndFoodWasteParent}>
          <Text style={[styles.reduceSpendingAnd, styles.shopNowTypo]}>
            Reduce spending and food waste in the palm of your hand
          </Text>
          <Text style={styles.groceryShoppingWithout}>
            Grocery shopping without harming your wallet, nor the planet.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.frameWrapper}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Register")}
      >
        <View style={styles.shopNowWrapper}>
          <Text style={[styles.shopNow, styles.shopNowTypo]}>Shop Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shopNowTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
  },
  frameChild: {
    width: 61,
    height: 61,
  },
  groupWrapper: {
    flexDirection: "row",
  },
  reduceSpendingAnd: {
    fontSize: FontSize.size_9xl,
    color: Color.gray_100,
    width: 318,
    textAlign: "center",
  },
  groceryShoppingWithout: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.lightFontGrey,
    width: 274,
    marginTop: 24,
    textAlign: "center",
  },
  reduceSpendingAndFoodWasteParent: {
    marginTop: 32,
    alignItems: "center",
  },
  frameGroup: {
    alignItems: "center",
  },
  shopNow: {
    fontSize: FontSize.size_base,
    color: Color.lightColorsWhite,
    textAlign: "center",
  },
  shopNowWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  frameWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightColorsPrimary,
    width: 190,
    height: 50,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    top: 93,
    left: 36,
    alignItems: "center",
  },
});

export default FoodWasteReducerContainer;
