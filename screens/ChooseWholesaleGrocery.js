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
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const ChooseWholesaleGrocery = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseWholesaleGrocery}>
      <Image
        style={[styles.chooseWholesaleGroceryChild, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-884.png")}
      />
      <Image
        style={[styles.chooseWholesaleGroceryItem, styles.chooseLayout]}
        contentFit="cover"
        source={require("../assets/group-36981.png")}
      />
      <Image
        style={[styles.chooseWholesaleGroceryInner, styles.chooseLayout]}
        contentFit="cover"
        source={require("../assets/group-36982.png")}
      />
      <Image
        style={[styles.groupIcon, styles.chooseLayout]}
        contentFit="cover"
        source={require("../assets/group-36983.png")}
      />
      <Image
        style={[styles.chooseWholesaleGroceryChild1, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-36770.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2251.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.maskGroupWrapper, styles.groupLayout]}>
          <View style={[styles.maskGroupWrapper, styles.groupLayout]} />
        </View>
        <View style={[styles.frameWrapper, styles.wrapperFlexBox1]}>
          <View style={styles.wrapperFlexBox}>
            <View style={styles.wrapperFlexBox}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text style={styles.myFlat}>My Flat</Text>
            </View>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.ahoj, styles.ahojTypo]}>Ahoj!</Text>
      <View style={[styles.frameView, styles.frameViewLayout]} />
      <View
        style={[styles.chooseWholesaleGroceryChild2, styles.rectangleViewBg]}
      />
      <View style={[styles.wholesalesNearYouWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.wholesalesNearYou, styles.ahojTypo]}>
          Wholesales Near You
        </Text>
      </View>
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <TouchableOpacity
        style={styles.input}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={styles.text}>Makro</Text>
        </View>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.chooseChildLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </TouchableOpacity>
      <View style={styles.chooseWholesaleGroceryChild3} />
      <Image
        style={[styles.chooseWholesaleGroceryChild4, styles.chooseChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.chooseWholesaleGroceryChild5, styles.chooseChildLayout]}
        contentFit="cover"
        source={require("../assets/group-112.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseIconPosition: {
    top: 0,
    left: 0,
  },
  chooseLayout: {
    height: 36,
    width: 36,
    position: "absolute",
  },
  groupLayout: {
    height: 44,
    position: "absolute",
  },
  wrapperFlexBox1: {
    justifyContent: "center",
    position: "absolute",
  },
  ahojTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameViewLayout: {
    height: 73,
    width: 342,
    top: 98,
    justifyContent: "center",
    borderRadius: Border.br_48xl,
    left: 24,
  },
  rectangleViewBg: {
    backgroundColor: Color.seagreen_400,
    position: "absolute",
  },
  wrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  chooseChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chooseWholesaleGroceryChild: {
    width: 439,
    height: 988,
    left: 0,
    position: "absolute",
  },
  chooseWholesaleGroceryItem: {
    top: 258,
    left: 159,
  },
  chooseWholesaleGroceryInner: {
    top: 149,
    left: 247,
  },
  groupIcon: {
    top: 372,
    left: 96,
  },
  chooseWholesaleGroceryChild1: {
    width: 44,
    height: 44,
    left: 24,
    top: 24,
  },
  ellipseIcon: {
    width: 906,
    height: 883,
    left: 0,
    position: "absolute",
  },
  maskGroupWrapper: {
    width: 44,
    height: 44,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    width: 15,
    height: 18,
  },
  myFlat: {
    fontSize: FontSize.size_xs,
    color: Color.gray_100,
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  vectorIcon1: {
    width: 10,
    height: 6,
    marginLeft: 8,
  },
  frameWrapper: {
    top: 1,
    left: 227,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    borderRadius: Border.br_48xl,
    justifyContent: "center",
    backgroundColor: Color.lightColorsWhite,
  },
  groupParent: {
    width: 343,
    left: 24,
    top: 24,
  },
  ahoj: {
    top: 37,
    left: 75,
    color: Color.lightFontGrey,
    position: "absolute",
  },
  frameView: {
    backgroundColor: Color.lightColorsWhite,
    height: 73,
    width: 342,
    top: 98,
    position: "absolute",
  },
  chooseWholesaleGroceryChild2: {
    height: 73,
    width: 342,
    top: 98,
    justifyContent: "center",
    borderRadius: Border.br_48xl,
    left: 24,
  },
  wholesalesNearYou: {
    color: "#eaeaea",
  },
  wholesalesNearYouWrapper: {
    top: 123,
    left: 111,
    position: "absolute",
  },
  rectangleView: {
    top: 477,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    width: 390,
    height: 427,
    left: 0,
  },
  text: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.slategray,
    textAlign: "left",
  },
  wrapper: {
    top: 23,
    left: 79,
    justifyContent: "center",
    position: "absolute",
  },
  image1Icon: {
    top: 12,
    left: 23,
    borderRadius: 5,
    width: 45,
    height: 45,
    position: "absolute",
  },
  vectorIcon2: {
    height: "20%",
    width: "2.35%",
    top: "40%",
    right: "6.76%",
    bottom: "40%",
    left: "90.88%",
  },
  input: {
    top: 526,
    left: 25,
    borderRadius: Border.br_xl,
    backgroundColor: Color.ghostwhite,
    width: 340,
    height: 70,
    position: "absolute",
  },
  chooseWholesaleGroceryChild3: {
    top: 495,
    left: 164,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightColorsLightGrey,
    width: 63,
    height: 4,
    position: "absolute",
  },
  chooseWholesaleGroceryChild4: {
    height: "4.55%",
    width: "9.88%",
    top: "3.32%",
    right: "82.69%",
    bottom: "92.13%",
    left: "7.44%",
  },
  chooseWholesaleGroceryChild5: {
    height: "4.41%",
    width: "8.51%",
    top: "3.8%",
    right: "83.22%",
    bottom: "91.79%",
    left: "8.27%",
  },
  chooseWholesaleGrocery: {
    borderRadius: Border.br_5xl,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ChooseWholesaleGrocery;
