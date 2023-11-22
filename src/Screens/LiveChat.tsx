import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LiveChatComponent from '../Component/LiveChatComponent';
import AppTextInput from '../Component/AppTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home_Screen from './HomeScreen';

const LiveChat = ({navigation, leftIcon}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <ImageBackground
      source={require('../Assets/livechatbg.png')}
      style={styles.ImageStyle}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home_Screen')}
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../Assets/back.png')}
            style={{width: 8, height: 12}}
          />
        </TouchableOpacity>
        <Image
          source={require('../Assets/nav.png')}
          style={{width: 36, height: 36}}
        />
      </View>
      <View style={styles.ViewStyle}>
        
          <LiveChatComponent />
     
      </View>
      <KeyboardAvoidingView behavior="height">
        <View style={styles.TextInputStyle}>
          <View
            style={{
              width: 44,
              height: 44,
              backgroundColor: '#0EBE7E',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              marginHorizontal: 10,
            }}>
            <Image
              source={require('../Assets/comment.png')}
              style={{width: 16, height: 16}}
            />
          </View>

          <TextInput
            style={styles.TextInput}
            placeholder="Add a Comment..."
            placeholderTextColor="black"
            onFocus={() => setIsFocused(true)}
          />

          <Image
            source={require('../Assets/emoji.png')}
            style={{
              width: 13,
              height: 13,
              marginRight: 10,
              padding: 8,
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LiveChat;

const styles = StyleSheet.create({
  ImageStyle: {
    height: '100%',
    width: '100',
    resizeMode: 'cover',
    objectFit: 'cover',
  },
  ViewStyle: {
    flex: 1,

    justifyContent: 'flex-end',
    // resizeMode: 'cover',
  },
  TextInputStyle: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 27,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInput: {
    fontSize: 14,
    fontWeight: '300',
    flex: 1,
    color: 'black',
  },
  container1: {
    flex: 1,
  },
  
});
