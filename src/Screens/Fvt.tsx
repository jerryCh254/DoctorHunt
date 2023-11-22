import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import React,{useState} from 'react';
import AppTextInput from '../Component/AppTextInput';
import { useNavigation } from '@react-navigation/native';
import Home_Screen from './HomeScreen';
import AppTab from '../Component/AppTab';
import FeatureDoctor from '../Component/FeatureDoctor';
import Icon from 'react-native-vector-icons/FontAwesome';
import DoctorDetail from './DoctorDetail';

const Fvt = () => {
  const navigation=useNavigation();
   const [searchText, setSearchText] = useState('');

   const clearSearchText = () => {
     setSearchText('');
   };
  return (
    <ImageBackground
      source={require('../Assets/bg.png')}
      style={styles.container}>
      <ScrollView>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate(Home_Screen)}
              style={{
                height: 30,
                width: 30,
                backgroundColor: '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                marginHorizontal: 10,
              }}>
              <Image
                source={require('../Assets/back.png')}
                style={{width: 7, height: 12}}
              />
            </TouchableOpacity>
            <Text style={{color: '#333333', fontSize: 18, fontWeight: '500'}}>
              Favourite Doctors
            </Text>
          </View>
        </View>
        <AppTextInput
          placeholder="Dentist"
          placeholderTextColor="#677294"
          value={searchText}
          iconName="search"
          onChangeText={text => setSearchText(text)}
          onPress={clearSearchText}
          leftIcon={require('../Assets/Vector.png')}
        />
        <View style={{marginHorizontal: 10, flexDirection: 'row'}}>
          <AppTab
            source={require('../Assets/f2.png')}
            text="Dr. Suey"
            Specialist="Specalist Cardiology"
            onPress={() => navigation.navigate(DoctorDetail)}
          />
          <AppTab
            source={require('../Assets/fvtdoc5.png')}
            text="Dr. Christeners N"
            Specialist="Specialists Cancer"
          />
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          <AppTab
            source={require('../Assets/f4.png')}
            text="Dr. Shore"
            Specialist="Specialists Dentist"
          />
          <AppTab
            source={require('../Assets/f2.png')}
            text="Dr. Suey"
            Specialist="Specialist Cardiology"
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginVertical: 10,
          }}>
          <Text style={{color: '#333333', fontWeight: '500', fontSize: 18}}>
            Feature Doctor
          </Text>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{fontSize: 15, color: '#677294', marginHorizontal: 2}}>
                See all
              </Text>
              <Icon name="chevron-right" size={10} color="#677294" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal:10,paddingHorizontal:3,}}> 
          <FeatureDoctor />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Fvt;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
