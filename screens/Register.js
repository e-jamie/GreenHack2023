import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import RegisterContainer from "../components/RegisterContainer";
import { useNavigation } from "@react-navigation/native";
import PhoneNumberInput from "../components/PhoneNumberInput";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <Image
        style={styles.registerChild}
        contentFit="cover"
        source={require("../assets/group-367702.png")}
      />
      <RegisterContainer />
      <TouchableOpacity
        style={styles.registerInner}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("ChooseWholesaleGrocery")}
      >
        <View style={styles.continueWrapper}>
          <Text style={styles.continue}>Continue</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.byClickingOnContinueYouWrapper}>
        <Text style={styles.byClickingOnContainer}>
          <Text
            style={styles.byClickingOn}
          >{`By clicking on “Continue” you are agreeing to our `}</Text>
          <Text style={styles.termsOfUse}>{`terms of use `}</Text>
        </Text>
      </View>
      <PhoneNumberInput />
      <View style={styles.inputParent}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="#6e7191"
        />
        <Text style={[styles.password, styles.passwordClr]}>Password</Text>
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
  passwordClr: {
    color: Color.black,
    top: 0,
    height: 25,
  },
  passwordTypo: {
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    fontFamily: FontFamily.poppinsRegular,
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
  registerChild: {
    top: 24,
    width: 44,
    height: 44,
    left: 24,
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
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  registerInner: {
    top: 605,
    borderRadius: Border.br_81xl,
    width: 342,
    height: 50,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    backgroundColor: Color.lightColorsPrimary,
    left: 24,
    position: "absolute",
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
    top: 665,
    left: 22,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    flexDirection: "row",
    position: "absolute",
  },
  input: {
    top: 36,
    borderRadius: Border.br_xl,
    backgroundColor: Color.ghostwhite,
    height: 56,
    paddingHorizontal: Padding.p_2xl,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    width: 340,
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  password: {
    left: 2,
    fontFamily: FontFamily.tTNormsProRegular,
    textAlign: "left",
    width: 81,
    height: 25,
    lineHeight: 24,
    color: Color.black,
    top: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  inputParent: {
    top: 412,
    height: 92,
    width: 340,
    left: 25,
    position: "absolute",
  },
  rememberPassword: {
    left: 26,
    width: 133,
    height: 25,
    color: Color.black,
    top: 0,
    fontSize: FontSize.size_xs,
  },
  groupChild: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.lightColorsPrimary,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
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
  register: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Register;
