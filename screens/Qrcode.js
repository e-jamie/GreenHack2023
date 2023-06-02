import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Qrcode = () => {
  return (
    <View style={styles.qrcode}>
      <Image
        style={styles.qrCodeIcon}
        contentFit="cover"
        source={require("../assets/qr-code.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  qrCodeIcon: {
    position: "absolute",
    height: "312.5%",
    width: "312.5%",
    top: "0%",
    right: "-212.5%",
    bottom: "-212.5%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  qrcode: {
    flex: 1,
    width: "100%",
    height: 85,
    overflow: "hidden",
  },
});

export default Qrcode;
