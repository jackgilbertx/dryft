// import {
//     createNavigationContainerRef,
//     NavigationContainer,
//     useNavigation,
//     DefaultTheme,
//     DarkTheme,
//   } from '@react-navigation/native'
//   import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//   import {
//     createNativeStackNavigator,
//     NativeStackNavigationProp,
//   } from '@react-navigation/native-stack'
//   import React, { useState } from 'react'
//   import { Entypo } from '@expo/vector-icons'
//   import { Ionicons } from '@expo/vector-icons'
//   import { AntDesign } from '@expo/vector-icons'
//   import { TouchableOpacity, View } from 'react-native'
//   import { Text } from 'react-native-paper'
//   import Profile from '../screens/Profile'
//   import NotFoundScreen from '../screens/NotFoundScreen'
//   import Messages from '../screens/Messages'
//   import Search from '../screens/Search'
//   import Home from '../screens/Home'
//   import Notifications from '../screens/Notifications'
//   import { MaterialCommunityIcons } from '@expo/vector-icons'
//   import { linking } from './LinkingConfiguration'
//   import AppBar from '../components/AppBar'
//   import { createDrawerNavigator } from '@react-navigation/drawer'
  
//   export type RootStackParams = {
//     Root: any
//     Home: any
//     Search: any
//     Notifications: any
//     Messages: any
//     Profile: any
//     NotFound: any
//   }
  
//   const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: '#1DA1F2',
//       background: 'white',
//       text: 'black',
//       // Add more color customizations here
//     },
//   }
  
//   console.log('NAV THEME', DefaultTheme)
  
//   export default function Navigation() {
//     const Stack = createNativeStackNavigator<RootStackParams>()
//     const [currentRoute, setCurrentRoute] = useState(null)
//     const navigationRef = createNavigationContainerRef()
//     const DrawerNavigator = createDrawerNavigator()
  
//     const DrawerContent = ({ navigation }) => (
//       <View style={{ padding: 40 }}>
//         <Text>Drawer stuff here</Text>
//         <TouchableOpacity style={{}} onPress={() => navigation.navigate('Profile')}>
//           <Text variant='bodyMedium'>Go to profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text variant='bodyMedium'>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     )
  
//     return (
//       <>
//         <NavigationContainer
//           theme={MyTheme}
//           // @ts-ignore
//           onReady={() => {
//             setCurrentRoute(navigationRef.getCurrentRoute().name)
//           }}
//           onStateChange={async () => {
//             const currentRouteName = navigationRef.getCurrentRoute().name
//             setCurrentRoute(currentRouteName)
//           }}
//           linking={linking}
//           ref={navigationRef}
//         >
//           {true ? (
//             <></>
//           ) : (
//             <DrawerNavigator.Navigator
//               screenOptions={{
//                 //@ts-ignore
//                 animationEnabled: true,
//                 //@ts-ignore
//                 header: (props) => (
//                   <AppBar {...props} currentRoute={currentRoute} />
//                 ),
//               }}
//               drawerContent={(props) => (
//                 <DrawerContent navigation={props.navigation} />
//               )}
//             >
//               <DrawerNavigator.Screen
//                 name='Root'
//                 component={BottomTabs}
//               ></DrawerNavigator.Screen>
//               <DrawerNavigator.Screen name='Profile' component={Profile} />
//             </DrawerNavigator.Navigator>
//           )}
//         </NavigationContainer>
//       </>
//     )
//   }
  
//   const Tab = createBottomTabNavigator()
  
//   function BottomTabs() {
//     return (
//       <Tab.Navigator
//         initialRouteName='Home'
//         screenOptions={{
//           tabBarActiveTintColor: '#1ca2ef',
//           headerShown: false,
//         }}
//       >
//         <Tab.Screen
//           name='Home'
//           component={Home}
//           options={{
//             // @ts-ignore this works fine with elements as well as string
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name='home-outline'
//                 color={color}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name='Search'
//           component={Search}
//           options={{
//             tabBarLabel: 'Seaarch',
//             tabBarIcon: ({ color, size }) => (
//               <Entypo name='magnifying-glass' size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name='Notifications'
//           component={Notifications}
//           options={{
//             tabBarLabel: 'Notifications',
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name='notifications-outline' size={size} color={color} />
//             ),
//             // tabBarBadge: 3,
//           }}
//         />
//         <Tab.Screen
//           name='Messages'
//           component={Messages}
//           options={{
//             tabBarLabel: 'Messages',
//             tabBarIcon: ({ color, size }) => (
//               <AntDesign name='message1' size={size} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     )
//   }
  