import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  tabBarStyles: {
    width: 380,
    height: 74,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  TabView: {
    width: 48,
    height: 48,
    borderRadius: 25,
  },
  TabImage: {
    height: 20,
    width: 20,
    top: 14,
    left: 14,
  },
  TabView2: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  TabImage2: {
    height: 18,
    width: 21,
  },
  TabImage3: {height: 26, width: 26},
});
export default styles