import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import GoogleTab from '../SignUpComponent/GoogleTab';
import TextInpuT from '../SignUpComponent/TextInpuT';
import AppButton from '../Component/AppButton';
import {useNavigation} from '@react-navigation/native';
import Home_Screen from '../Screens/HomeScreen';
import SignUp from './SignUp';
import * as Yup from 'yup';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Modalize} from 'react-native-modalize';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import MainMenu from '../Screens/MainMenu';
import styles from './Styles';
import AppTextInput from '../Component/AppTextInput';
import {data1, data2, data3} from './LoginScreenData';
import Validation from './Validation';
import TabBarNavigator from '../BottomTabBar/TabBarNavigator';
const LoginScreen = () => {
  const navigation = useNavigation();
  const modalizeRef = useRef<Modalize>(null);
  const contentRef = useRef<Animated.AnimatedComponent<ScrollView>>(null);
  const [currentSlide, setCurrentSlide] = useState(data1);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const handleNext = () => {
    if (currentSlide === data1) {
      setCurrentSlide(data2);
    } else if (currentSlide === data2) {
      setCurrentSlide(data3);
    } else {
      navigation.navigate('MainMenu');
    }
  };

  return (
    <ImageBackground
      source={require('../Assets/bg.png')}
      style={styles.Container}>
      <GestureHandlerRootView style={{flex: 1, backgroundColor: 'transparent'}}>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <Text style={styles.TextTitle}>Welcome back</Text>
          <Text style={styles.TextDis}>
            You can search course, apply course and find scholarship for abroad
            studies
          </Text>
        </View>
        <View style={styles.TabStyle}>
          <GoogleTab source={require('../Assets/google.png')} text="Google" />
          <GoogleTab
            source={require('../Assets/facebook.png')}
            text="Facebook"
          />
        </View>
        <Validation />
        <View style={styles.OpenView}>
          <TouchableOpacity onPress={onOpen}>
            <Text style={styles.OpenViewText}>Open the modal</Text>
          </TouchableOpacity>
        </View>
        <Modalize
          adjustToContentHeight
          scrollViewProps={{showsVerticalScrollIndicator: true}}
          ref={modalizeRef}
          handlePosition="inside"
          modalStyle={styles.ModelStyle}>
          <View style={styles.ModelView}>
            <Text style={styles.ModelViewText}>{currentSlide.title}</Text>
            <Text style={styles.ModelViewText2}>{currentSlide.subtitle}</Text>
            {currentSlide == data1 ? (
              <View style={{marginVertical: 10}}>
                <TextInpuT
                  placeholder={currentSlide.textInput}
                  placeholderTextColor="#000"
                />
              </View>
            ) : currentSlide == data2 ? (
              <OTPInputView
                pinCount={4}
                autoFocusOnLoad
                style={{
                  width: '80%',
                  height: 100,
                  marginHorizontal: 30,
                  paddingLeft: 5,
                }}
              />
            ) : (
              <View>
                <AppTextInput
                  placeholder="New Password"
                  placeholderTextColor="#677294"
                  leftIcon={require('../Assets/Group.png')}
                />
                <AppTextInput
                  placeholder="Re-enter Password"
                  placeholderTextColor="#677294"
                  leftIcon={require('../Assets/Group.png')}
                />
              </View>
            )}

            <View style={styles.ModelButton}>
              <AppButton
                style={{
                  backgroundColor: '#0EBE7F',
                }}
                title="Continue"
                titleSize={18}
                titleColor="#FFFFFF"
                onPress={handleNext}
              />
            </View>
          </View>
        </Modalize>

        <View style={styles.TextButtonView}>
          <Text style={styles.TextButton}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.TextButton}>Join Us</Text>
          </TouchableOpacity>
        </View>
      </GestureHandlerRootView>
    </ImageBackground>
  );
};

export default LoginScreen;
