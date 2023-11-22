import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import DoctorDetailing from '../Component/DoctorDetailing';
import BoxCard from '../Component/BoxCard';
import Fvt from './Fvt';
import MapView from 'react-native-maps';

const DoctorDetail = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../Assets/bg.png')}
      style={styles.container}>
      <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Fvt')}
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
              Doctor Details
            </Text>
          </View>

          <Image
            source={require('../Assets/search.png')}
            style={{width: 18, height: 18, marginHorizontal: 15}}
          />
        </View>
      </View>
      <DoctorDetailing />
      <View
        style={{
          width: 305,
          height: 84,
          backgroundColor: '#FFFFFF',
          marginHorizontal: 40,
          borderRadius: 10,
          marginVertical: 20,
          elevation: 1,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <BoxCard text="100" dis="Running" />
        <BoxCard text="500" dis="Ongoing" />
        <BoxCard text="700" dis="Patient" />
      </View>

      <Text
        style={{
          color: '#333333',
          marginHorizontal: 25,
          fontSize: 18,
          fontWeight: '500',
        }}>
        Services
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 25,
          marginVertical: 15,
        }}>
        <Text style={{color: '#0EBE7F', fontSize: 14, fontWeight: '500'}}>
          1.
        </Text>
        <Text
          style={{
            color: '#677294E5',
            fontSize: 14.5,
            fontWeight: '400',
            marginHorizontal: 10,
          }}>
          Patient care should be the number one priority.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 25,
          marginVertical: 15,
        }}>
        <Text style={{color: '#0EBE7F', fontSize: 14, fontWeight: '500'}}>
          2.
        </Text>
        <Text
          style={{
            color: '#677294E5',
            fontSize: 14.5,
            fontWeight: '400',
            marginHorizontal: 10,
          }}>
          If you run your practiced know how frustrating.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 25,
          marginVertical: 15,
        }}>
        <Text style={{color: '#0EBE7F', fontSize: 14, fontWeight: '500'}}>
          3.
        </Text>
        <Text
          style={{
            color: '#677294E5',
            fontSize: 13,
            fontWeight: '400',
            marginHorizontal: 10,
          }}>
          That's why some of appointment reminder system.
        </Text>
      </View>
      <View
        style={{
          width: 335,
          height: '25%',
          borderRadius: 10,

          marginHorizontal: 25,
          marginVertical: 20,
        }}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default DoctorDetail;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    
  },
});
