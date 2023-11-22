import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import DoctorDetail from './DoctorDetail';
import CardComponent from '../Cards/CardComponent';
import AppTextInput from '../Component/AppTextInput';
import AppointComponent from '../Component/AppointComponent';

import ImagePickers from '../Component/ImagePickers';
import AppButton from '../Component/AppButton';
import AppointmentFinal from './AppointmentFinal';

const AppointmentDoctor = ({navigation}) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={require('../Assets/bg.png')}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 8,
          marginVertical: 15,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DoctorDetail')}
          style={{
            height: 30,
            width: 30,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            marginHorizontal: 10,
          }}>
          <Image
            source={require('../Assets/back.png')}
            style={{width: 7, height: 12}}
          />
        </TouchableOpacity>
        <Text style={{color: '#333333', fontSize: 18, fontWeight: '500'}}>
          Appointment
        </Text>
      </View>
      <AppointComponent />
      <View style={{marginHorizontal: 20}}>
        <Text style={{color: '#333333', fontSize: 16, fontWeight: '500'}}>
          Appointment For
        </Text>
      </View>
      <AppTextInput placeholder="Patient Name" placeholderTextColor="#677294" />
      <AppTextInput
        placeholder="Contact Number"
        placeholderTextColor="#677294"
      />
      <View style={{marginHorizontal: 20, marginVertical: 30}}>
        <Text style={{color: '#333333', fontSize: 16, fontWeight: '500'}}>
          Who is this patient?
        </Text>
      </View>
      <View style={{marginHorizontal:20,}}>
        <ImagePickers />
      </View>
      <View style={{alignItems: 'center'}}>
        <AppButton
          style={styles.ButtonStyle}
          title="Next"
          titleColor="#FFFFFF"
          titleSize={18}
          onPress={() => navigation.navigate('AppointmentFinal')}
        />
      </View>
    </ImageBackground>
  );
};

export default AppointmentDoctor;

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: '#0EBE7F',
    marginVertical:45,
  },
});
