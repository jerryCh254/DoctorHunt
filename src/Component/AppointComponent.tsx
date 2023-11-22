import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import StarRating from './StarRating';

const AppointComponent = () => {
  return (
    <View
      style={{
        width: 335,
        height: 123,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../Assets/doclist.png')}
          style={{
            width: 92,
            height: 87,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        />
        <View style={{marginVertical: 10}}>
          <Text style={{color: '#333333', fontSize: 18, fontWeight: '500'}}>
            Dr. Pediatrician
          </Text>
          <Text style={{color: '#677294', fontSize: 14, fontWeight: '300'}}>
            Specialist Cardiologist
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <StarRating />
            <View style={{flexDirection: 'row',marginLeft:30,}}>
              <Text style={{color: '#0EBE7F'}}>$</Text>

              <Text style={{color: '#677294E5'}}>28.00/hr</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        source={require('../Assets/hrt.png')}
        style={{
          width: 19,
          height: 17,
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      />
    </View>
  );
};

export default AppointComponent;

const styles = StyleSheet.create({});
