import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  Container: {width: '100%', height: '100%'},
  TextButton: {
    color: '#0EBE7F',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  TextButtonView: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    marginTop: '50%',
    justifyContent: 'center',
  },
  ModelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  ModelStyle: {
    width: '100%',
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
  },
  ModelView: {
    marginVertical: 20,
    flex: 1,
    marginHorizontal: 20,
  },
  ModelViewText: {
    color: '#000000',
    marginVertical: 10,
    fontSize: 24,
    fontWeight: '500',
  },
  ModelViewText2: {
    color: '#677294',
    fontSize: 14,
    fontWeight: '400',
    marginRight: 30,
  },
  OpenView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  OpenViewText: {color: '#0EBE7F', justifyContent: 'center'},
  ErrorStyle: {
    color: 'red',
    marginHorizontal: 5,
    fontSize: 12,
    fontWeight: '400',
  },
  FormikView: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  TabStyle: {
    flexDirection: 'row',
    marginVertical: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  TextDis: {
    color: '#677294',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 23,
    marginVertical: 10,
    marginHorizontal: 30,
    marginBottom: 30,
  },
  TextTitle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 28,
  },
});
export default styles
