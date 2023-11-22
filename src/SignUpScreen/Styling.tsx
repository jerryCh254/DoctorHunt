import {
    StyleSheet
}

from 'react-native';
const styles = StyleSheet.create({
  Text: {color: '#0EBE7F', fontSize: 14, fontWeight: '400', lineHeight: 18},
  ImageContainer: {
    width: '100%',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
  },
  Text1: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 28,
  },
  Text2: {
    color: '#677294',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 23,
    marginVertical: 10,
    marginHorizontal: 30,
  },
  View2: {
    flexDirection: 'row',
    marginVertical: 20,
    marginBottom: 50,
  },
  Text3: {
    color: 'red',
    marginHorizontal: 5,
    fontSize: 12,
    fontWeight: '400',
  },
  View3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    marginBottom: 60,
  },
  Touchable: {
    width: 16,
    height: 16,
    borderRadius: 10,
    
  },
  View4: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  Text4: {
    color: '#0EBE7F',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
});
export default styles;