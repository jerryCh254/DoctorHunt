import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import NavBarComponent from '../Component/NavBarComponent';
import {Calendar, CalendarTheme} from 'react-native-calendars';
import Tab from '../Component/Tab';
import AppButton from '../Component/AppButton';
import ConfirmationButton from '../Component/ConfirmationButton';

const AppointmentFinal = () => {
  const [selected, setSelected] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = index => {
    setActiveTab(index);
  };
  const tabs = ['10:00 AM', '12:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];
  const tabs1 = [
    '30 Minute',
    '40 Minute',
    '10 Minute',
    '10 Minute',
    '35 Minute',
  ];
  return (
    <ImageBackground
      source={require('../Assets/bg.png')}
      style={styles.Container}>
      <View style={styles.ContainerView}>
        <NavBarComponent text="Appointment" />
        <View style={styles.ViewStyle}>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            style={styles.CalendarStyle}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: '#0EBE7F',
                selectedColor: '#0EBE7F',
              },
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '50%',
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 45,
          borderTopLeftRadius: 45,
        }}>
        <View style={{marginHorizontal: 15}}>
          <Text
            style={{
              color: '#333333',
              fontSize: 16,
              fontWeight: '500',
              marginHorizontal: 5,
            }}>
            Available Time
          </Text>

          <ScrollView horizontal>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  time={tab}
                  isActive={activeTab === index}
                  onPress={() => handleTabPress(index)}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{marginHorizontal: 15, marginVertical: 20}}>
          <Text
            style={{
              color: '#333333',
              fontSize: 16,
              fontWeight: '500',
              marginHorizontal: 5,
            }}>
            Available Time
          </Text>

          <ScrollView horizontal>
            <View
              style={{
                flexDirection: 'row',

                marginVertical: 10,
              }}>
              {tabs1.map((tab, index) => (
                <Tab
                  key={index}
                  time={tab}
                  isActive={activeTab === index}
                  onPress={() => handleTabPress(index)}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{alignItems: 'center'}}>
         <ConfirmationButton />
        </View>
      </View>
    </ImageBackground>
  );
};

export default AppointmentFinal;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
  },
  ContainerView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  CalendarStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 4,
  },
  ViewStyle: {
    marginVertical: 20,
  },
});
