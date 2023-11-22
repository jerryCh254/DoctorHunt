import { StyleSheet, Text, View,Modal,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import MainMenu from '../Screens/MainMenu';
import LoginScreen from '../SignUpScreen/LoginScreen';
import TabBarNavigator from '../BottomTabBar/TabBarNavigator';
import { SlideInLeft } from 'react-native-reanimated';

const LogOutModel = () => {
    const navigation =useNavigation();
    const [showModal,setShowModal]=useState(false);
  return (
    <View>
      <Modal transparent={true} visible={showModal} animationType='slide'>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              elevation: 4,
              width: '90%',
              height: '20%',
              borderRadius: 10,
            }}>
            <View style={{marginHorizontal: 20, marginVertical: 20}}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 26,
                  fontWeight: '500',
                }}>
                Log Out
              </Text>
              <Text
                style={{
                  color: '#677294',
                  fontSize: 16,
                  fontWeight: '400',
                  marginVertical: 5,
                }}>
                Are you sure you want to logout?
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 40,
              }}>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text
                  style={{
                    color: '#0EBE7F',
                    fontSize: 16,
                    fontWeight: '500',
                    marginHorizontal: 20,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text
                  style={{
                    color: '#0EBE7F',
                    fontSize: 16,
                    fontWeight: '500',
                    marginHorizontal: 10,
                  }}>
                  Ok
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={{
          marginVertical: 50,
          marginHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../Assets/logout.png')}
          style={{width: 18, height: 18}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: '#fff',
            marginHorizontal: 15,
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LogOutModel

const styles = StyleSheet.create({})