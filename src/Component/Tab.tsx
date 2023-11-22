import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Tab = ({time, isActive, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 60,
        width: 60,
        backgroundColor: isActive ? '#0EBE7F' : '#0EBE7F14',
        borderRadius: 30,
        alignItems:"center",
        margin:5,
        justifyContent: 'center',
       
      }}>
      <Text
        style={{
          color: isActive ? '#ffffff' : '#0EBE7E',
          fontSize: 14,
          fontWeight: '400',
          textAlign: 'center',
        }}>
        {time}
      </Text>
    </TouchableOpacity>
  );
}

export default Tab

const styles = StyleSheet.create({})