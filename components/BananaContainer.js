import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const BananaContainer = () => {
  return (
    <View style={[styles.groupParent, styles.groupParentLayout]}>
      <View style={[styles.rectangleParent, styles.parentGroupPosition]}>
        <View style={[styles.groupChild, styles.parentGroupPosition]} />
        <View style={styles.frameWrapper}>
          <View style={[styles.h1Parent, styles.parentGroupPosition]}>
            <Text style={styles.h1}>Bananas</Text>
            <Text style={styles.h2}>90 bananas, CZK 373.68</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Image
          style={styles.plus1Icon}
          contentFit="cover"
          source={require("../assets/group-36828.png")}
        />
      </View>
      <Image
        style={styles.bananasIcon}
        contentFit="cover"
        source={require("../assets/bananas.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 214,
    width: 163,
    position: "absolute",
  },
  parentGroupPosition: {
    left: 0,
    top: 0,
  },
  groupLayout: {
    width: 36,
    height: 36,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.lightColorsLightBG,
    height: 214,
    width: 163,
    position: "absolute",
  },
  h1: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.tTNormsProBold,
    color: Color.fontDark,
    textAlign: "left",
  },
  h2: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.lightColorsSecondary,
    marginTop: 4,
    textAlign: "left",
  },
  h1Parent: {
    position: "absolute",
  },
  frameWrapper: {
    top: 123,
    left: 20,
    width: 131,
    height: 36,
    position: "absolute",
  },
  rectangleParent: {
    height: 214,
    width: 163,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.lightColorsPrimary,
    left: 0,
    top: 0,
  },
  plus1Icon: {
    top: 10,
    left: 10,
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleGroup: {
    top: 162,
    left: 118,
  },
  bananasIcon: {
    top: 21,
    left: 12,
    width: 142,
    height: 102,
    position: "absolute",
  },
  groupParent: {
    top: 549,
    left: 203,
  },
});

export default BananaContainer;
