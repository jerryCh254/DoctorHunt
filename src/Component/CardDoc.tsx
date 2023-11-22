import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import StarRating from './StarRating';

const CardDoc = ({source, text, dis}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{alignItems:'center'}}>
        <Image
          style={{height: 133, width: 136, borderRadius: 12, marginBottom: 3}}
          source={source}
        />
        <Text
          style={{
            fontSize: 14,
            color: '#000000',
            fontWeight: '500',
          }}>
          {text}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: '#677294',
            fontWeight: '300',
          }}>
          {dis}
        </Text>
        <StarRating />
      </TouchableOpacity>
    </View>
  );
};

export default CardDoc;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 136,
    backgroundColor: '#FFFFFF',
    elevation: 1,
    borderRadius: 12,
    marginHorizontal: 5,
    
  },
});
