import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const RedTomatoesContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupParent, styles.groupParentLayout]}>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={[styles.groupChild, styles.parentPosition]} />
        <View style={[styles.frameWrapper, styles.wrapperLayout]}>
          <View style={styles.parentPosition}>
            <Text style={styles.h1}>Red Tomatoes</Text>
            <Text style={styles.h2}>48 units, CZK 173.40</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.wrapper, styles.wrapperLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("ItemDetails")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/frame-36828.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.tomatoesIcon}
        contentFit="cover"
        source={require("../assets/tomatoes2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 214,
    width: 163,
  },
  parentPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 36,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.lightColorsLightBG,
    height: 214,
    width: 163,
  },
  h1: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.tTNormsProBold,
    color: Color.fontDark,
    display: "flex",
    alignItems: "center",
    width: 93,
    textAlign: "left",
  },
  h2: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.lightColorsSecondary,
    marginTop: 4,
    textAlign: "left",
  },
  frameWrapper: {
    top: 123,
    left: 17,
    width: 109,
  },
  rectangleParent: {
    height: 214,
    width: 163,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 118,
    top: 162,
    width: 36,
  },
  tomatoesIcon: {
    top: 29,
    left: 14,
    width: 131,
    height: 91,
    position: "absolute",
  },
  groupParent: {
    top: 549,
    left: 24,
    position: "absolute",
  },
});

export default RedTomatoesContainer;
