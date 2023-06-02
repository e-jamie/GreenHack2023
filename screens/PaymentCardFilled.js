import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const PaymentCardFilled = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentCardFilled}>
      <Image
        style={styles.paymentCardFilledChild}
        contentFit="cover"
        source={require("../assets/group-368452.png")}
      />
      <Text style={[styles.cardInfo, styles.cardLayout]}>Card Info</Text>
      <Text style={[styles.cardNumber, styles.textTypo]}>Card Number</Text>
      <View style={[styles.wrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.text, styles.textTypo]}>5218 9981 1112 4597</Text>
      </View>
      <View style={[styles.container, styles.framePosition]}>
        <Text style={[styles.text, styles.textTypo]}>11/26</Text>
      </View>
      <Image
        style={[styles.paymentCardFilledItem, styles.cardPosition]}
        contentFit="cover"
        source={require("../assets/line-75.png")}
      />
      <Text style={[styles.expiryDate, styles.cvccvvTypo]}>Expiry Date</Text>
      <View style={[styles.paymentCardFilledInner, styles.lineViewLayout]} />
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={[styles.text, styles.textTypo]}>321</Text>
      </View>
      <Text style={[styles.cvccvv, styles.cvccvvPosition]}>CVC/CVV</Text>
      <View style={[styles.lineView, styles.cvccvvPosition]} />
      <Pressable
        style={[styles.framePressable, styles.wrapperSpaceBlock]}
        onPress={() => navigation.navigate("PaymentSuccess")}
      >
        <View style={styles.continueWrapper}>
          <Text style={styles.continue}>Pay</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 31,
    width: 302,
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
  },
  textTypo: {
    textAlign: "left",
    color: Color.seagreen_300,
    fontSize: FontSize.size_base,
  },
  wrapperSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  framePosition: {
    top: 260,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  cardPosition: {
    left: 35,
    position: "absolute",
  },
  cvccvvTypo: {
    height: 24,
    width: 93,
    top: 241,
    textAlign: "left",
    color: Color.seagreen_300,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
  },
  lineViewLayout: {
    height: 1,
    width: 121,
    borderTopWidth: 1,
    borderColor: "#017b4e",
    borderStyle: "solid",
    top: 293,
  },
  cvccvvPosition: {
    left: 225,
    position: "absolute",
  },
  paymentCardFilledChild: {
    top: 24,
    left: 24,
    width: 44,
    height: 44,
    position: "absolute",
  },
  cardInfo: {
    top: 76,
    left: 44,
    fontSize: FontSize.size_5xl,
    color: Color.gray_100,
    textAlign: "center",
    height: 31,
    width: 302,
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
    position: "absolute",
  },
  cardNumber: {
    top: 140,
    left: 35,
    position: "absolute",
    height: 31,
    width: 302,
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
    color: Color.seagreen_300,
  },
  text: {
    letterSpacing: 0.7,
    fontFamily: FontFamily.tTNormsProRegular,
  },
  wrapper: {
    top: 162,
    flexDirection: "row",
    left: 25,
  },
  container: {
    left: 25,
  },
  paymentCardFilledItem: {
    top: 192,
    width: 310,
    height: 2,
  },
  expiryDate: {
    left: 35,
    position: "absolute",
  },
  paymentCardFilledInner: {
    left: 34,
    position: "absolute",
  },
  frame: {
    left: 215,
  },
  cvccvv: {
    height: 24,
    width: 93,
    top: 241,
    textAlign: "left",
    color: Color.seagreen_300,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
  },
  lineView: {
    height: 1,
    width: 121,
    borderTopWidth: 1,
    borderColor: "#017b4e",
    borderStyle: "solid",
    top: 293,
  },
  continue: {
    color: Color.lightColorsWhite,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
  },
  continueWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightColorsPrimary,
    width: 342,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  framePressable: {
    top: 340,
    left: 14,
  },
  paymentCardFilled: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PaymentCardFilled;
