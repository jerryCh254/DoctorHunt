import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StarRating from './StarRating';

const CategoryDoc = ({source, text, dis}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Image
          source={source}
          style={{width: 82, height: 82, resizeMode: 'cover', borderRadius: 6}}
        />

        <View style={{flexDirection: 'column'}}>
          <Text style={{color: '#333333', fontSize: 18, fontWeight: '500'}}>
            {text}
          </Text>
          <Text style={{color: '#677294', fontSize: 14, fontWeight: '300'}}>
            {dis}
          </Text>
          <View
            style={{
              marginVertical: 15,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <StarRating />
            <Text
              style={{
                color: '#333333',
                marginLeft: 45,
                fontSize: 16,
                fontWeight: '500',
              }}>
              2.4
            </Text>
            <Text
              style={{
                color: '#677294',
                fontSize: 12,
                fontWeight: '400',
              }}>
              (2475 views)
            </Text>
          </View>
        </View>

        <Image
          source={require('../Assets/hrt.png')}
          style={{width: 19, height: 17}}
        />
      </View>
    </View>
  );
};

export default CategoryDoc

const styles = StyleSheet.create({
  container: {
    height: 104,
    width: 335,
    resizeMode: 'cover',
    backgroundColor: '#FFFFFF',
    elevation: 1,
    marginVertical:10,
    borderRadius:10,
    
  },
});