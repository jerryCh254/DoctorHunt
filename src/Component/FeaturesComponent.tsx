import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const FeaturesComponent = ({
  imageSource,
  text,
  text1,
  TextColor,
  iconName,
  iconSize,
  leftIcon,
  justifyContent,
  iconName1,
  iconSize1,
  price,
  iconColor,
  iconBorderColor,
  focused,
}) => {
  return (
    <View>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
          }}>
          <Icon
            name={iconName}
            iconSize={iconSize}
            color={iconColor}
            marginHorizontal={15}
            iconBorderColor={iconBorderColor}
          />
          {leftIcon && (
            <Image
              source={leftIcon}
              style={{width: 13, height: 13, left: 20}}
            />
          )}
          <Text style={{color: '#000000', left: 26, fontWeight: '800'}}>
            {text1}
          </Text>
        </View>
        <View style={{alignItems: 'center', marginVertical: 5}}>
          <Image source={imageSource} style={styles.ImageStyle} />
          <Text
            style={{color: '#000000', fontWeight: '600', marginVertical: 5}}>
            {text}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon name={iconName1} iconSize={iconSize1} color="#0EBE7EA5" />
          <Text style={{color: '#677294', fontSize: 9, marginHorizontal: 5}}>
            {price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FeaturesComponent

const styles = StyleSheet.create({
    ImageStyle:{
        width:54,
        height:54,
        
    }
})