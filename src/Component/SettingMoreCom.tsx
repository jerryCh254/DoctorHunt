import { StyleSheet, Switch, Text, View ,Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'


const SettingMoreCom = ({text,dis,source}) => {
    const [isEnable,setIsEnable]=useState(false);
    const toggleSwitch=()=>setIsEnable(previousState=>!previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}>{text}</Text>
      {dis && source ? (
        <TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.TextStyle2}>{dis}</Text>

            <Image source={source} style={{width: 7, height: 12}} />
          </View>
        </TouchableOpacity>
      ) : (
        <Switch
          trackColor={{false: '#767577', true: '#0EBE7F'}}
          thumbColor={'#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnable}
        />
      )}
    </View>
  );
}

export default SettingMoreCom

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextStyle: {
    color: '#677294',
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Rubik',
  },
  TextStyle2: {
    color: '#677294',
    fontSize: 12,
    fontWeight: '300',
    marginHorizontal: 5,
    fontFamily: 'Rubik',
  },
});