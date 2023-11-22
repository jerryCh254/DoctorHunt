import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
const ImagePickers = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedImageTitles, setSelectedImageTitles] = useState([]);
  const handleImagePress = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 100,
      maxWidth: 100,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        let imageName = response.fileName || 'My Self';

        let title;
        if (selectedImage.length === 1) {
          title = 'My Child';
        } else if (selectedImage.length === 2) {
          title = 'Parents';
        } else {
          title = imageName;
        }

        setSelectedImage([
          ...selectedImage,
          {uri: imageUri, name: imageName},
        ]);
        setSelectedImageTitles([...selectedImageTitles, title]);
      }
    });
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={handleImagePress}
        style={{
          height: 125,
          width: 100,
          backgroundColor: '#0EBE7F33',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../Assets/+.png')}
          style={{height: 28, width: 28}}
        />
        <Text
          style={{
            color: '#0EBE7F',
            fontSize: 18,
            fontWeight: '500',
            marginVertical: 10,
          }}>
          Add
        </Text>
      </TouchableOpacity>

      <ScrollView horizontal>
        {selectedImage.map((image, index) => (
          <View
            key={index}
            style={{
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: image.uri}}
              style={{width: 100, height: 125, borderRadius: 10}}
            />
            <Text style={{marginTop: 5, color: '#677294'}}>
              {selectedImageTitles[index]}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ImagePickers;

const styles = StyleSheet.create({});
