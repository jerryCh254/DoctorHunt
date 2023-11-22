import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  return (
    <View style={styles.container}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setRating(item)}>
            <Image
              style={styles.ImageStyle}
              source={
                item <= rating ? {uri: starImgFilled} : {uri: starImgCorner}
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
  },
  ImageStyle: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
  },
});
