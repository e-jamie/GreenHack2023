import * as React from "react";
import { Linking, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FontLink = () => {
  return (
    <View style={styles.fontLink}>
      <Text style={styles.downloadFontFromContainer}>
        {`Download Font from :
`}
        <Text style={styles.googleFonts}>Google Fonts</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  googleFonts: {
    textDecoration: "underline",
  },
  downloadFontFromContainer: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.black,
    textAlign: "left",
  },
  fontLink: {
    backgroundColor: Color.lightColorsWhite,
    flex: 1,
    width: "100%",
    height: 126,
    flexDirection: "row",
    paddingLeft: Padding.p_13xl,
    paddingTop: Padding.p_13xl,
    paddingRight: 443,
    paddingBottom: Padding.p_13xl,
  },
});

export default FontLink;
