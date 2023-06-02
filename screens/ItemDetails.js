import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AdelaContainer from "../components/AdelaContainer";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ItemDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemDetails}>
      <Image
        style={[styles.itemDetailsChild, styles.h1ParentPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2252.png")}
      />
      <Image
        style={[styles.itemDetailsItem, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/group-368451.png")}
      />
      <View style={[styles.continueWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.continueTypo}>Queues</Text>
      </View>
      <Image
        style={styles.tomatoesIcon}
        contentFit="cover"
        source={require("../assets/tomatoes.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupPosition1]} />
          <Text style={[styles.createNewQueue, styles.continueTypo]}>
            Create New Queue
          </Text>
        </View>
        <Image
          style={styles.plus1IconLayout}
          contentFit="cover"
          source={require("../assets/group-36828.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.frameWrapper, styles.frameLayout]}>
              <View style={[styles.h1Parent, styles.h1ParentPosition]}>
                <Text style={styles.h1}>Tomas, Aneta, Marek</Text>
                <Text style={styles.h2}>40 units reserved</Text>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.frameContainer, styles.frameLayout]}
            onPress={() => navigation.navigate("AddToQueue1")}
          >
            <Pressable style={[styles.plus1Wrapper, styles.wrapperFlexBox]}>
              <Image
                style={[styles.plus1Icon, styles.plus1IconLayout]}
                contentFit="cover"
                source={require("../assets/group-36828.png")}
              />
            </Pressable>
          </Pressable>
        </View>
        <Image
          style={[styles.manIcon, styles.manIconLayout]}
          contentFit="cover"
          source={require("../assets/man.png")}
        />
      </View>
      <View style={[styles.groupParent1, styles.groupLayout]}>
        <AdelaContainer />
        <Image
          style={styles.womanIcon}
          contentFit="cover"
          source={require("../assets/woman.png")}
        />
      </View>
      <Image
        style={[styles.itemDetailsInner, styles.manIconLayout]}
        contentFit="cover"
        source={require("../assets/frame-36848.png")}
      />
      <Text style={[styles.h21, styles.h21Typo]}>Limit: 39 units</Text>
      <Text style={[styles.h22, styles.h21Typo]}>Limit: 8 units</Text>
      <Image
        style={styles.boyIcon}
        contentFit="cover"
        source={require("../assets/boy.png")}
      />
      <Image
        style={[styles.groupIcon, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/group-36843.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  h1ParentPosition: {
    left: 0,
    top: 0,
  },
  itemLayout: {
    height: 44,
    position: "absolute",
  },
  wrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  groupPosition1: {
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
  },
  continueTypo: {
    textAlign: "center",
    color: Color.lightColorsWhite,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  groupLayout: {
    height: 214,
    width: 163,
    position: "absolute",
  },
  frameLayout: {
    height: 36,
    position: "absolute",
  },
  plus1IconLayout: {
    height: 16,
    width: 16,
  },
  manIconLayout: {
    height: 68,
    position: "absolute",
  },
  h21Typo: {
    color: Color.dimgray,
    fontSize: FontSize.size_3xs,
    top: 584,
    fontFamily: FontFamily.tTNormsProRegular,
    textAlign: "left",
    position: "absolute",
  },
  itemDetailsChild: {
    width: 906,
    height: 906,
    position: "absolute",
  },
  itemDetailsItem: {
    top: 24,
    width: 342,
    left: 24,
  },
  continueWrapper: {
    top: 323,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.seagreen_400,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
    width: 342,
    left: 24,
  },
  tomatoesIcon: {
    top: 91,
    left: 42,
    width: 305,
    height: 217,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#4aab3f",
    height: 49,
    width: 342,
    position: "absolute",
  },
  createNewQueue: {
    top: 14,
    left: 98,
    position: "absolute",
  },
  rectangleParent: {
    height: 49,
    width: 342,
  },
  groupParent: {
    top: 657,
    alignItems: "flex-end",
    height: 49,
    left: 24,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.lightColorsLightBG,
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
  },
  h1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.tTNormsProBold,
    color: Color.fontDark,
    textAlign: "left",
    fontWeight: "700",
  },
  h2: {
    fontSize: FontSize.size_xs,
    color: Color.lightColorsSecondary,
    marginTop: 4,
    fontFamily: FontFamily.tTNormsProRegular,
    textAlign: "left",
  },
  h1Parent: {
    position: "absolute",
  },
  frameWrapper: {
    top: 126,
    left: 14,
    width: 135,
  },
  groupView: {
    left: 0,
    top: 0,
  },
  plus1Icon: {
    overflow: "hidden",
  },
  plus1Wrapper: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.lightColorsPrimary,
    padding: Padding.p_3xs,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  frameContainer: {
    top: 162,
    left: 118,
    width: 36,
  },
  manIcon: {
    top: 41,
    left: 4,
    width: 68,
    overflow: "hidden",
  },
  groupContainer: {
    left: 203,
    top: 410,
    width: 163,
  },
  womanIcon: {
    top: 20,
    left: 34,
    width: 96,
    height: 96,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent1: {
    top: 410,
    width: 163,
    left: 24,
  },
  itemDetailsInner: {
    top: 451,
    left: 259,
    width: 53,
  },
  h21: {
    left: 41,
  },
  h22: {
    left: 217,
  },
  boyIcon: {
    top: 449,
    left: 296,
    width: 66,
    height: 70,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    top: 786,
    left: 32,
    width: 327,
  },
  itemDetails: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ItemDetails;
