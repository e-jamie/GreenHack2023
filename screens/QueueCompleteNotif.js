import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import SearchContainer from "../components/SearchContainer";
import CategoriesContainer from "../components/CategoriesContainer";
import BananaContainer from "../components/BananaContainer";
import FruitSection from "../components/FruitSection";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const QueueCompleteNotif = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.queueCompleteNotif}>
      <Image
        style={styles.queueCompleteNotifChild}
        contentFit="cover"
        source={require("../assets/ellipse-2252.png")}
      />
      <Text style={[styles.ahoj, styles.ahojTypo]}>Ahoj!</Text>
      <View style={styles.queueCompleteNotifInner}>
        <View style={styles.frameWrapper}>
          <View style={styles.frameParent}>
            <View style={styles.frameParent}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text style={[styles.myFlat, styles.ahojTypo]}>My Flat</Text>
            </View>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
        </View>
      </View>
      <SearchContainer />
      <CategoriesContainer
        productIds={require("../assets/group-367811.png")}
        productImageIds={require("../assets/group-367821.png")}
        productImageIds73x73={require("../assets/group-367831.png")}
        productImageIds73x73x={require("../assets/group-367841.png")}
      />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <View style={styles.frameContainer}>
            <View style={styles.h1Parent}>
              <Text style={[styles.h1, styles.h1Typo]}>Red Tomatoes</Text>
              <Text style={styles.h2}>48 units, CZK 173.40</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <Image
            style={styles.plus1Icon}
            contentFit="cover"
            source={require("../assets/group-36828.png")}
          />
        </View>
        <Image
          style={[styles.tomatoesIcon, styles.tomatoesIconLayout]}
          contentFit="cover"
          source={require("../assets/tomatoes2.png")}
        />
      </View>
      <Image
        style={[styles.tomatoesIcon1, styles.tomatoesIconLayout]}
        contentFit="cover"
        source={require("../assets/tomatoes2.png")}
      />
      <BananaContainer />
      <View style={styles.seeAllParent}>
        <Text style={[styles.seeAll, styles.textTypo]}>See all</Text>
        <View style={styles.bestSellingWrapper}>
          <Text style={[styles.bestSelling, styles.h1Typo]}>Best selling</Text>
        </View>
      </View>
      <FruitSection transactionIds={require("../assets/vector-6192.png")} />
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <Pressable
          style={[styles.rectangleContainer, styles.bellWrapperLayout]}
          onPress={() => navigation.navigate("NotifsPage")}
        >
          <View style={styles.groupInner} />
          <View style={[styles.bellWrapper, styles.bellWrapperLayout]}>
            <TouchableHighlight
              style={styles.bell}
              underlayColor="#319f25"
              onPress={() => navigation.navigate("NotifsPage")}
            >
              <Image
                style={styles.layer2Icon}
                contentFit="cover"
                source={require("../assets/layer-21.png")}
              />
            </TouchableHighlight>
          </View>
        </Pressable>
        <Image
          style={[styles.groupIcon, styles.groupViewLayout]}
          contentFit="cover"
          source={require("../assets/group-368391.png")}
        />
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.rectangleView, styles.groupViewLayout]} />
          <Image
            style={[styles.vectorIcon2, styles.queueLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-36841.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupViewLayout]}
          contentFit="cover"
          source={require("../assets/group-36842.png")}
        />
      </View>
      <View style={styles.rectangleParent1}>
        <View style={[styles.groupChild3, styles.textPosition]} />
        <Text style={[styles.text, styles.textPosition]}>1</Text>
      </View>
      <Image
        style={[styles.queueCompleteNotifItem, styles.queueLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.queueCompleteNotifChild1, styles.queueLayout]}
        contentFit="cover"
        source={require("../assets/group-1121.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ahojTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupParentLayout: {
    height: 214,
    width: 163,
    position: "absolute",
  },
  h1Typo: {
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
    textAlign: "left",
  },
  groupLayout1: {
    width: 36,
    height: 36,
    position: "absolute",
  },
  tomatoesIconLayout: {
    height: 91,
    width: 131,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.dMSansMedium,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  groupLayout: {
    height: 44,
    position: "absolute",
  },
  bellWrapperLayout: {
    width: 29,
    position: "absolute",
  },
  groupViewLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  queueLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    top: "0%",
    position: "absolute",
  },
  queueCompleteNotifChild: {
    width: 906,
    height: 906,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ahoj: {
    top: 37,
    left: 75,
    fontSize: FontSize.size_base,
    color: Color.lightFontGrey,
    position: "absolute",
  },
  vectorIcon: {
    width: 15,
    height: 18,
  },
  myFlat: {
    marginLeft: 8,
    color: Color.gray_100,
    fontSize: FontSize.size_xs,
  },
  frameParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIcon1: {
    width: 10,
    height: 6,
    marginLeft: 8,
  },
  frameWrapper: {
    borderRadius: Border.br_48xl,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lightColorsWhite,
  },
  queueCompleteNotifInner: {
    top: 25,
    left: 251,
    width: 116,
    height: 42,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.lightColorsLightBG,
    left: 0,
    top: 0,
  },
  h1: {
    color: Color.fontDark,
    display: "flex",
    width: 93,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
    alignItems: "center",
  },
  h2: {
    fontFamily: FontFamily.tTNormsProRegular,
    color: Color.lightColorsSecondary,
    marginTop: 4,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  h1Parent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameContainer: {
    top: 123,
    left: 17,
    width: 109,
    height: 36,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  groupItem: {
    backgroundColor: Color.lightColorsPrimary,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  plus1Icon: {
    top: 10,
    left: 10,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 162,
    left: 118,
  },
  tomatoesIcon: {
    top: 29,
    left: 14,
  },
  groupParent: {
    top: 549,
    left: 24,
  },
  tomatoesIcon1: {
    top: 578,
    left: 38,
  },
  seeAll: {
    top: "13.64%",
    left: "87.43%",
    color: Color.lightColorsPrimary,
    position: "absolute",
  },
  bestSelling: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.gray_100,
  },
  bestSellingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  seeAllParent: {
    height: "2.61%",
    width: "87.69%",
    top: "60.43%",
    right: "6.15%",
    bottom: "36.97%",
    left: "6.15%",
    position: "absolute",
  },
  groupInner: {
    width: 28,
    height: 27,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lightColorsWhite,
  },
  layer2Icon: {
    width: 21,
    height: 22,
  },
  bell: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  bellWrapper: {
    top: 2,
    height: 26,
    left: 0,
  },
  rectangleContainer: {
    top: 8,
    left: 225,
    height: 29,
  },
  groupIcon: {
    left: 79,
    top: 11,
    width: 24,
  },
  rectangleView: {
    left: 0,
    top: 0,
    backgroundColor: Color.lightColorsWhite,
  },
  vectorIcon2: {
    height: "83.32%",
    width: "83.42%",
    top: "8.33%",
    right: "8.25%",
    bottom: "8.34%",
    left: "8.33%",
  },
  groupView: {
    top: 11,
    width: 24,
    left: 0,
  },
  groupChild1: {
    left: 142,
    width: 44,
    top: 0,
  },
  groupChild2: {
    left: 303,
    top: 11,
    width: 24,
  },
  groupContainer: {
    top: 786,
    left: 32,
    width: 327,
  },
  groupChild3: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.lightColorsSecondary,
    shadowColor: "rgba(150, 150, 150, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: Border.br_3xl,
    width: "100%",
  },
  text: {
    left: "33.33%",
    color: Color.lightColorsWhite,
    fontFamily: FontFamily.dMSansMedium,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
  },
  rectangleParent1: {
    height: "2.13%",
    width: "4.62%",
    top: "93.72%",
    right: "25.64%",
    bottom: "4.15%",
    left: "69.74%",
    position: "absolute",
  },
  queueCompleteNotifItem: {
    height: "4.55%",
    width: "9.88%",
    top: "3.32%",
    right: "82.69%",
    bottom: "92.13%",
    left: "7.44%",
  },
  queueCompleteNotifChild1: {
    height: "4.41%",
    width: "8.51%",
    top: "3.8%",
    right: "83.22%",
    bottom: "91.79%",
    left: "8.27%",
  },
  queueCompleteNotif: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColorsWhite,
  },
});

export default QueueCompleteNotif;
