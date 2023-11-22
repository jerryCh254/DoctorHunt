import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AppButton from './AppButton';
import { useNavigation } from '@react-navigation/native';
import AppointmentFinal from '../Screens/AppointmentFinal';
import DoctorDetailing from './DoctorDetailing';
import AppointmentDoctor from '../Screens/AppointmentDoctor';

const ConfirmationButton = () => {
  const navigation=useNavigation();
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              elevation: 4,
              width: '90%',
              height: '70%',
              borderRadius: 20,

              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 150,
                height: 150,
                justifyContent: 'center',
                marginVertical: 20,
                alignItems: 'center',
                borderRadius: 72,
                backgroundColor: '#E7F8F2',
              }}>
              <Image
                source={require('../Assets/like.png')}
                style={{width: 72, height: 69}}
              />
            </TouchableOpacity>
            <Text style={{color: '#333333', fontWeight: '500', fontSize: 38}}>
              Thank You !
            </Text>
            <Text style={{color: '#677294', fontSize: 20, fontWeight: '400'}}>
              Your Appointment Successful
            </Text>
            <Text
              style={{
                color: '#677294',
                fontSize: 18,
                fontWeight: '300',

                textAlign: 'center',
                marginVertical: 15,
                lineHeight: 21,
                marginHorizontal: 20,
              }}>
              You booked an appointment with Dr. Pediatrician Puppies on
              February 21, at 02:00 PM
            </Text>
            <AppButton
              title="Done"
              style={{backgroundColor: '#0EBE7F'}}
              onPress={() => setShowModal(false)}
            />
            <TouchableOpacity onPress={()=>navigation.navigate(AppointmentDoctor)}>
              <Text
                style={{
                  color: '#677294',
                  fontSize: 14,
                  fontWeight: '400',
                  marginVertical: 10,
                }}>
                Edit your appointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <AppButton
        style={{backgroundColor: '#0EBE7F'}}
        title="Confirm"
        titleColor="#FFFFFF"
        titleSize={18}
        onPress={() => setShowModal(true)}
      />
    </View>
  );
};

export default ConfirmationButton;

const styles = StyleSheet.create({});
