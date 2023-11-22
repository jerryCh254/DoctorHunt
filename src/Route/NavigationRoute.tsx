import {View, Text,StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import OnBoarding1 from '../Screens/OnBoarding1';
import Home_Screen from '../Screens/HomeScreen';
import TabBarNavigator from '../BottomTabBar/TabBarNavigator';
import Fvt from '../Screens/Fvt';
import Books from '../Screens/Books';
import Chat from '../Screens/Chat';
import LiveChat from '../Screens/LiveChat';
import FindDoc from '../Screens/FindDoc';
import DoctorTime from '../Cards/DoctorTime';
import AppointmentTime from '../Cards/AppointmentTime';
import PapularDoc from '../Cards/PapularDoc';
import DoctorDetail from '../Screens/DoctorDetail';
import AppointmentDoctor from '../Screens/AppointmentDoctor';
import AppointmentFinal from '../Screens/AppointmentFinal';
import SignUp from '../SignUpScreen/SignUp';
import LoginScreen from '../SignUpScreen/LoginScreen';
import MainMenu from '../Screens/MainMenu';
import CustomDrawer from '../Drawer/CustomDrawer';

const Stack = createNativeStackNavigator();

const NavigationRoute = () => {
  return (
    
    <View style={styles.transparentView}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
          <Stack.Screen name="Home_Screen" component={Home_Screen} />
          <Stack.Screen name="Fvt" component={Fvt} />
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="LiveChat" component={LiveChat} />
          <Stack.Screen name="FindDoc" component={FindDoc} />
          <Stack.Screen name="DoctorTime" component={DoctorTime} />
          <Stack.Screen name="AppointmentTime" component={AppointmentTime} />
          <Stack.Screen name="PapularDoc" component={PapularDoc} />
          <Stack.Screen name="DoctorDetail" component={DoctorDetail} />
          <Stack.Screen name="AppointmentDoctor" component={AppointmentDoctor}/>
          <Stack.Screen name="AppointmentFinal" component={AppointmentFinal} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default NavigationRoute;
const styles = StyleSheet.create({
  transparentView: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
});
