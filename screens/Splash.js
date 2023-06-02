import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image
        style={styles.splashChild}
        contentFit="cover"
        source={require("../assets/group-12.png")}
      />
      <Image
        style={styles.layer1Icon}
        contentFit="cover"
        source={require("../assets/layer-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashChild: {
    top: 367,
    left: 140,
    width: 110,
    height: 110,
    position: "absolute",
  },
  layer1Icon: {
    height: "5.92%",
    width: "13.33%",
    top: "47.04%",
    right: "43.33%",
    bottom: "47.04%",
    left: "43.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  splash: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Splash;
