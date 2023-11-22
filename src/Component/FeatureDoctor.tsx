import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import FeaturesComponent from './FeaturesComponent';

const FeatureDoctor = () => {
  return (
    <View style={{marginVertical: 10,marginHorizontal:3,}}>
      
      <ScrollView horizontal>
        
          <View style={styles.Container}>
            <FeaturesComponent
              iconBorderColor="#777EA5"
              iconColor="#777EA5"
              iconName="heart"
              leftIcon={require('../Assets/star.png')}
              text1="3.7"
              imageSource={require('../Assets/f2.png')}
              text="Dr. Crick"
              iconName1="dollar"
              price="25.00/ hours"
            />
          </View>
          <View style={styles.Container}>
            <FeaturesComponent
              iconName="heart"
              iconColor="#FF0000"
              leftIcon={require('../Assets/star.png')}
              text1="3.0"
              imageSource={require('../Assets/f3.png')}
              text="Dr. Strain"
              iconName1="dollar"
              price="22.00/ hours"
            />
          </View>
          <View style={styles.Container}>
            <FeaturesComponent
              iconName="heart"
              leftIcon={require('../Assets/star.png')}
              text1="2.9"
              imageSource={require('../Assets/f4.png')}
              text="Dr. Lachinet"
              iconName1="dollar"
              price="29.00/ hours"
            />
          </View>
          <View style={styles.Container}>
            <FeaturesComponent
              iconName="heart"
              leftIcon={require('../Assets/star.png')}
              text1="3.7"
              imageSource={require('../Assets/f2.png')}
              text="Dr. Crick"
              iconName1="dollar"
              price="25.00/ hours"
            />
          </View>
        
      </ScrollView>
      
    </View>
  );
};

export default FeatureDoctor;

const styles = StyleSheet.create({
  Container: {
    width: 110,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    elevation: 1,
    
  },
});
