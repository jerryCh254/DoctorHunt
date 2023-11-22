import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Screen} from 'react-native-screens';
import Home_Screen from './HomeScreen';
import CustomDrawer from '../Drawer/CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './Feed';
import TabBarNavigator from '../BottomTabBar/TabBarNavigator';
import Payment from '../Drawer/Payment';
import MedicineOrders from '../Drawer/MedicineOrders';
import TestBookings from '../Drawer/TestBookings';
import PrivacyPolicy from '../Drawer/PrivacyPolicy';
import HelpCenter from '../Drawer/HelpCenter';
import Settings from '../Drawer/Settings';
import DeviceInfo from 'react-native-device-info';
import dataComponent from '../Drawer/DataComponent';
import {useNavigation} from '@react-navigation/native';
import DataComponent from '../Drawer/DataComponent';
const Drawer = createDrawerNavigator();

const MainMenu = () => {
  return (
    
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#fff',
        overlayColor: 'transparent',
    
        drawerStyle: {
          backgroundColor: '#6F7FA1',
          width: DeviceInfo.isTablet() ? 'auto' : '65%',
        },
        sceneContainerStyle: {
          backgroundColor: '#6F7FA1',
        },
      }}
      initialRouteName="Home_Screen">
      <Drawer.Screen
        name="TabBarNavigator"
        component={TabBarNavigator}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => (
            <DataComponent
              source={require('../Assets/user.png')}
              imageStyle2={{width: 19, height: 22.5}}
              text="My Doctors"
              icon={require('../Assets/error.png')}
              imageStyle={{width: 7, height: 13, marginHorizontal: 38}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => (
            <DataComponent
              source={require('../Assets/medical.png')}
              imageStyle2={{width: 19, height: 19}}
              text="Medical Records"
              icon={require('../Assets/error.png')}
              imageStyle={{width: 7, height: 13}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => (
            <DataComponent
              source={require('../Assets/Payment.png')}
              imageStyle2={{width: 19, height: 14}}
              text="Payments"
              icon={require('../Assets/error.png')}
              imageStyle={{width: 7, height: 13, marginHorizontal: 50}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MedicineOrders"
        component={MedicineOrders}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => (
            <DataComponent
              source={require('../Assets/orders.png')}
              imageStyle2={{width: 19, height: 19}}
              text="Medicine Orders"
              icon={require('../Assets/error.png')}
              imageStyle={{width: 7, height: 13, marginHorizontal: 4}}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="TestBookings"
        component={TestBookings}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => (
            <DataComponent
              source={require('../Assets/booking.png')}
              imageStyle2={{width: 19, height: 19}}
              text="Test Bookings"
              icon={require('../Assets/error.png')}
              imageStyle={{width: 7, height: 13, marginHorizontal: 20}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => (
            <DataComponent
              source={require('../Assets/privacy.png')}
              imageStyle2={{width: 19, height: 22}}
              text="Privacy & Policy"
              icon={require('../Assets/error.png')}
              imageStyle={{width: 7, height: 13, marginHorizontal: 8}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => (
            <DataComponent
              source={require('../Assets/Help.png')}
              imageStyle2={{width: 19, height: 18.5}}
              text="HelpCenter"
              icon={require('../Assets/error.png')}
              imageStyle={{width: 7, height: 13, marginHorizontal: 43}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => (
            <DataComponent
              source={require('../Assets/set.png')}
              imageStyle2={{width: 19, height: 19}}
              text="Settings"
              icon={require('../Assets/error.png')}
              imageStyle={{width: 7, height: 13, marginHorizontal: 65}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainMenu;
