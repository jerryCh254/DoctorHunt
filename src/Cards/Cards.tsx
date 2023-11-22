import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Cards = ({source, text, experience, percentage, timing, onPress}) => {
  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 10,
          justifyContent: 'space-around',
        }}>
        <Image
          source={source}
          style={{height: 87, width: 92, borderRadius: 5}}
        />

        <View style={{flexDirection: 'column'}}>
          <Text style={{color: '#333333', fontSize: 18, fontWeight: '500'}}>
            {text}
          </Text>
          <Text style={{color: '#0EBE7F', fontSize: 13, fontWeight: '400'}}>
            Tooths Dentist
          </Text>
          <Text style={{color: '#677294', fontSize: 14, fontWeight: '300'}}>
            {experience}
          </Text>
          <View
            style={{
              flexDirection: 'row',

              marginVertical: 8,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: '#0EBE7F',
              }}
            />
            <Text
              style={{
                color: '#677294',
                fontSize: 11,
                fontWeight: '300',
                marginHorizontal: 3,
              }}>
              {percentage}
            </Text>
            <TouchableOpacity
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: '#0EBE7F',
                marginLeft: 20,
              }}
            />
            <Text
              style={{
                color: '#677294',
                fontSize: 11,
                fontWeight: '300',
                marginHorizontal: 3,
              }}>
              69 Patient Stories
            </Text>
          </View>
        </View>
        <Image
          source={require('../Assets/hrt.png')}
          style={{height: 18, width: 20}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: '#0EBE7F', fontSize: 14, fontWeight: '500'}}>
            Next Available
          </Text>
          <Text style={{color: '#677294', fontSize: 12, fontWeight: '300'}}>
            {timing}
          </Text>
        </View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            width: 112,
            height: 34,
            backgroundColor: '#0EBE7F',
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFFFFF', fontWeight: '500', fontSize: 12}}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  Container: {
    width: 342,
    height: 170,
    backgroundColor: '#FFFFFF',
    elevation:5,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
});
