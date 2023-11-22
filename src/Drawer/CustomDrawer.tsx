import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../SignUpScreen/LoginScreen';
import LogOutModel from './LogOutModel';
const CustomDrawer = (props)=> {
  const navigation = useNavigation();
  
  return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../Assets/drawerUser.png')}
              style={{
                width: 46,
                height: 44,
              }}
            />
            <View style={{flexDirection: 'column', marginHorizontal: 10}}>
              <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '500'}}>
                Abdullah Manna
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../Assets/call.png')}
                  style={{width: 10, height: 10}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    marginHorizontal: 5,
                  }}>
                  0312-7083254
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              backgroundColor: '#FF0000',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Assets/Vector.png')}
              style={{width: 12, height: 12, tintColor: '#FFFFFF'}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 30,flex:1,width:'100%'}}>
          <DrawerItemList {...props} />
        </View>
        <LogOutModel />
      </DrawerContentScrollView>
 
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
