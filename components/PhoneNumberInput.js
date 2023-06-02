import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PhoneNumberInput = () => {
  return (
    <View style={styles.inputParent}>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={styles.frame205Copy}>
          <Text style={[styles.text, styles.textTypo]}>+420</Text>
        </View>
      </View>
      <TextInput
        style={[styles.input2, styles.textTypo]}
        placeholder="Phone Number"
        keyboardType="default"
        placeholderTextColor="#6e7191"
      />
      <View style={styles.phoneNumberWrapper}>
        <Text style={styles.phoneNumber}>Phone Number</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 56,
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_xl,
    top: 46,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
  },
  text: {
    color: Color.slategray,
    textAlign: "center",
    lineHeight: 24,
  },
  frame205Copy: {
    flexDirection: "row",
  },
  input: {
    left: 8,
    width: 91,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
  },
  input2: {
    left: 108,
    width: 240,
    paddingLeft: Padding.p_smi,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_57xl,
    paddingBottom: Padding.p_7xs,
    height: 56,
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_xl,
    top: 46,
    position: "absolute",
  },
  phoneNumber: {
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.black,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_lg,
  },
  phoneNumberWrapper: {
    top: 0,
    left: 0,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  inputParent: {
    top: 277,
    left: 17,
    width: 348,
    height: 102,
    position: "absolute",
  },
});

export default PhoneNumberInput;
