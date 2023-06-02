import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";

const PaymentCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentCard}>
      <Image
        style={styles.paymentCardChild}
        contentFit="cover"
        source={require("../assets/group-368452.png")}
      />
      <Text style={styles.cardInfo}>Card Info</Text>
      <Text style={styles.cardNumber}>Card Number</Text>
      <TextInput
        style={styles.paymentCardItem}
        placeholder="1234 5678 9012 3456"
        keyboardType="default"
        placeholderTextColor="rgba(1, 123, 78, 0.21)"
        maxLength={16}
      />
      <TextInput
        style={[styles.paymentCardInner, styles.frameTextinputPosition]}
        placeholder="MM/YY"
        keyboardType="default"
        placeholderTextColor="rgba(1, 123, 78, 0.21)"
      />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-75.png")}
      />
      <Text style={[styles.expiryDate, styles.cvccvvTypo]}>Expiry Date</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <TextInput
        style={[styles.frameTextinput, styles.frameTextinputPosition]}
        placeholder="000"
        keyboardType="default"
        placeholderTextColor="rgba(1, 123, 78, 0.21)"
        maxLength={3}
      />
      <Text style={[styles.cvccvv, styles.cvccvvPosition]}>CVC/CVV</Text>
      <View style={[styles.paymentCardChild1, styles.cvccvvPosition]} />
      <TouchableOpacity
        style={styles.frameTouchableopacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("PaymentSuccess")}
      >
        <View style={styles.continueWrapper}>
          <Text style={styles.continue}>Pay</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  frameTextinputPosition: {
    top: 260,
    fontFamily: FontFamily.tTNormsProRegular,
    padding: Padding.p_3xs,
    flexDirection: "row",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  lineIconPosition: {
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
  paymentCardChild: {
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
    height: 31,
    width: 302,
    textAlign: "center",
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
    position: "absolute",
  },
  cardNumber: {
    top: 140,
    textAlign: "left",
    color: Color.seagreen_300,
    fontSize: FontSize.size_base,
    left: 35,
    height: 31,
    width: 302,
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
    position: "absolute",
  },
  paymentCardItem: {
    top: 162,
    fontFamily: FontFamily.tTNormsProRegular,
    padding: Padding.p_3xs,
    flexDirection: "row",
    left: 25,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  paymentCardInner: {
    left: 25,
    top: 260,
  },
  lineIcon: {
    top: 192,
    width: 310,
    height: 2,
  },
  expiryDate: {
    left: 35,
    position: "absolute",
  },
  lineView: {
    left: 34,
    position: "absolute",
  },
  frameTextinput: {
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
  paymentCardChild1: {
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
  frameTouchableopacity: {
    top: 340,
    left: 14,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  paymentCard: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PaymentCard;
