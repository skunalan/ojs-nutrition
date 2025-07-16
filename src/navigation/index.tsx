import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButton, Text } from "@react-navigation/elements";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
    contentStyle: { flex: 1, backgroundColor: "rgb(255,255,255)" },
  },
  screens: {
    // Home: {
    //     screen: HomeScreen,
    //     options: {
    //       title: 'Home',
    //       tabBarIcon: ({ color, size }) => (
    //         <Image
    //           source={newspaper}
    //           tintColor={color}
    //           style={{
    //             width: size,
    //             height: size,
    //           }}
    //         />
    //       ),
    //     },
    //   },
    Login: {
      screen: LoginScreen,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
