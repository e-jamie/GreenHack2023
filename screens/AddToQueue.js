import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AddToQueue = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addToQueue}>
      <Image
        style={[styles.addToQueueChild, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2252.png")}
      />
      <Image
        style={[styles.addToQueueItem, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-368454.png")}
      />
      <View style={styles.addToQueueInner}>
        <Pressable
          style={styles.continueWrapper}
          onPress={() => navigation.navigate("ChoosePaymentMethod")}
        >
          <Text style={styles.continue}>Add to Queue</Text>
        </Pressable>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.frameParent}>
          <View style={[styles.unitsWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.units, styles.adamTypo]}>8 units</Text>
          </View>
          <View style={[styles.adamWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.adam, styles.adamTypo]}>Adam</Text>
          </View>
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
      <Image
        style={styles.tomatoesIcon}
        contentFit="cover"
        source={require("../assets/tomatoes.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-368432.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupIconLayout: {
    height: 44,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_xl,
    height: 27,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  adamTypo: {
    fontFamily: FontFamily.dMSansBold,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontWeight: "700",
  },
  h2Typo: {
    marginTop: 8,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
  },
  addToQueueChild: {
    width: 906,
    height: 906,
  },
  addToQueueItem: {
    top: 24,
    width: 342,
    height: 44,
    left: 24,
  },
  continue: {
    color: Color.lightColorsWhite,
    textAlign: "center",
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  continueWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightColorsPrimary,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 342,
  },
  addToQueueInner: {
    top: 589,
    left: 14,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  units: {
    color: Color.seagreen_100,
    textAlign: "left",
  },
  unitsWrapper: {
    top: 54,
    left: 172,
  },
  adam: {
    color: Color.darkslategray,
    textAlign: "left",
  },
  adamWrapper: {
    top: 89,
    left: 152,
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
    width: 252,
    height: 116,
  },
  originPolandPl: {
    fontWeight: "500",
    fontFamily: FontFamily.tTNormsProMedium,
    color: Color.lightFontGrey,
    display: "flex",
    width: 330,
    marginTop: 12,
    textAlign: "left",
    fontSize: FontSize.size_base,
    alignItems: "center",
  },
  groupParent: {
    top: 416,
    left: 24,
    position: "absolute",
  },
  tomatoesIcon: {
    top: 91,
    left: 42,
    width: 305,
    height: 217,
    position: "absolute",
  },
  groupIcon: {
    top: 786,
    left: 32,
    width: 327,
  },
  addToQueue: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AddToQueue;
