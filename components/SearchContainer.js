import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SearchContainer = () => {
  return (
    <View style={styles.homeInner}>
      <View style={styles.frameWrapper}>
        <View style={styles.frameWrapper}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={styles.searchCategory}>Search category</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    width: 15,
    height: 15,
  },
  searchCategory: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightFontGrey,
    textAlign: "center",
    marginLeft: 8,
  },
  frameWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeInner: {
    position: "absolute",
    top: 92,
    left: 24,
    borderRadius: Border.br_48xl,
    backgroundColor: Color.lightColorsWhite,
    width: 342,
    padding: Padding.p_base,
    justifyContent: "center",
  },
});

export default SearchContainer;
