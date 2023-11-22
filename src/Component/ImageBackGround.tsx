import { StyleSheet, Text, View ,ImageBackground} from 'react-native'
import React from 'react'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'

const ImageBackGround = () => {
  return (
  <ImageBackground source={require('../Assets/bg.png')}
  style={{width:"100%",height:'100%',}}
  >
  </ImageBackground>
  )
}

export default ImageBackGround

const styles = StyleSheet.create({})