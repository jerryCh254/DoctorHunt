import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AppTab = ({source, text, Specialist, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            alignItems: 'flex-end',
            marginHorizontal: 10,
            marginVertical: 5,
          }}>
          <Image
            source={require('../Assets/hrt.png')}
            style={{width: 17, height: 15}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Image source={source} style={{width: 84, height: 84}} />
          <Text
            style={{
              color: '#333333',
              fontSize: 15,
              fontWeight: '500',
              marginVertical: 5,
            }}>
            {text}
          </Text>
          <Text style={{color: '#0EBE7E', fontSize: 12, fontWeight: '400'}}>
            {Specialist}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AppTab;

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 162,
    backgroundColor: '#FFFFFF',
    resizeMode: 'cover',
    elevation: 4,
    borderRadius: 10,
    marginHorizontal:10,
  },
});
