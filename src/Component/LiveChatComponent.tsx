import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import AppTextInput from './AppTextInput';
const data = [
  {
    id: 1,

    imag: require('../Assets/chat1.png'),
    text: 'Everest Tween',
    dis: 'Thanks for sharing doctor',
  },
  {
    id: 2,

    imag: require('../Assets/chat2.png'),
    text: 'Boone Mash',
    dis: 'Thanks for sharing doctor',
  },
  {
    id: 3,

    imag: require('../Assets/chat3.png'),
    text: 'Handler Wack',
    dis: 'Thanks for sharing doctor',
  },
  {
    id: 4,

    imag: require('../Assets/chat4.png'),
    text: 'Everest Tween',
    dis: 'Thanks for sharing doctor',
  },
  {
    id: 5,

    imag: require('../Assets/chat2.png'),
    text: 'Everest Tween',
    dis: 'Thanks for sharing doctor',
  },
  {
    id: 6,

    imag: require('../Assets/chat1.png'),
    text: 'Everest Tween',
    dis: 'Thanks for sharing doctor',
  },
  {
    id: 7,

    imag: require('../Assets/chat1.png'),
    text: 'Everest Tween',
    dis: 'Thanks for sharing doctor',
  },
  {
    id: 8,

    imag: require('../Assets/chat1.png'),
    text: 'Everest Tween',
    dis: 'Thanks for sharing doctor',
  },
  {
    id: 9,

    imag: require('../Assets/chat1.png'),
    text: 'Everest Tween',
    dis: 'Thanks for sharing doctor',
  },
  {
    id: 10,

    imag: require('../Assets/chat1.png'),
    text: 'Everest Tween',
    dis: 'Thanks for sharing doctor',
  },
];

const LiveChatComponent = ({}) => {
  const renderItem = ({item}) => {
    return (
      
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          marginHorizontal: 20,
        
        }}>
        <Image source={item.imag} style={{width: 48, height: 48}} />
        <View style={{flexDirection: 'column', marginHorizontal: 5}}>
          <Text style={styles.TextStyle}>{item.text}</Text>
          <Text style={styles.TextStyle1}>{item.dis}</Text>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default LiveChatComponent;

const styles = StyleSheet.create({
 
  TextStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  TextStyle1: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '300',
  },
});
