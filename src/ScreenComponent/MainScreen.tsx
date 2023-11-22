import React from 'react';
import {View, Image} from 'react-native';
import styles from '../Styles/StylingTab';

const MainScreen = ({focused,source}) => {
  return (
    <View
      style={[
        styles.TabView,
        {backgroundColor: focused ? '#0EBE7E' : '#FFFFFF'},
      ]}>
      <Image
        source={source}
        resizeMode="contain"
        style={[styles.TabImage, {tintColor: focused ? '#FFFFFF' : '#858EA9'}]}
      />
    </View>
  );
};

export default MainScreen;
