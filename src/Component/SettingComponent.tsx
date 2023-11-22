import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SettingComponent = ({
  source,
  text,
  icon,
  backgroundColor,
  marginHorizontal,
  style,
}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.ViewContainer}>
        <View style={styles.ViewStyle} backgroundColor={backgroundColor}>
          <Image source={source} style={style} />
        </View>
        <Text style={styles.textStyle} marginHorizontal={marginHorizontal}>
          {text}
        </Text>
      </View>
      <TouchableOpacity>
        <Image source={icon} style={{width: 8, height: 15}} />
      </TouchableOpacity>
    </View>
  );
};

export default SettingComponent;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
    alignItems: 'center',
  },
  ViewContainer: {flexDirection: 'row', alignItems: 'center'},

  ViewStyle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#677294',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Rubik',
  },
});
