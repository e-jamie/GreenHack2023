import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const NotifsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifsPage}>
      <Image
        style={[styles.notifsPageChild, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-368431.png")}
      />
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/group-367701.png")}
        />
        <View style={styles.notificationsWrapper}>
          <Text style={styles.notifications}>Notifications</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.notifsPageInner}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("CollectionQR")}
      >
        <Pressable
          style={styles.yourQueueForRedTomatoesIsParent}
          onPress={() => navigation.navigate("CollectionQR")}
        >
          <Text style={styles.yourQueueFor}>
            Your queue for Red Tomatoes is complete! Access your QR Code
          </Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
      </TouchableOpacity>
      <View style={styles.notifsPageItem} />
      <Image
        style={styles.tomatoesIcon}
        contentFit="cover"
        source={require("../assets/tomatoes1.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupItem, styles.textPosition]} />
        <Text style={[styles.text, styles.textPosition]}>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 44,
    position: "absolute",
  },
  textPosition: {
    top: "0%",
    position: "absolute",
  },
  notifsPageChild: {
    top: 786,
    left: 32,
    width: 327,
  },
  groupChild: {
    top: 0,
    left: 0,
    width: 44,
  },
  notifications: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    color: Color.gray_100,
    textAlign: "center",
    fontWeight: "700",
  },
  notificationsWrapper: {
    top: 28,
    left: 105,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  groupParent: {
    top: 30,
    left: 24,
    width: 237,
    height: 58,
    position: "absolute",
  },
  yourQueueFor: {
    top: 6,
    left: 8,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.tTNormsProBold,
    textAlign: "right",
    width: 277,
    color: Color.lightColorsWhite,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIcon: {
    top: 27,
    left: 318,
    width: 8,
    height: 14,
    position: "absolute",
  },
  yourQueueForRedTomatoesIsParent: {
    width: 343,
    height: 68,
  },
  notifsPageInner: {
    top: 98,
    left: 14,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  notifsPageItem: {
    top: 121,
    left: 35,
    borderRadius: Border.br_3xs,
    width: 54,
    height: 41,
    position: "absolute",
    backgroundColor: Color.lightColorsWhite,
  },
  tomatoesIcon: {
    top: 114,
    left: 22,
    width: 79,
    height: 63,
    position: "absolute",
  },
  groupItem: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xl,
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
    width: "100%",
  },
  text: {
    left: "33.33%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    textAlign: "left",
    color: Color.lightColorsWhite,
  },
  rectangleParent: {
    height: "2.13%",
    width: "4.62%",
    top: "12.09%",
    right: "90.26%",
    bottom: "85.78%",
    left: "5.13%",
    position: "absolute",
  },
  notifsPage: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColorsWhite,
  },
});

export default NotifsPage;
