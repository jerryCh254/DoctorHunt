import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import TextButton from '../Component/TextButton';
import SettingComponent from '../Component/SettingComponent';
import SettingMoreCom from '../Component/SettingMoreCom';
import { useNavigation } from '@react-navigation/native';
import Home_Screen from '../Screens/HomeScreen';
import TabBarNavigator from '../BottomTabBar/TabBarNavigator';
import DrawerSceneWrapper from './DrawerScenWraper';

const Settings = () => {
  const navigation=useNavigation();
  return (
    <DrawerSceneWrapper>
      <ImageBackground
        source={require('../Assets/bg.png')}
        style={styles.ImageStyle}>
        <TextButton
          source={require('../Assets/back.png')}
          text="Settings"
          onPress={() => navigation.navigate('TabBarNavigator')}
        />
        <View style={styles.Container}>
          <Text style={styles.TextStyle}>Account settings</Text>
          <SettingComponent
            source={require('../Assets/lock.png')}
            text="Change Password"
            icon={require('../Assets/e.png')}
            backgroundColor="#EB5757"
            marginHorizontal={20}
            style={{width: 11, height: 15}}
          />
          <SettingComponent
            source={require('../Assets/notifications.png')}
            text="Notifications"
            icon={require('../Assets/e.png')}
            backgroundColor="#219653"
            marginHorizontal={20}
            style={{width: 11, height: 14}}
          />
          <SettingComponent
            source={require('../Assets/Statistics.png')}
            text="Statistics"
            icon={require('../Assets/e.png')}
            backgroundColor="#56CCF2"
            marginHorizontal={20}
            style={{width: 15, height: 15}}
          />
          <SettingComponent
            source={require('../Assets/about.png')}
            text="About us"
            icon={require('../Assets/e.png')}
            backgroundColor="#F2994A"
            marginHorizontal={20}
            style={{width: 13, height: 11}}
          />
        </View>
        <View style={styles.Container}>
          <Text style={styles.TextStyle}>More options</Text>
          <SettingMoreCom text="Text messages" />
          <SettingMoreCom text="Phone calls" />
          <SettingMoreCom
            text="Phone calls"
            dis="English"
            source={require('../Assets/e.png')}
          />
          <SettingMoreCom
            text="Currency"
            dis="$-USD"
            source={require('../Assets/e.png')}
          />
          <SettingMoreCom
            text="Linked accounts"
            dis="Facebook, Google"
            source={require('../Assets/e.png')}
          />
        </View>
      </ImageBackground>
    </DrawerSceneWrapper>
  );
};

export default Settings;

const styles = StyleSheet.create({
  ImageStyle: {width: '100%', height: '100%', resizeMode: 'cover'},
  Container: {
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  TextStyle: {
    color: '#677294',
    fontSize: 18,
    fontWeight: '500',
    // fontFamily: 'Rubik',
  },
});
