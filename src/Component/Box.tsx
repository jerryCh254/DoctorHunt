import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Box = ({text, backgroundColor}) => {
  return (
    <View
      style={{
        width: 76,
        height: 40,
        borderRadius: 6,
        marginHorizontal:5,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      backgroundColor={backgroundColor}>
      <Text style={{color: '#0EBE7F', fontSize: 13, fontWeight: '500'}}>
        {text}
      </Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({});
