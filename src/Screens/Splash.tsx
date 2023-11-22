import {Image, StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import OnBoarding1 from './OnBoarding1';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding1');
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/bg.png')}
        style={styles.bgStyle}
      />
      <Image source={require('../Assets/Frame.png')} style={styles.logoStyle} />
      <Text style={styles.TextStyle}>Doctor Hunt</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  logoStyle: {
    width: 70,
    height: 70,
    // top:353,
    // left:153,
    //    justifyContent:'center',
    //     alignSelf:'center',
    // flex:1,
  },
  TextStyle: {
   
    color: '#222222',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 30,
  },
});
