import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  titleColor,
} from 'react-native';
import React from 'react';

const AppButton = ({
  onPress,
  title,
  style,
  titleColor,
  titleSize,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.ButtonStyle, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[styles.TextStyle, {color: titleColor, fontSize: titleSize}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  ButtonStyle: {
    width: 295,
    height: 54,
    justifyContent:'center',
    borderRadius: 10,
    // backgroundColor: '#0EBE7F',
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: '500',
   
    textAlign: 'center',
    color:'#FFFFFF',

  },
});
