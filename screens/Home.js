import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import SearchContainer from "../components/SearchContainer";
import CategoriesContainer from "../components/CategoriesContainer";
import RedTomatoesContainer from "../components/RedTomatoesContainer";
import BananaContainer from "../components/BananaContainer";
import FruitSection from "../components/FruitSection";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={[styles.homeChild, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2252.png")}
      />
      <Text style={[styles.ahoj, styles.ahojTypo]}>Ahoj!</Text>
      <View style={styles.homeInner}>
        <View style={styles.frameWrapper}>
          <View style={styles.frameParentFlexBox}>
            <View style={styles.frameParentFlexBox}>
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
        productIds={require("../assets/group-36781.png")}
        productImageIds={require("../assets/group-36782.png")}
        productImageIds73x73={require("../assets/group-36783.png")}
        productImageIds73x73x={require("../assets/group-36784.png")}
      />
      <RedTomatoesContainer />
      <Image
        style={styles.tomatoesIcon}
        contentFit="cover"
        source={require("../assets/tomatoes2.png")}
      />
      <BananaContainer />
      <View style={styles.seeAllParent}>
        <Text style={styles.seeAll}>See all</Text>
        <View style={[styles.bestSellingWrapper, styles.frameParentFlexBox]}>
          <Text style={styles.bestSelling}>Best selling</Text>
        </View>
      </View>
      <FruitSection transactionIds={require("../assets/vector-619.png")} />
      <Image
        style={styles.homeItem}
        contentFit="cover"
        source={require("../assets/group-36843.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-112.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  ahojTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeChild: {
    width: 906,
    height: 906,
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
    fontSize: FontSize.size_xs,
    marginLeft: 8,
    color: Color.gray_100,
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
  homeInner: {
    top: 25,
    left: 251,
    width: 116,
    height: 42,
    position: "absolute",
  },
  tomatoesIcon: {
    top: 578,
    left: 38,
    width: 131,
    height: 91,
    position: "absolute",
  },
  seeAll: {
    top: "13.64%",
    left: "87.43%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dMSansMedium,
    color: Color.lightColorsPrimary,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  bestSelling: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.tTNormsProBold,
    textAlign: "left",
    color: Color.gray_100,
  },
  bestSellingWrapper: {
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
  homeItem: {
    top: 786,
    left: 32,
    width: 327,
    height: 44,
    position: "absolute",
  },
  ellipseIcon: {
    height: "4.55%",
    width: "9.88%",
    top: "3.32%",
    right: "82.69%",
    bottom: "92.13%",
    left: "7.44%",
  },
  groupIcon: {
    height: "4.41%",
    width: "8.51%",
    top: "3.8%",
    right: "83.22%",
    bottom: "91.79%",
    left: "8.27%",
  },
  home: {
    borderRadius: Border.br_5xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.lightColorsWhite,
  },
});

export default Home;
