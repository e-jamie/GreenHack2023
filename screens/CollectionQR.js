import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const CollectionQR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.collectionQr}>
      <Image
        style={styles.collectionQrChild}
        contentFit="cover"
        source={require("../assets/ellipse-225.png")}
      />
      <Image
        style={[styles.collectionQrItem, styles.groupLayout2]}
        contentFit="cover"
        source={require("../assets/group-36845.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout2]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout1]} />
          <Image
            style={[styles.groupItem, styles.groupLayout1]}
            contentFit="cover"
            source={require("../assets/group-36835.png")}
          />
        </View>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-36839.png")}
        />
        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <TouchableOpacity
            style={[styles.vectorWrapper, styles.vectorWrapperSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </TouchableOpacity>
        </Pressable>
        <Image
          style={[styles.groupIcon, styles.groupLayout2]}
          contentFit="cover"
          source={require("../assets/group-36841.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-36842.png")}
        />
      </View>
      <Text style={[styles.presentThisQr, styles.presentThisQrFlexBox]}>
        Present this QR upon check-out
      </Text>
      <Text style={[styles.thisCodeWill, styles.thisTypo]}>
        This code will expire in 48 hours
      </Text>
      <Image
        style={styles.qrCodeIcon}
        contentFit="cover"
        source={require("../assets/qr-code1.png")}
      />
      <View style={[styles.collectionQrInner, styles.vectorWrapperSpaceBlock]}>
        <View style={[styles.continueWrapper, styles.presentThisQrFlexBox]}>
          <Text style={[styles.continue, styles.thisTypo]}>
            Download QR Code
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout2: {
    height: 44,
    position: "absolute",
  },
  groupLayout1: {
    height: 27,
    width: 28,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  vectorWrapperSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  presentThisQrFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  thisTypo: {
    textAlign: "center",
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
  },
  collectionQrChild: {
    width: 906,
    height: 906,
    left: 0,
    top: 0,
    position: "absolute",
  },
  collectionQrItem: {
    top: 24,
    width: 342,
    left: 24,
    height: 44,
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.lightColorsWhite,
  },
  groupItem: {
    top: 2,
  },
  rectangleParent: {
    left: 233,
    height: 29,
    width: 28,
    top: 8,
    position: "absolute",
  },
  groupInner: {
    left: 87,
    top: 11,
    width: 24,
  },
  rectangleView: {
    left: 8,
    width: 24,
    top: 8,
    backgroundColor: Color.lightColorsWhite,
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  vectorWrapper: {
    left: 0,
    top: 0,
  },
  rectangleGroup: {
    top: 3,
    width: 40,
    height: 40,
    left: 0,
    position: "absolute",
  },
  groupIcon: {
    left: 150,
    width: 44,
    top: 0,
  },
  groupChild1: {
    left: 311,
    top: 11,
    width: 24,
  },
  groupParent: {
    top: 786,
    width: 335,
    left: 24,
    height: 44,
  },
  presentThisQr: {
    height: "10.07%",
    top: "10.9%",
    left: "11.28%",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
    color: Color.lightColorsWhite,
    fontSize: FontSize.size_13xl,
    width: "77.44%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  thisCodeWill: {
    height: "11.97%",
    top: "67.65%",
    left: "10.26%",
    color: Color.seagreen_400,
    textAlign: "center",
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
    fontSize: FontSize.size_13xl,
    width: "77.44%",
    position: "absolute",
  },
  qrCodeIcon: {
    height: "26.21%",
    width: "56.73%",
    top: "27.18%",
    right: "21.63%",
    bottom: "46.61%",
    left: "21.63%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  continue: {
    fontSize: FontSize.size_base,
    color: Color.lightColorsWhite,
    textAlign: "center",
    fontFamily: FontFamily.tTNormsProBold,
    fontWeight: "700",
  },
  continueWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightColorsPrimary,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    width: 342,
  },
  collectionQrInner: {
    top: 669,
    left: 14,
  },
  collectionQr: {
    borderRadius: Border.br_5xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.lightColorsWhite,
  },
});

export default CollectionQR;
