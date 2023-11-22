import {StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image, ScrollView} from 'react-native';
import React from 'react';
import Home_Screen from '../Screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardDoc from '../Component/CardDoc';
import CategoryDoc from '../Component/CategoryDoc';
import TabBarNavigator from '../BottomTabBar/TabBarNavigator';

const PapularDoc = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../Assets/bg.png')}
      style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
          marginVertical: 30,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabBarNavigator')}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
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
        <Image
          source={require('../Assets/search.png')}
          style={{height: 18, width: 18}}
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: '#333333', fontWeight: '500', fontSize: 18}}>
          Popular Doctor
        </Text>

        <TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 15, color: '#677294', marginHorizontal: 2}}>
              See all
            </Text>
            <Icon name="chevron-right" size={10} color="#677294" />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 15,
          paddingHorizontal: 2,
        }}>
        <ScrollView horizontal>
          <CardDoc
            source={require('../Assets/fvtdoc.png')}
            text="Dr. Turlock Nik"
            dis="Medicine Specialist"
          />
          <CardDoc
            source={require('../Assets/fvtdoc2.png')}
            text="Dr. Tranquilly"
            dis="Pathologic Specialist"
          />
          <CardDoc
            source={require('../Assets/fvtdoc.png')}
            text="Dr. Turlock Nik"
            dis="Medicine Specialist"
          />
        </ScrollView>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text
          style={{
            color: '#333333',
            fontSize: 18,
            fontWeight: '500',
            marginVertical: 10,
          }}>
          Category
        </Text>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 20}}>
          <CategoryDoc
            source={require('../Assets/doclist.png')}
            text="Dr. Pediatrician"
            dis="Specialist Cardiologist"
          />
          <CategoryDoc
            source={require('../Assets/fvtdoc3.png')}
            text="Dr. Mistry Brick"
            dis="Specialist Dentist"
          />
          <CategoryDoc
            source={require('../Assets/fvtdoc4.png')}
            text="Dr. Ether Wall"
            dis="Specialist Cancer"
          />
          <CategoryDoc
            source={require('../Assets/doclist.png')}
            text="Dr. Pediatrician"
            dis="Specialist Cardiologist"
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PapularDoc;

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
