const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splash from "./screens/Splash";
import Qrcode from "./screens/Qrcode";
import CollectionQR from "./screens/CollectionQR";
import Bell from "./screens/Bell";
import FontLink from "./screens/FontLink";
import ChooseWholesaleGrocery from "./screens/ChooseWholesaleGrocery";
import ItemDetails from "./screens/ItemDetails";
import PaymentSuccess from "./screens/PaymentSuccess";
import PaymentCardFilled from "./screens/PaymentCardFilled";
import PaymentCard from "./screens/PaymentCard";
import ChoosePaymentMethod from "./screens/ChoosePaymentMethod";
import AddToQueue from "./screens/AddToQueue";
import AddToQueue1 from "./screens/AddToQueue1";
import NotifsPage from "./screens/NotifsPage";
import Home from "./screens/Home";
import QueueCompleteNotif from "./screens/QueueCompleteNotif";
import RegisterFilled from "./screens/RegisterFilled";
import Register from "./screens/Register";
import Landing from "./screens/Landing";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "TT Norms Pro_regular": require("./assets/fonts/TT_Norms_Pro_regular.ttf"),
    "TT Norms Pro_medium": require("./assets/fonts/TT_Norms_Pro_medium.ttf"),
    "TT Norms Pro_bold": require("./assets/fonts/TT_Norms_Pro_bold.ttf"),
    "DM Sans_medium": require("./assets/fonts/DM_Sans_medium.ttf"),
    "DM Sans_bold": require("./assets/fonts/DM_Sans_bold.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Landing"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Qrcode"
              component={Qrcode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CollectionQR"
              component={CollectionQR}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bell"
              component={Bell}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FontLink"
              component={FontLink}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseWholesaleGrocery"
              component={ChooseWholesaleGrocery}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ItemDetails"
              component={ItemDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentSuccess"
              component={PaymentSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentCardFilled"
              component={PaymentCardFilled}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentCard"
              component={PaymentCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChoosePaymentMethod"
              component={ChoosePaymentMethod}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToQueue"
              component={AddToQueue}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToQueue1"
              component={AddToQueue1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotifsPage"
              component={NotifsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QueueCompleteNotif"
              component={QueueCompleteNotif}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterFilled"
              component={RegisterFilled}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
