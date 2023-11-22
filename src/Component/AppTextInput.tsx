import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppTextInput = ({
  onPress,
  placeholder,
  placeholderTextColor,
  marginHorizontal,
  iconName,
  iconSize,
  leftIcon,
  value,
  onChangeText,
  borderRadius,
}) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={iconSize} color="#677294" padding={10} />
      <TextInput
        style={styles.TextStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}></TextInput>
      {leftIcon && (
        <TouchableOpacity
          onPress={onPress}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
          <Image
            source={leftIcon}
            style={{
              width: 15,
              height: 13,
              marginRight: 10,
              tintColor: '#677294',
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  TextStyle: {
    flex: 1,
    color: 'black',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#00000014',
    borderWidth: 1,
    margin: 20,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
});
