import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CardComponent from './CardComponent';
import CardArray from './CardArray';
import Box from '../Component/Box';

const AppointmentTime = () => {
  return (
    <ImageBackground
      source={require('../Assets/bg.png')}
      style={{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginVertical: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
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
        <Text
          style={{
            color: '#222222',
            fontSize: 18,
            fontWeight: '500',
            marginHorizontal: 10,
          }}>
          Select Time
        </Text>
      </View>
      <CardComponent
        source={require('../Assets/card1.png')}
        text="Dr. Shruti Kedia"
      />
      <View style={{marginHorizontal:20}}>
        <CardArray />
      </View>
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <Text style={{color: '#222222', fontSize: 18, fontWeight: '500'}}>
          Today, 23 Feb
        </Text>
      </View>
      <View style={{marginHorizontal: 15, marginVertical: 10}}>
        <Text
          style={{
            color: '#333333',
            fontSize: 16,
            fontWeight: '500',
            marginVertical: 10,
            marginHorizontal: 5,
          }}>
          Afternoon 7 slots
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Box text="1:00 PM" backgroundColor="#0EBE7F14" />
          <Box text="1:30 PM" backgroundColor="#0EBE7F14" />
          <Box text="2:00 PM" backgroundColor="#0EBE7F80" />
          <Box text="2:30 PM" backgroundColor="#0EBE7F14" />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Box text="3:00 PM" backgroundColor="#0EBE7F14" />
          <Box text="3:30 PM" backgroundColor="#0EBE7F14" />
          <Box text="4:00 PM" backgroundColor="#0EBE7F14" />
        </View>
      </View>
      <View style={{marginHorizontal: 15, marginVertical: 10}}>
        <Text
          style={{
            color: '#333333',
            fontSize: 16,
            fontWeight: '500',
            marginVertical: 10,
            marginHorizontal: 5,
          }}>
          Afternoon 7 slots
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Box text="5:00 PM" backgroundColor="#0EBE7F14" />
          <Box text="5:30 PM" backgroundColor="#0EBE7F80" />
          <Box text="6:00 PM" backgroundColor="#0EBE7F14" />
          <Box text="6:30 PM" backgroundColor="#0EBE7F14" />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Box text="7:00 PM" backgroundColor="#0EBE7F14" />
         
        </View>
      </View>
    </ImageBackground>
  );
}

export default AppointmentTime

const styles = StyleSheet.create({})