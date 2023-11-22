import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import AppButton from '../Component/AppButton';
import Home_Screen from './HomeScreen';
import TabBarNavigator from '../BottomTabBar/TabBarNavigator';
import SignUp from '../SignUpScreen/SignUp';


const data1 = {
  imageBackground: require('../Assets/bg2.png'),
  image: require('../Assets/doc.png'),
  title: 'Find Trusted Doctors',
  description:
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.',
};
const data2 = {
  title: 'Choose Best Doctors',
  description:
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.',
  image: require('../Assets/doc2.png'),
  imageBackground: require('../Assets/bg3.png'),
};
const data3 = {
  title: 'Easy Appointments',
  description:
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.',
  image: require('../Assets/doc3.png'),
  imageBackground: require('../Assets/bg2.png'),
};

const OnBoarding1 = ({navigation}) => {
  const [currentSlide, setCurrentSlide] = useState(data1);

  const handleNext = () => {
    if (currentSlide === data1) {
      setCurrentSlide(data2);
    } else if (currentSlide === data2) {
      setCurrentSlide(data3);
    } else {
        navigation.navigate(SignUp);
    }
    
  };

  return (
    <ImageBackground
      source={currentSlide.imageBackground}
      style={styles.bgStyle}>
      <View style={styles.container}>
        <Image source={currentSlide.image} style={styles.ImageStyle} />
        <Text style={styles.TextStyle}>{currentSlide.title}</Text>
        <Text style={styles.disStyle}>{currentSlide.description}</Text>
        <AppButton
          title="Get Started"
          style={styles.ButtonStyle}
          onPress={handleNext}
        />
        <AppButton
          title="Skip"
          titleColor="#677294"
          titleSize={15}
          style={styles.TextButton}
          onPress={() => navigation.navigate(SignUp)}
        />
      </View>
    </ImageBackground>
  );
};

export default OnBoarding1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  bgStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  ImageStyle: {
    width: 340,
    height: 340,
    top: 91,
  },
  TextStyle: {
    top: 130,
    
    fontSize: 28,
    color: 'black',
  },
  disStyle: {
    top: 140,
    color: '#677294E5',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    height: 70,
    width: 289,
    textAlign: 'center',
  },
  ButtonStyle: {
    top: 200,
    backgroundColor: '#0EBE7F',
    borderRadius: 5,
  },
  TextButton: {
    width: 30,
    height: 30,
    borderRadius: 0,
    top: 220,
  },
});
