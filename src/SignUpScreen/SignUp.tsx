import {ImageBackground,StyleSheet,Text,View,TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import GoogleTab from '../SignUpComponent/GoogleTab';
import TextInpuT from '../SignUpComponent/TextInpuT';
import AppButton from '../Component/AppButton';
import {useNavigation} from '@react-navigation/native';
import Home_Screen from '../Screens/HomeScreen';
import LoginScreen from './LoginScreen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import MainMenu from '../Screens/MainMenu';
import useStyles from './styles.css'
import styles from './Styling'
const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your full name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address.'),
  password: Yup.string().min(8).required('Please enter your password.'),
  // .matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
});
const SignUp = () => {
 
  const navigation = useNavigation();
  const [securePassword, SetSecurePassword] = useState(true);
  const [agree, setAgree] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const handleAgreeTerms = () => {
    setAgreeTerms(prevState => !prevState);
  };
  const toggleSecurePassword = () => {
    SetSecurePassword(prevState => !prevState);
  };
  return (
    <Formik
      initialValues={{name: '', email: '', password: ''}}
      validationSchema={SignUpSchema}
      onSubmit={(values, actions) => {
        console.log('Form submitted successfully:', values);
        navigation.navigate('MainMenu');
      }}>
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldTouched,
        isValid,
      }) => (
        <ImageBackground
          source={require('../Assets/bg.png')}
          style={styles.ImageContainer}>
          <View style={styles.container}>
            <Text style={styles.Text1}>Join us to start searching</Text>
            <Text style={styles.Text2}>
              You can search course, apply course and find scholarship for
              abroad studies
            </Text>

            <View style={styles.View2}>
              <GoogleTab
                source={require('../Assets/google.png')}
                text="Google"
              />
              <GoogleTab
                source={require('../Assets/facebook.png')}
                text="Facebook"
              />
            </View>
            <View style={{alignItems: 'flex-start'}}>
              <TextInpuT
                placeholder="Name"
                placeholderTextColor="#677294"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
              />
              {touched.name && errors.name && (
                <Text style={styles.Text3}>{errors.name}</Text>
              )}

              <TextInpuT
                placeholder="Email"
                placeholderTextColor="#677294"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.Text3}>{errors.email}</Text>
              )}
              <TextInpuT
                placeholder="Password"
                placeholderTextColor="#677294"
                secureTextEntry={securePassword}
                keyboardType="numeric"
                leftIcon={toggleSecurePassword}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              {touched.password && errors.password && (
                <Text style={styles.Text3}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.View3}>
              <TouchableOpacity
                onPress={handleAgreeTerms}
                style={[
                  styles.Touchable,
                  {backgroundColor: agreeTerms ? '#0EBE7F' : '#67729480'},
                ]}
              />
              <Text style={{color: '#677294', marginHorizontal: 6}}>
                I agree with the Terms of Service & Privacy Policy
              </Text>
            </View>

            <AppButton
              style={{backgroundColor: agreeTerms ? '#0EBE7F' : '#67729480'}}
              title="Sign Up"
              titleColor="#FFFFFF"
              titleSize={18}
              onPress={handleSubmit}
              disabled={!agreeTerms}
            />
            <View style={styles.View4}>
              <Text style={styles.Text4}>Have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.Text}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
    </Formik>
  );
};
export default SignUp;
