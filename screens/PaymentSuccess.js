import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PaymentSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentSuccess}>
      <Image
        style={[styles.vectorIcon, styles.phxPosition]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.paymentSuccess1, styles.kindlyWaitForFlexBox]}>
        Payment Success!
      </Text>
      <TouchableOpacity
        style={[styles.phx, styles.phxPosition]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("QueueCompleteNotif")}
      >
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.kindlyWaitFor, styles.kindlyWaitForFlexBox]}>
        Kindly wait for a notification for when your queue is complete! If your
        queue is not filled up within 24 hours, your payment will be refunded to
        your account.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  phxPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  kindlyWaitForFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon: {
    height: "21.09%",
    width: "45.64%",
    top: "20.73%",
    right: "27.18%",
    bottom: "58.18%",
    left: "27.18%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  paymentSuccess1: {
    height: "11.97%",
    width: "98.97%",
    top: "45.38%",
    left: "0.51%",
    fontSize: 35,
    letterSpacing: 0.2,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.lightColorsWhite,
  },
  vectorIcon1: {
    width: 17,
    height: 17,
  },
  phx: {
    marginTop: -408.62,
    width: "8.01%",
    top: "50%",
    right: "3.18%",
    left: "88.82%",
    flexDirection: "row",
    padding: 7,
  },
  kindlyWaitFor: {
    height: "11.73%",
    width: "88.46%",
    top: "52.25%",
    left: "5.64%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.tTNormsProMedium,
    color: "rgba(255, 255, 255, 0.7)",
  },
  paymentSuccess: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PaymentSuccess;
