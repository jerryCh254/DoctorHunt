import {View, ImageBackground, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home_Screen from '../Screens/HomeScreen';
import Fvt from '../Screens/Fvt';
import Books from '../Screens/Books';
import Chat from '../Screens/Chat';
import DrawerSceneWrapper from '../Drawer/DrawerScenWraper';
import MainMenu from '../Screens/MainMenu';
import styles from '../Styles/StylingTab';
import MainScreen from '../ScreenComponent/MainScreen';
const Tab = createBottomTabNavigator();
const TabBarNavigator = ({openDrawer}) => {
  return (
    <DrawerSceneWrapper>
    <ImageBackground
      source={require('../Assets/bg.png')}
      style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            width: 380,
            height: 74,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <Tab.Screen
          name="Home_Screen"
          component={Home_Screen}
          options={{
            tabBarIcon: ({focused}) => (
              <MainScreen
                focused={focused}
                source={require('../Assets/home.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Fvt"
          component={Fvt}
          options={{
            tabBarIcon: ({focused}) => (
              <MainScreen
                focused={focused}
                source={require('../Assets/fvt.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Book5"
          component={Books}
          options={{
            tabBarIcon: ({focused}) => (
              <MainScreen
                focused={focused}
                source={require('../Assets/book.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({focused}) => (
              <MainScreen
                focused={focused}
                source={require('../Assets/chat.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </ImageBackground>

    </DrawerSceneWrapper>
  );
};

export default TabBarNavigator;
