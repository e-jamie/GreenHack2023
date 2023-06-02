import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const RegisterContainer = () => {
  return (
    <View style={styles.registerFilledInner}>
      <View style={styles.frameWrapper}>
        <View style={styles.frameWrapper}>
          <View style={styles.groupWrapper}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-11.png")}
            />
          </View>
          <Text style={[styles.register, styles.registerSpaceBlock]}>
            Register
          </Text>
          <Text style={[styles.weWillSend, styles.registerSpaceBlock]}>
            We will send you a verification code
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerSpaceBlock: {
    marginTop: 16,
    textAlign: "center",
  },
  frameChild: {
    width: 61,
    height: 61,
  },
  groupWrapper: {
    flexDirection: "row",
  },
  register: {
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.gray_100,
    width: 318,
  },
  weWillSend: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.lightFontGrey,
    width: 274,
  },
  frameWrapper: {
    alignItems: "center",
  },
  registerFilledInner: {
    position: "absolute",
    top: 92,
    left: 36,
    alignItems: "center",
  },
});

export default RegisterContainer;
