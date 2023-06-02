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
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const AdelaContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupPosition}>
      <View style={styles.groupPosition}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={styles.h1ParentPosition}>
            <Text style={styles.h1}>Adela</Text>
            <Text style={styles.h2}>9 units reserved</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameLayout]}>
        <TouchableOpacity
          style={[styles.plus1Wrapper, styles.h1ParentPosition]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("AddToQueue1")}
        >
          <Image
            style={styles.plus1Icon}
            contentFit="cover"
            source={require("../assets/group-36828.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tomatoes} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    height: 214,
    width: 163,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 36,
    position: "absolute",
  },
  h1ParentPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.lightColorsLightBG,
  },
  h1: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.tTNormsProBold,
    color: Color.fontDark,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    width: 93,
  },
  h2: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.lightColorsSecondary,
    marginTop: 4,
    textAlign: "left",
  },
  frameWrapper: {
    top: 126,
    left: 17,
    width: 93,
  },
  plus1Icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  plus1Wrapper: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.lightColorsPrimary,
    flexDirection: "row",
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  frameContainer: {
    top: 162,
    left: 118,
    width: 36,
  },
  tomatoes: {
    top: 29,
    left: 14,
    width: 131,
    height: 91,
    position: "absolute",
  },
});

export default AdelaContainer;
