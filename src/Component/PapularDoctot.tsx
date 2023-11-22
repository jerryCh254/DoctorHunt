import {Image, StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import StarRating from './StarRating';
import PapularDoc from '../Cards/PapularDoc';
import {useNavigation} from '@react-navigation/native';
const data = [
  {
    id: 1,
    image: require('../Assets/Papular1.png'),
    text: 'Dr. Fillerup Grab',
    dis: 'Medicine Specialist',
  },
  {
    id: 2,
    image: require('../Assets/Papular1.png'),
    text: 'Dr. Blessing',
    dis: 'Dentist Specialist',
    
  },
];

const PapularDoctot = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View style={styles.Container}>
        <TouchableOpacity onPress={() => navigation.navigate('PapularDoc')}
        style={{alignItems:'center',justifyContent:'center'}}
        >
          <Image style={styles.ImageStyle} source={item.image} />
          <Text style={styles.TextStyle}>{item.text}</Text>
          <Text style={styles.TextStyle1}>{item.dis}</Text>
          <StarRating />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};


export default PapularDoctot;

const styles = StyleSheet.create({
  Container: {
    width: 190,
    height: 264,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    
    marginHorizontal:5,
    elevation:4,
    
  },
  ImageStyle: {
    height: 180,
    width: 190,
  },
  TextStyle: {
    top: 10,
    color: '#333333',
    fontWeight: '700',
    fontSize: 18,
  },
  TextStyle1: {
    marginVertical: 10,
    color: '#677294CC',
    fontSize: 12,
    fontWeight: '300',
  },
});
