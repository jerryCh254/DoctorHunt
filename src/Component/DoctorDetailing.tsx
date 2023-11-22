import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import StarRating from './StarRating';
import { useNavigation } from '@react-navigation/native';
import AppointmentDoctor from '../Screens/AppointmentDoctor';

const DoctorDetailing = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 5,
        }}>
        <Image
          source={require('../Assets/doclist.png')}
          style={{
            width: 92,
            height: 87,
            marginVertical:5,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 7,
            marginVertical: 10,
            height: 74,
            width: 205,

            // justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: '#333333',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Dr. Pediatrician
            </Text>

            <Text style={{color: '#677294', fontSize: 14, fontWeight: '300'}}>
              Specialist Cardiologist
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 8,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <StarRating />

              <View style={{flexDirection: 'row', marginLeft: 40}}>
                <Text
                  style={{color: '#0EBE7F', fontSize: 16, fontWeight: '300'}}>
                  $
                </Text>

                <Text
                  style={{
                    color: '#677294E5',
                    fontSize: 16,
                    fontWeight: '500',
                    marginLeft: 2,
                  }}>
                  28.00/hr
                </Text>
              </View>
            </View>
          </View>
          <Image
            source={require('../Assets/hrt.png')}
            style={{width: 21, height: 19}}
          />
        </View>
      </View>
      <View style={{alignItems:'center',marginVertical:10,}}>
        <TouchableOpacity onPress={()=>navigation.navigate('AppointmentDoctor')}
          style={{
            width: 140,
            height: 32,
            borderRadius: 4,
            backgroundColor: '#0EBE7F',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: '500'}}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorDetailing;

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: 335,
    backgroundColor: '#FFFFFF',
    resizeMode: 'cover',
    elevation: 5,
    marginHorizontal: 24,
    borderRadius: 6,
  },
});
