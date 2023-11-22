import {StyleSheet, Text, View, Image, FlatList,TouchableOpacity} from 'react-native';
import React from 'react';

const TabMoping = props => {
  const data = [
    {
      id: 1,
      source: require('../Assets/tab1.png'),
      width: 33,
      height: 37.3,
      backgroundColor: '#2753F3',
    },
    {
      id: 2,
      source: require('../Assets/tab2.png'),
      width: 33,
      height: 37,
      backgroundColor: '#0EBE7E',
    },
    {
      id: 3,
      source: require('../Assets/tab5.png'),
      width: 44,
      height: 26,
      backgroundColor: '#FE7F44',
    },
    {
      id: 4,
      source: require('../Assets/tab4.png'),
      width: 44,
      height: 26,
      backgroundColor: '#FF484C',
    },
  ];
  const renderCustomImage = ({item}) => (
    <TouchableOpacity>
      <View
        style={{
          height: 100,
          width: 88,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          // marginHorizontal:10,
          marginVertical: 20,
          overflow: 'hidden',
        marginHorizontal:5,
        }}
        backgroundColor={item.backgroundColor}>
        <Image
          source={item.source}
          // style={styles.ImageStyle}
          width={item.width}
          height={item.height}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderCustomImage}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TabMoping;

const styles = StyleSheet.create({
  ImageStyle: {
    // width={item.width}
    //   height={item.height}
  },
});
