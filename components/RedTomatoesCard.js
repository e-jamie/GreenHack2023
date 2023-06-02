import * as React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const RedTomatoesCard = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.frameParent}>
        <TextInput
          style={[styles.groupChild, styles.groupTypo]}
          placeholder="units"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.2)"
        />
        <TextInput
          style={[styles.groupItem, styles.groupTypo]}
          placeholder="Name"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.2)"
        />
        <View style={[styles.frameWrapper, styles.framePosition]}>
          <View style={styles.framePosition}>
            <View>
              <View>
                <Text style={styles.h1}>Red Tomatoes</Text>
                <Text style={styles.unitsCzk17340}>48 units, CZK 173.40</Text>
              </View>
              <Text style={[styles.h2, styles.h2Typo]}>Reserve Amount:</Text>
              <Text style={[styles.h21, styles.h2Typo]}>Reserve Under:</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.originPolandPl}>Origin: Poland (PL)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupTypo: {
    fontFamily: FontFamily.dMSansBold,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    overflow: "hidden",
    height: 27,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_xl,
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    position: "absolute",
  },
  framePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  h2Typo: {
    marginTop: 8,
    fontFamily: FontFamily.tTNormsProBold,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontWeight: "700",
  },
  groupChild: {
    top: 54,
    left: 172,
    fontSize: FontSize.size_xs,
  },
  groupItem: {
    top: 89,
    left: 152,
    fontSize: FontSize.size_xs,
  },
  h1: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    color: Color.fontDark,
    textAlign: "left",
    fontWeight: "700",
  },
  unitsCzk17340: {
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.lightColorsSecondary,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  h2: {
    color: Color.seagreen_300,
  },
  h21: {
    color: Color.darkslategray,
  },
  frameWrapper: {
    width: 177,
    height: 114,
  },
  frameParent: {
    width: 242,
    height: 116,
  },
  originPolandPl: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.tTNormsProMedium,
    color: Color.lightFontGrey,
    display: "flex",
    alignItems: "center",
    width: 330,
    marginTop: 12,
    textAlign: "left",
  },
  groupParent: {
    top: 416,
    left: 24,
    position: "absolute",
  },
});

export default RedTomatoesCard;
