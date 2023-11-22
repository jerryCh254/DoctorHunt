import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Home_Screen from './HomeScreen';
import AppTextInput from '../Component/AppTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cards from '../Cards/Cards';

const FindDoc = ({navigation}) => {
    const [searchText, setSearchText] = useState('');

    const clearSearchText = () => {
      setSearchText('');
    };
  return (
    <View>
      <ImageBackground
        source={require('../Assets/bg.png')}
        style={styles.Container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            marginVertical: 30,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Home_Screen)}
            style={{
              height: 30,
              width: 30,
              backgroundColor: '#FFFFFF',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../Assets/back.png')}
              style={{height: 12, width: 7}}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#222222',
              fontSize: 18,
              fontWeight: '500',
              marginHorizontal: 20,
            }}>
            Find Doctors
          </Text>
        </View>

        <AppTextInput
          placeholder="Dentist"
          placeholderTextColor="#677294"
          iconName="search"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onPress={clearSearchText}
          leftIcon={require('../Assets/Vector.png')}
        />
        <ScrollView>
          <Cards
            source={require('../Assets/card1.png')}
            text="Dr. Shruti Kedia"
            experience="7 Years experience"
            percentage="87%"
            timing="10:00 AM tomorrow"
            onPress={()=>navigation.navigate('DoctorTime')}
          />
          <Cards
            source={require('../Assets/card2.png')}
            text="Dr. Watamaniuk"
            experience="9 Years experience"
            percentage="74%"
            timing="12:00 AM tomorrow"
          />
          <Cards
            source={require('../Assets/cad3.png')}
            text="Dr. Crowner"
            experience="5 Years experience"
            percentage="59%"
            timing="11:00 AM tomorrow"
          />
          <Cards
            source={require('../Assets/cad3.png')}
            text="Dr. Crowner"
            experience="5 Years experience"
            percentage="59%"
            timing="11:00 AM tomorrow"
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default FindDoc

const styles = StyleSheet.create({
  Container:{
    height:'100%',
    width:'100%',
    resizeMode:'cover',
  }
});