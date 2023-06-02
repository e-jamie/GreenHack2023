import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const FruitSection = ({ transactionIds }) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.groupLayout2}>
        <Image
          style={[styles.groupChild, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-4377.png")}
        />
        <View style={[styles.maskGroup, styles.groupPosition]}>
          <View style={[styles.ellipseParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-224.png")}
            />
            <View style={[styles.fruitsParent, styles.fruitsParentPosition]}>
              <Text style={styles.fruits}>Fruits</Text>
              <View style={[styles.component1, styles.componentFlexBox]}>
                <Text style={[styles.grabOffer, styles.grabTypo]}>
                  Grab Offer
                </Text>
                <Image
                  style={styles.component1Child}
                  contentFit="cover"
                  source={transactionIds}
                />
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.makroOffers, styles.makroTypo]}>Makro Offers</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout2]}>
        <Image
          style={[styles.groupInner, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-4377.png")}
        />
        <View style={[styles.maskGroup, styles.groupPosition]}>
          <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-2241.png")}
            />
            <View style={[styles.makroOffersParent, styles.makroLayout]}>
              <Text style={[styles.makroOffers1, styles.makroTypo]}>
                Makro Offers
              </Text>
              <Text style={[styles.vegetables, styles.freezerTypo]}>
                Vegetables
              </Text>
              <View style={[styles.component11, styles.componentFlexBox]}>
                <Text style={[styles.grabOffer1, styles.grabTypo]}>
                  Grab Offer
                </Text>
                <Image
                  style={styles.component1Child}
                  contentFit="cover"
                  source={require("../assets/vector-6191.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout2]}>
        <Image
          style={[styles.groupInner, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-4377.png")}
        />
        <View style={[styles.maskGroup, styles.groupPosition]}>
          <View style={[styles.ellipseContainer, styles.groupLayout]}>
            <Image
              style={[styles.groupChild1, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-2242.png")}
            />
            <View style={[styles.makroOffersGroup, styles.makroLayout]}>
              <Text style={[styles.makroOffers1, styles.makroTypo]}>
                Makro Offers
              </Text>
              <Text style={[styles.freezer, styles.freezerTypo]}>Freezer</Text>
              <View style={[styles.component11, styles.componentFlexBox]}>
                <Text style={[styles.grabOffer2, styles.grabTypo]}>
                  Grab Offer
                </Text>
                <Image
                  style={styles.component1Child}
                  contentFit="cover"
                  source={require("../assets/vector-6191.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    borderRadius: Border.br_base,
    top: 0,
    height: 158,
    width: 342,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  groupLayout: {
    height: 753,
    width: 762,
    position: "absolute",
  },
  fruitsParentPosition: {
    left: 30,
    width: 122,
  },
  componentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_10xs,
    height: 30,
    width: 107,
    backgroundColor: Color.lightColorsWhite,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    position: "absolute",
  },
  grabTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  makroTypo: {
    opacity: 0.8,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.lightColorsWhite,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupLayout2: {
    height: 158,
    width: 342,
  },
  ellipseLayout: {
    width: 794,
    height: 753,
    position: "absolute",
  },
  makroLayout: {
    height: 103,
    position: "absolute",
  },
  freezerTypo: {
    top: 17,
    textAlign: "left",
    color: Color.lightColorsWhite,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 48,
    letterSpacing: -1,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  groupChild: {
    left: 326,
  },
  groupItem: {
    top: 297,
    left: 155,
  },
  fruits: {
    textAlign: "left",
    color: Color.lightColorsWhite,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 48,
    letterSpacing: -1,
    fontSize: FontSize.size_13xl,
    width: 122,
    left: 0,
    top: 0,
    position: "absolute",
  },
  grabOffer: {
    color: Color.darkorange,
  },
  component1Child: {
    width: 0,
    height: 12,
    display: "none",
    marginLeft: 4,
  },
  component1: {
    top: 55,
    left: 3,
  },
  fruitsParent: {
    top: 340,
    height: 85,
    width: 122,
    position: "absolute",
  },
  ellipseParent: {
    top: -297,
    left: 171,
    width: 762,
  },
  maskGroup: {
    left: 0,
    height: 158,
    width: 342,
    position: "absolute",
  },
  makroOffers: {
    top: 27,
    left: 203,
  },
  groupInner: {
    left: 0,
  },
  ellipseIcon: {
    top: 298,
    left: 0,
  },
  makroOffers1: {
    left: 0,
    top: 0,
  },
  vegetables: {
    left: 2,
    width: 162,
  },
  grabOffer1: {
    color: Color.primary,
  },
  component11: {
    top: 73,
    left: 0,
  },
  makroOffersParent: {
    top: 325,
    left: 24,
    width: 164,
  },
  ellipseGroup: {
    left: 139,
    top: -298,
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  groupChild1: {
    left: 0,
    top: 0,
  },
  freezer: {
    width: 122,
    left: 0,
  },
  grabOffer2: {
    color: Color.lightcoral,
  },
  makroOffersGroup: {
    top: 324,
    width: 122,
    left: 30,
  },
  ellipseContainer: {
    top: -298,
    left: 171,
    width: 762,
  },
  groupParent: {
    top: 162,
    left: -326,
    flexDirection: "row",
    position: "absolute",
  },
});

export default FruitSection;
