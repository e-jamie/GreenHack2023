import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const ChoosePaymentMethod = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.choosePaymentMethod}>
      <Image
        style={[styles.choosePaymentMethodChild, styles.framePosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-2252.png")}
      />
      <Image
        style={styles.tomatoesIcon}
        contentFit="cover"
        source={require("../assets/tomatoes.png")}
      />
      <View style={styles.choosePaymentMethodItem} />
      <Image
        style={[styles.choosePaymentMethodInner, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-368453.png")}
      />
      <View style={[styles.frameView, styles.framePosition]}>
        <View style={styles.continueWrapper}>
          <Text style={styles.continue}>Add to Queue</Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={styles.frameParent}>
          <View style={[styles.unitsWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.units, styles.unitsTypo]}>8 units</Text>
          </View>
          <View style={[styles.emaWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.ema, styles.unitsTypo]}>Ema</Text>
          </View>
          <View style={[styles.frameWrapper, styles.framePosition1]}>
            <View style={[styles.frameContainer, styles.framePosition1]}>
              <View>
                <View>
                  <Text style={styles.h1}>Red Tomatoes</Text>
                  <Text style={[styles.unitsCzk17340, styles.unitsTypo]}>
                    48 units, CZK 173.40
                  </Text>
                </View>
                <Text style={[styles.h2, styles.h2Typo]}>Reserve Amount:</Text>
                <Text style={[styles.h21, styles.h2Typo]}>Reserve Under:</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.originPolandPl}>Origin: Poland (PL)</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-368431.png")}
      />
      <View style={styles.groupView}>
        <View style={[styles.groupWrapper, styles.yourPlacePosition]}>
          <View style={[styles.groupWrapper, styles.yourPlacePosition]}>
            <View style={[styles.groupWrapper, styles.yourPlacePosition]}>
              <Text style={[styles.yourPlace, styles.yourPlacePosition]}>
                Your place
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleView, styles.framePosition1]} />
      <View style={styles.choosePaymentMethodChild1} />
      <View style={styles.lineView} />
      <Text style={styles.selectAPayment}>Select a payment method</Text>
      <Image
        style={styles.phxIcon}
        contentFit="cover"
        source={require("../assets/phx.png")}
      />
      <TouchableOpacity
        style={[styles.frameTouchableopacity, styles.framePosition]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("PaymentCard")}
      >
        <Pressable
          style={styles.childLayout1}
          onPress={() => navigation.navigate("PaymentCard")}
        />
      </TouchableOpacity>
      <View style={[styles.choosePaymentMethodChild2, styles.childLayout1]} />
      <View style={[styles.choosePaymentMethodChild3, styles.childLayout1]} />
      <View style={styles.paymentCard}>
        <View style={[styles.paymentCardWrapper, styles.applePay1Position]}>
          <Text style={[styles.paymentCard1, styles.paypal1Typo]}>
            Payment card
          </Text>
        </View>
        <View style={[styles.paymentCardChild, styles.childLayout]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </View>
      <View style={[styles.applePay, styles.paypalPosition]}>
        <Image
          style={styles.pxApplePayLogo1Icon}
          contentFit="cover"
          source={require("../assets/512pxapple-pay-logo-1.png")}
        />
        <Text style={[styles.applePay1, styles.paypal1Typo]}>Apple Pay</Text>
        <View style={[styles.paymentCardChild, styles.childLayout]} />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </View>
      <View style={[styles.paypal, styles.paypalPosition]}>
        <Image
          style={styles.pxPaypalLogo1Icon}
          contentFit="cover"
          source={require("../assets/527pxpaypal-logo-1.png")}
        />
        <Text style={[styles.paypal1, styles.paypal1Typo]}>PayPal</Text>
        <View style={[styles.paypalChild, styles.childLayout]} />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    left: 0,
    position: "absolute",
  },
  groupIconLayout: {
    height: 44,
    position: "absolute",
  },
  framePosition: {
    padding: Padding.p_3xs,
    left: 14,
    position: "absolute",
  },
  groupParentPosition: {
    left: 24,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_xl,
    height: 27,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  unitsTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  h2Typo: {
    marginTop: 8,
    fontFamily: FontFamily.tTNormsProBold,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontWeight: "700",
  },
  yourPlacePosition: {
    left: "0%",
    top: "0%",
  },
  childLayout1: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightColorsPrimary,
    height: 44,
    width: 342,
  },
  applePay1Position: {
    top: "3.7%",
    left: "25.82%",
  },
  paypal1Typo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.tTNormsProBold,
    textAlign: "left",
    color: Color.lightColorsWhite,
    fontWeight: "700",
    position: "absolute",
  },
  childLayout: {
    width: 60,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    height: 27,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "96.08%",
    width: "3.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  paypalPosition: {
    width: 306,
    left: 44,
    position: "absolute",
  },
  choosePaymentMethodChild: {
    width: 906,
    height: 906,
    top: 0,
  },
  tomatoesIcon: {
    top: 91,
    left: 42,
    width: 305,
    height: 217,
    position: "absolute",
  },
  choosePaymentMethodItem: {
    left: -19,
    backgroundColor: "rgba(203, 203, 203, 0.5)",
    width: 409,
    top: 0,
    position: "absolute",
    height: 844,
  },
  choosePaymentMethodInner: {
    top: 24,
    width: 342,
    height: 44,
    left: 24,
  },
  continue: {
    textAlign: "center",
    color: Color.lightColorsWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  continueWrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.lightColorsPrimary,
    borderRadius: Border.br_81xl,
    width: 342,
  },
  frameView: {
    top: 589,
  },
  units: {
    color: Color.seagreen_100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  unitsWrapper: {
    top: 54,
    left: 172,
  },
  ema: {
    color: Color.darkslategray,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  emaWrapper: {
    top: 89,
    left: 152,
  },
  h1: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.fontDark,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontWeight: "700",
  },
  unitsCzk17340: {
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.lightColorsSecondary,
  },
  h2: {
    color: Color.seagreen_300,
  },
  h21: {
    color: Color.darkslategray,
  },
  frameContainer: {
    top: 0,
  },
  frameWrapper: {
    width: 177,
    height: 114,
    top: 0,
  },
  frameParent: {
    width: 252,
    height: 116,
  },
  originPolandPl: {
    fontFamily: FontFamily.tTNormsProMedium,
    display: "flex",
    width: 330,
    marginTop: 12,
    color: Color.lightFontGrey,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_base,
    alignItems: "center",
  },
  groupParent: {
    top: 416,
  },
  groupIcon: {
    top: 786,
    left: 32,
    width: 327,
  },
  yourPlace: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dMSansMedium,
    left: "0%",
    top: "0%",
    height: "100%",
    color: Color.lightFontGrey,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },
  groupWrapper: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupView: {
    height: "2.15%",
    width: "17.95%",
    top: "90.93%",
    right: "66.15%",
    bottom: "6.92%",
    left: "15.9%",
    position: "absolute",
  },
  rectangleView: {
    top: 522,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    width: 390,
    height: 443,
    backgroundColor: Color.lightColorsWhite,
    left: 0,
  },
  choosePaymentMethodChild1: {
    top: 549,
    left: 164,
    backgroundColor: Color.lightColorsLightGrey,
    width: 63,
    height: 4,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  lineView: {
    top: 620,
    left: 49,
    borderColor: "#06161c",
    borderTopWidth: 1,
    width: 286,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  selectAPayment: {
    top: 580,
    color: Color.gray_100,
    width: 302,
    height: 31,
    left: 44,
    fontFamily: FontFamily.tTNormsProBold,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  phxIcon: {
    top: 540,
    left: 338,
    width: 32,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  frameTouchableopacity: {
    top: 631,
  },
  choosePaymentMethodChild2: {
    top: 692,
    left: 24,
    position: "absolute",
  },
  choosePaymentMethodChild3: {
    top: 745,
    left: 25,
    position: "absolute",
  },
  paymentCard1: {
    left: "0%",
    top: "0%",
  },
  paymentCardWrapper: {
    height: "81.48%",
    width: "37.91%",
    right: "36.27%",
    left: "25.82%",
    bottom: "14.81%",
    position: "absolute",
  },
  paymentCardChild: {
    backgroundColor: Color.gainsboro_200,
  },
  vectorIcon: {
    height: "68.75%",
    width: "7.43%",
    top: "15.63%",
    right: "86.48%",
    bottom: "15.63%",
    left: "6.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    top: "14.81%",
    bottom: "11.11%",
    height: "74.07%",
    left: "96.08%",
    width: "3.92%",
  },
  paymentCard: {
    height: "3.2%",
    width: "78.46%",
    top: "76.9%",
    right: "10.26%",
    bottom: "19.91%",
    left: "11.28%",
    position: "absolute",
  },
  pxApplePayLogo1Icon: {
    top: 6,
    left: 10,
    width: 40,
    height: 16,
    position: "absolute",
  },
  applePay1: {
    height: "88.89%",
    width: "30.72%",
    left: "25.82%",
    top: "3.7%",
  },
  vectorIcon2: {
    top: "11.11%",
    height: "74.07%",
    left: "96.08%",
    width: "3.92%",
    bottom: "14.81%",
  },
  applePay: {
    top: 701,
    height: 27,
    width: 306,
  },
  pxPaypalLogo1Icon: {
    top: 8,
    left: 2,
    width: 56,
    height: 20,
    position: "absolute",
  },
  paypal1: {
    height: "89.29%",
    width: "20.59%",
    top: "10.71%",
    left: "25.82%",
  },
  paypalChild: {
    backgroundColor: "rgba(144, 144, 144, 0)",
  },
  vectorIcon3: {
    height: "71.43%",
    top: "14.29%",
    bottom: "14.29%",
  },
  paypal: {
    top: 753,
    height: 28,
  },
  choosePaymentMethod: {
    borderRadius: Border.br_5xl,
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.lightColorsWhite,
  },
});

export default ChoosePaymentMethod;
