import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const TextInpuT = ({
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  leftIcon,
  onPress,
  keyboardType,
  onChangeText,
  value,
  onBlur,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#00000014',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginVertical: 5,
      }}>
      <TextInput
        style={{flex: 1, color: 'black', marginHorizontal: 12}}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
      />
      {leftIcon && (
        <TouchableOpacity onPress={leftIcon}>
          <Icon
            name={secureTextEntry ? 'eye-slash' : 'eye'}
            size={16}
            padding={10}
            color="black"
            // value={value}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInpuT

const styles = StyleSheet.create({
    
})