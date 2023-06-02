import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Bell = () => {
  return (
    <View style={styles.bell}>
      <Image
        style={styles.layer2Icon}
        contentFit="cover"
        source={require("../assets/layer-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layer2Icon: {
    position: "absolute",
    height: "83.34%",
    width: "74.92%",
    top: "8.34%",
    right: "12.54%",
    bottom: "8.32%",
    left: "12.54%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  bell: {
    flex: 1,
    width: "100%",
    height: 512,
    overflow: "hidden",
  },
});

export default Bell;
