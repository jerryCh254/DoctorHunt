import { StyleSheet, Text, View ,Image,} from 'react-native'
import React from 'react'

const DataComponent = ({source, text, icon, imageStyle, imageStyle2}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <Image source={source} style={imageStyle2} />
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          fontWeight: '500',
          marginHorizontal: 20,
        }}>
        {text}
      </Text>

      <Image source={icon} style={imageStyle} />
    </View>
  );
};

export default DataComponent

const styles = StyleSheet.create({})