import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
  
} from 'react-native';
import React from 'react';
import LiveChat from '../Screens/LiveChat';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    imageBackground: require('../Assets/list1.png'),
    button: (backgroundColor = 'white'),
    text: 'LIVE',
  },
  {
    id: 2,
    imageBackground: require('../Assets/list2.png'),
    button: (backgroundColor = 'white'),
    text: 'LIVE',
  },
  {
    id: 3,
    imageBackground: require('../Assets/list2.png'),
    button: (backgroundColor = 'white'),
    text: 'LIVE',
  },
  {
    id: 4,
    imageBackground: require('../Assets/list1.png'),
    button: (backgroundColor = 'white'),
    text: 'LIVE',
  },
];

const ListMaping = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    
    return (
      
        <TouchableOpacity onPress={()=>navigation.navigate('LiveChat')}>
          <ImageBackground
            style={styles.ImageContainer}
            source={item.imageBackground}>
            <View style={styles.ViewStyle}>
              <TouchableOpacity style={styles.ButtonStyle}>
                {item.Button}
              </TouchableOpacity>
              <Text style={{fontSize: 7, marginRight: 2, fontWeight: '500'}}>
                {item.text}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      
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

export default ListMaping;
const styles = StyleSheet.create({
  ImageContainer: {
    width: 122,
    height: 168,
    borderRadius: 6,
    alignItems: 'center',
    overflow:'hidden',
    
  },
  ViewStyle: {
    width: 30,
    height: 16,
    backgroundColor: '#FA002F',
    borderRadius: 3,
    marginVertical: 25,
    left: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ButtonStyle: {
    width: 5.5,
    height: 5.5,
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 3,
  },
});
