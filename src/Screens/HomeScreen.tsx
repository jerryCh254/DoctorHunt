import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AppTextInput from '../Component/AppTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListMaping from '../Component/ListMaping';
import TabMoping from '../Component/TabMaping';
import PapularDoctot from '../Component/PapularDoctot';
import FeatureDoctor from '../Component/FeatureDoctor';
import FindDoc from './FindDoc';
import {useNavigation} from '@react-navigation/native';
import DrawerSceneWrapper from '../Drawer/DrawerScenWraper';

const Home_Screen = ({navigation}) => {
  
  const {openDrawer} = navigation;
  // const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const clearSearchText = () => {
    setSearchText('');
  };
  return (
    
    <ImageBackground
      source={require('../Assets/bg.png')}
      style={{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
      }}>
      <ScrollView>
        <View
          style={{
            width: 385,
            height: 156,
            backgroundColor: '#0EBE7E',
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}>
          
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 20,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={openDrawer}
                  hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                  <Icon name="bars" size={20} color="#fff" />
                </TouchableOpacity>

                <Text
                  style={{
                    fontWeight: '300',
                    fontSize: 20,
                    color: '#FAFAFA',
                    marginHorizontal: 10,
                  }}>
                  Hi Handwork!
                </Text>
              </View>
              <Image
                source={require('../Assets/icon.png')}
                style={{height: 55, width: 55}}
              />
            </View>

            <Text
              style={{
                left: 19,
                fontSize: 25,
                fontWeight: '700',
                color: '#FAFAFA',
              }}>
              Find Your Doctor
            </Text>
          
          <AppTextInput
            placeholder="Search"
            placeholderTextColor="black"
            value={searchText}
            onChangeText={text => setSearchText(text)}
            onPress={clearSearchText}
            iconName="search"
            iconSize={20}
            borderRadius={10}
            leftIcon={require('../Assets/Vector.png')}
          />
        </View>
        <View style={{marginTop: 50, paddingHorizontal: 10}}>
          <Text
            style={{
              color: '#333333',
              fontSize: 18,
              fontWeight: 'bold',
              margin: 10,
              fontFamily: 'Rubik',
            }}>
            Live Doctors
          </Text>
          <ListMaping />
        </View>
        <View style={{marginHorizontal: 10, paddingHorizontal: 8}}>
          <TabMoping />
        </View>

        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text style={{color: '#333333', fontWeight: '500', fontSize: 18}}>
            Popular Doctor
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('FindDoc')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{fontSize: 15, color: '#677294', marginHorizontal: 2}}>
                See all
              </Text>
              <Icon name="chevron-right" size={10} color="#677294" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 5, paddingHorizontal: 12}}>
          <PapularDoctot />
        </View>
        <View
          style={{
            marginHorizontal: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            paddingHorizontal: 10,
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
        <View style={{paddingHorizontal: 10}}>
          <FeatureDoctor />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home_Screen;

const styles = StyleSheet.create({});
