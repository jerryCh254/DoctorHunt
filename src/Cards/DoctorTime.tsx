import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import FindDoc from '../Screens/FindDoc';
import CardComponent from './CardComponent';
import CardArray from './CardArray';
import AppButton from '../Component/AppButton';
import App from '../../App';
import AppointmentTime from './AppointmentTime';

const DoctorTime = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../Assets/bg.png')}
      style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
          marginVertical: 30,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(FindDoc)}
          style={{
            height: 30,
            width: 30,
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Assets/back.png')}
            style={{height: 12, width: 7}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#222222',
            fontSize: 18,
            fontWeight: '500',
            marginHorizontal: 20,
          }}>
          Select Time
        </Text>
      </View>
      <CardComponent
        source={require('../Assets/cad3.png')}
        text="Dr. Shruti Kedia"
      />
      <View style={{marginHorizontal: 20,}}>
        <CardArray />
      </View>
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <Text style={{color: '#222222', fontSize: 16, fontWeight: '500'}}>
          Today, 23 Feb
        </Text>
        <Text
          style={{
            color: '#677294',
            fontSize: 14,
            fontWeight: '400',
            marginVertical: 20,
          }}>
          No slots available
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <AppButton
          style={styles.ButtonStyle}
          title="Next availability on wed, 24 Feb"
          titleColor="#FFFFFF"
          titleSize={18}
          onPress={() => navigation.navigate('AppointmentTime')}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#677294',
            marginVertical: 20,
          }}>
          OR
        </Text>
        <AppButton
          title="Contact Clinic"
          titleColor="#0EBE7F"
          titleSize={18}
          style={styles.ButtonStyle2}
        />
      </View>
    </ImageBackground>
  );
}

export default DoctorTime

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  ButtonStyle: {
    backgroundColor: '#0EBE7F',
  },
  ButtonStyle2: {
    borderWidth: 1,
    borderColor: '#0EBE7F80',
  },
});