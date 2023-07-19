import {
  createNavigationContainerRef,
  NavigationContainer,
  useNavigation,
  // DefaultTheme,
  // DarkTheme,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Text, TouchableOpacity, View } from "react-native";
import Profile from "../screens/Profile";
import NotFoundScreen from "../screens/NotFoundScreen";
import Messages from "../screens/Messages";
import Search from "../screens/Search";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { linking } from "./LinkingConfiguration";
import AppBar from "../components/AppBar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import navigationBar from "../../vynca-portal/app/redux/legacy-knives/container/navigation-bar";

export type RootStackParams = {
  Root: any;
  Home: any;
  Search: any;
  Notifications: any;
  Messages: any;
  Profile: any;
  NotFound: any;
};

export default function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParams>();
  const [currentRoute, setCurrentRoute] = useState(null);
  const navigationRef = createNavigationContainerRef();

  const DrawerNavigator = createDrawerNavigator();

  const DrawerContent = ({ navigation }) => (
    <View style={{ padding: 40 }}>
      <Text>Drawer stuff here</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text>Go to profile</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <NavigationContainer
        onReady={() => {
          setCurrentRoute(navigationRef.getCurrentRoute().name);
        }}
        onStateChange={async () => {
          const currentRouteName = navigationRef.getCurrentRoute().name;
          setCurrentRoute(currentRouteName);
        }}
        linking={linking}
        ref={navigationRef}
      >
        <DrawerNavigator.Navigator
          screenOptions={{
            //@ts-ignore
            header: (props) => <AppBar {...props} currentRoute={currentRoute} />,
          }}
          drawerContent={(props) => (
            <DrawerContent navigation={props.navigation} />
          )}
        >
          {/* @ts-ignore */}
          <DrawerNavigator.Screen
            name="Root"
            component={BottomNavigation}
          ></DrawerNavigator.Screen>
          <DrawerNavigator.Screen name="Profile" component={Profile} />
        </DrawerNavigator.Navigator>
      </NavigationContainer>
    </>
  );
}

const BottomNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // @ts-ignore this works fine with elements as well as string
          tabBarLabel: <Text style={{ fontSize: 8 }}>Home</Text>,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          // @ts-ignore this works fine with elements as well as string
          tabBarLabel: <Text style={{ fontSize: 8 }}>Search</Text>,
          tabBarIcon: ({ color }) => (
            <Entypo name="magnifying-glass" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
          // @ts-ignore this works fine with elements as well as string
          tabBarLabel: <Text style={{ fontSize: 8 }}>Notifications</Text>,
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          // @ts-ignore this works fine with elements as well as string
          tabBarLabel: <Text style={{ fontSize: 8 }}>Messages</Text>,
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
