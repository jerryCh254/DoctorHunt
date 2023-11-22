import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'

const TextButton = ({source, text, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.OpacityStyle}
      hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
      >
        <Image source={source} style={styles.ImageStyle} />
      </TouchableOpacity>
      <Text style={styles.TextStyle}>{text}</Text>
    </View>
  );
};

export default TextButton

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  OpacityStyle: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {width: 7, height: 13},
  TextStyle: {
    color: '#333333',
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 15,
  },
});