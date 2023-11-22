import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import MainMenu from '../Screens/MainMenu';
import styles from './Styles';
import AppTextInput from '../Component/AppTextInput';
import {Formik} from 'formik';
import TextInpuT from '../SignUpComponent/TextInpuT';
import AppButton from '../Component/AppButton';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address.'),
  password: Yup.string()
    .min(8)
    .required('Please enter your password.')
    .matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
});

const Validation = () => {
  const navigation = useNavigation();
  const [securePassword, SetSecurePassword] = useState(true);

  const toggleSecurePassword = () => {
    SetSecurePassword(prevState => !prevState);
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values, actions) => {
        console.log('Form submitted successfully:', values);
        navigation.navigate(MainMenu);
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
        <View>
          <View style={styles.FormikView}>
            <TextInpuT
              placeholder="Email"
              placeholderTextColor="#677294"
              // onChangeText={text => SetEmail(text)}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.ErrorStyle}>{errors.email}</Text>
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
              <Text style={styles.ErrorStyle}>{errors.password}</Text>
            )}
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <AppButton
              disabled={!isValid}
              style={{
                backgroundColor: isValid ? '#0EBE7F' : '#67729480',
              }}
              title="Login"
              titleColor="#FFFFFF"
              titleSize={18}
              onPress={handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Validation;
