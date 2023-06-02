import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import RegisterContainer from "../components/RegisterContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const RegisterFilled = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerFilled}>
      <Image
        style={styles.registerFilledChild}
        contentFit="cover"
        source={require("../assets/group-367702.png")}
      />
      <RegisterContainer />
      <View style={styles.registerFilledInner}>
        <View style={styles.frameFlexBox}>
          <Pressable
            style={[styles.frameWrapper, styles.frameFlexBox]}
            onPress={() => navigation.navigate("ChooseWholesaleGrocery")}
          >
            <View style={styles.continueWrapper}>
              <Text style={styles.continue}>Continue</Text>
            </View>
          </Pressable>
          <View style={styles.byClickingOnContinueYouWrapper}>
            <Text style={styles.byClickingOnContainer}>
              <Text
                style={styles.byClickingOn}
              >{`By clicking on “Continue” you are agreeing to our `}</Text>
              <Text style={styles.termsOfUse}>{`terms of use `}</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.inputParent}>
        <View style={[styles.input, styles.inputLayout1]}>
          <View style={styles.frame205Copy}>
            <Text style={styles.text}>+420</Text>
          </View>
        </View>
        <View style={[styles.input2, styles.inputLayout1]}>
          <View style={styles.input2Inner}>
            <View style={styles.frame205Copy}>
              <Text style={styles.phoneNumber}>{`722 729 815 `}</Text>
            </View>
          </View>
        </View>
        <View style={styles.phoneNumberContainer}>
          <Text style={[styles.phoneNumber1, styles.passwordTypo1]}>
            Phone Number
          </Text>
        </View>
      </View>
      <View style={[styles.inputGroup, styles.inputLayout]}>
        <View style={[styles.input1, styles.inputLayout]}>
          <View style={styles.frame205Copy}>
            <Text style={styles.phoneNumber}>••••••••••••••</Text>
          </View>
        </View>
        <Text style={[styles.password, styles.passwordTypo1]}>Password</Text>
      </View>
      <View style={styles.rememberPasswordParent}>
        <Text style={[styles.rememberPassword, styles.passwordTypo]}>
          Remember Password
        </Text>
        <View style={styles.checkBox}>
          <View style={styles.checkBox1Position}>
            <View style={styles.checkBox1Position}>
              <View style={[styles.groupChild, styles.checkBox1Position]} />
              <Image
                style={styles.groupItem}
                contentFit="cover"
                source={require("../assets/group-85.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.forgetPassword, styles.passwordTypo]}>
        Forget Password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputLayout1: {
    height: 56,
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_xl,
  },
  passwordTypo1: {
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.black,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_lg,
  },
  inputLayout: {
    width: 340,
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  checkBox1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  registerFilledChild: {
    top: 24,
    left: 24,
    width: 44,
    height: 44,
    position: "absolute",
  },
  continue: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.lightColorsWhite,
    textAlign: "center",
  },
  continueWrapper: {
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  frameWrapper: {
    borderRadius: Border.br_81xl,
    width: 342,
    height: 50,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    backgroundColor: Color.lightColorsPrimary,
  },
  byClickingOn: {
    color: Color.darkgray_100,
  },
  termsOfUse: {
    textDecoration: "underline",
    color: Color.mediumslateblue,
  },
  byClickingOnContainer: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 326,
    textAlign: "center",
  },
  byClickingOnContinueYouWrapper: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginTop: 10,
    flexDirection: "row",
  },
  registerFilledInner: {
    top: 595,
    left: 12,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  text: {
    color: Color.slategray,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 24,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  frame205Copy: {
    flexDirection: "row",
  },
  input: {
    left: 8,
    width: 91,
    paddingHorizontal: Padding.p_xl,
    top: 46,
    height: 56,
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_xl,
    position: "absolute",
    paddingVertical: Padding.p_base,
  },
  phoneNumber: {
    textAlign: "left",
    color: Color.slategray,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 24,
    fontSize: FontSize.size_lg,
  },
  input2Inner: {
    padding: Padding.p_3xs,
  },
  input2: {
    left: 108,
    width: 240,
    paddingLeft: Padding.p_smi,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_57xl,
    paddingBottom: Padding.p_7xs,
    top: 46,
    height: 56,
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  phoneNumber1: {
    color: Color.black,
  },
  phoneNumberContainer: {
    left: 0,
    top: 0,
    flexDirection: "row",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  inputParent: {
    top: 277,
    left: 17,
    width: 348,
    height: 102,
    position: "absolute",
  },
  input1: {
    top: 36,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    height: 56,
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_base,
  },
  password: {
    left: 2,
    width: 81,
    height: 25,
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  inputGroup: {
    top: 412,
    height: 92,
    left: 25,
  },
  rememberPassword: {
    left: 26,
    width: 133,
    height: 25,
    color: Color.black,
    top: 0,
  },
  groupChild: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.lightColorsPrimary,
  },
  groupItem: {
    height: "38.63%",
    width: "49.79%",
    top: "30.69%",
    right: "25.11%",
    bottom: "30.69%",
    left: "25.11%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  checkBox: {
    top: 3,
    width: 19,
    height: 19,
    left: 0,
    position: "absolute",
  },
  rememberPasswordParent: {
    width: 159,
    top: 545,
    height: 25,
    left: 25,
    position: "absolute",
  },
  forgetPassword: {
    left: 255,
    color: Color.seagreen_200,
    width: 110,
    height: 26,
    top: 545,
  },
  registerFilled: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default RegisterFilled;
