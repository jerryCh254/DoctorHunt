import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BoxCard = ({text,dis}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#333333', fontSize: 18, fontWeight: '500',}}>
      {text}
      </Text>
      <Text style={{color: '#333333', fontSize: 14, fontWeight: '300'}}>
        {dis}
      </Text>
    </View>
  );
};

export default BoxCard;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 64,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginLeft: 6,
   
  },
});
