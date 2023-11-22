import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const GoogleTab = ({text, source}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={source} style={{width: 18, height: 18}} />
      <Text style={{color: '#677294', fontWeight: '300', fontSize: 16,marginHorizontal:10,}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleTab

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection:'row',
    elevation:4,
    marginHorizontal:5,
    borderRadius:10,
  },
});