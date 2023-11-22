import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import StarRating from '../Component/StarRating';

const CardComponent = ({
  source,
  text,
  experience,
  percentage,
  timing,
  onPress,
  sign,
 time,

}) => {
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
          style={{height: 68, width: 71, borderRadius: 5}}
        />

        <View style={{flexDirection: 'column'}}>
          <Text style={{color: '#333333', fontSize: 16, fontWeight: '500'}}>
            {text}
          </Text>
          <Text
            style={{
              color: '#677294',
              fontSize: 12,
              fontWeight: '400',
              marginBottom: 10,
            }}>
            Uppsala Dental Clinic, salt lake
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <StarRating />
             <View style={{flexDirection:'row',marginLeft:55,}}>
            <Text style={{color: '#0EBE7F'}}>{sign}</Text>
           
              <Text style={{color: '#677294E5'}}>{time}</Text>
            </View>
          </View>
        </View>
        <Image
          source={require('../Assets/hrt.png')}
          style={{height: 17, width: 19}}
        />
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  Container: {
    width: 338,
    height: 88,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
});
