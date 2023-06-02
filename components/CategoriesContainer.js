import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const CategoriesContainer = ({
  productIds,
  productImageIds,
  productImageIds73x73,
  productImageIds73x73x,
}) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.frameParent}>
        <View style={[styles.categoriesWrapper, styles.frameGroupPosition]}>
          <Text style={styles.categories}>Categories</Text>
        </View>
        <Text style={[styles.seeAll, styles.seeAllTypo]}>See all</Text>
      </View>
      <View style={[styles.frameGroup, styles.frameGroupPosition]}>
        <View style={styles.groupContainer}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={productIds}
          />
          <Text style={[styles.fruits, styles.seeAllTypo]}>Fruits</Text>
        </View>
        <View style={styles.frameView}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={productImageIds}
          />
          <Text style={[styles.fruits, styles.seeAllTypo]}>Vegetables</Text>
        </View>
        <View style={styles.frameView}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={productImageIds73x73}
          />
          <Text style={[styles.fruits, styles.seeAllTypo]}>Dairy</Text>
        </View>
        <View style={styles.frameView}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={productImageIds73x73x}
          />
          <Text style={[styles.fruits, styles.seeAllTypo]}>Meat</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupPosition: {
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  seeAllTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  categories: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.tTNormsProBold,
    textAlign: "left",
    color: Color.gray_100,
  },
  categoriesWrapper: {
    alignItems: "center",
    top: 0,
    flexDirection: "row",
  },
  seeAll: {
    top: "13.64%",
    left: "87.43%",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.lightColorsPrimary,
    textAlign: "left",
    position: "absolute",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  frameParent: {
    height: 22,
    left: 0,
    top: 0,
    width: 342,
    position: "absolute",
  },
  frameChild: {
    width: 73,
    height: 73,
  },
  fruits: {
    fontFamily: FontFamily.tTNormsProMedium,
    textAlign: "center",
    marginTop: 8,
    color: Color.gray_100,
  },
  groupContainer: {
    alignItems: "center",
  },
  frameView: {
    marginLeft: 16,
    alignItems: "center",
  },
  frameGroup: {
    top: 39,
  },
  groupParent: {
    top: 348,
    left: 24,
    height: 137,
    width: 342,
    position: "absolute",
  },
});

export default CategoriesContainer;
