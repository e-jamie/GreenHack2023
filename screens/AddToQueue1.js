import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RedTomatoesCard from "../components/RedTomatoesCard";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AddToQueue1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addToQueue1}>
      <Image
        style={styles.addToQueue1Child}
        contentFit="cover"
        source={require("../assets/ellipse-2252.png")}
      />
      <Image
        style={[styles.addToQueue1Item, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-368454.png")}
      />
      <TouchableOpacity
        style={styles.addToQueue1Inner}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("ChoosePaymentMethod")}
      >
        <View style={styles.continueWrapper}>
          <Text style={styles.continue}>Add to Queue</Text>
        </View>
      </TouchableOpacity>
      <RedTomatoesCard />
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
  groupIconLayout: {
    height: 44,
    position: "absolute",
  },
  addToQueue1Child: {
    top: 0,
    left: 0,
    width: 906,
    height: 906,
    position: "absolute",
  },
  addToQueue1Item: {
    top: 24,
    left: 24,
    width: 342,
  },
  continue: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.tTNormsProBold,
    color: Color.lightColorsWhite,
    textAlign: "center",
  },
  continueWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightColorsPrimary,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
    width: 342,
  },
  addToQueue1Inner: {
    top: 589,
    left: 14,
    padding: Padding.p_3xs,
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
  addToQueue1: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AddToQueue1;
