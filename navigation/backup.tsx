/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

 import {
    NavigationContainer, useNavigation,
    // DefaultTheme,
    // DarkTheme,
  } from "@react-navigation/native";
  import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
  import * as React from "react";
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
  
    // const navigation =
    // useNavigation<NativeStackNavigationProp<RootStackParams>>();
  
    const DrawerNavigator = createDrawerNavigator();
  
    const DrawerContent = ({navigation}) => (
      <View>
        <Text>Drawer stuff here</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Root', { screen: 'Profile' })}>sdfsdf</TouchableOpacity>
      </View>
    );
  
    return (
      <>
        <NavigationContainer linking={linking}>
          <DrawerNavigator.Navigator drawerContent={(props) => <DrawerContent navigation={props.navigation} />}>
            {/* @ts-ignore */}
            <DrawerNavigator.Screen name="Home">
              {() => (
                <Stack.Navigator
                  screenOptions={{
                    //@ts-ignore
                    // header: (props) => <AppBar {...props} />,
                  }}
                >
                  <Stack.Screen
                    name="Home"
                    component={BottomNavigation}
                    options={{ headerShown: true }}
                  />
                  <Stack.Screen
                    name="NotFound"
                    component={NotFoundScreen}
                    // options={{ title: 'Oops!' }}
                  />
                </Stack.Navigator>
              )}
            </DrawerNavigator.Screen>
          </DrawerNavigator.Navigator>
  
          {/* <DrawerNavigator.Navigator drawerContent={(props) => <DrawerContent />}>
            <DrawerNavigator.Screen name="Profile" component={Profile} />
          </DrawerNavigator.Navigator> */}
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
          name="search"
          component={Search}
          options={{
            // @ts-ignore this works fine with elements as well as string
            tabBarLabel: <Text style={{ fontSize: 8 }}>search</Text>,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="note-text-outline"
                color={color}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notifications}
          options={{
            tabBarLabelStyle: {
              fontSize: 8,
            },
            // @ts-ignore this works fine with elements as well as string
            tabBarLabel: <Text style={{ fontSize: 8 }}>Notifications</Text>,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={20} />
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
              <MaterialCommunityIcons name="phone" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  