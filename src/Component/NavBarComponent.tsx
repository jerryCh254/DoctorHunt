import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const NavBarComponent = ({onPress,text}) => {
  return (
    <View style={{flexDirection: 'row',alignItems:'center'}}>
      <TouchableOpacity
      onPress={onPress}
        style={{
          width: 30,
          height: 30,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Assets/back.png')}
          style={{width: 7, height: 12}}
        />
      </TouchableOpacity>
      <Text style={{color: '#333333',fontSize:18,fontWeight:'800',marginHorizontal:12,}}>{text}</Text>
    </View>
  );
}

export default NavBarComponent

const styles = StyleSheet.create({})