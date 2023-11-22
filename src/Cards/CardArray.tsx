import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const CardArray = () => {
  const data = [
    {
      id: 1,
      text: 'Today, 23 Feb',
      dis: 'No slots available',
    },
    {
      id: 2,
      text: 'Tomorrow, 24 Feb',
      dis: 'No slots available',
    },
    {
      id: 3,
      text: 'Today, 23 Feb',
      dis: 'No slots available',
    },
  ];
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = tabId => {
    setActiveTab(tabId);
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handelTabClick(item.id)}
        style={{
          height: 54,
          width: 125,
          borderRadius: 4,
         elevation:1,
         marginHorizontal:5,
          marginVertical: 15,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: activeTab === item.id ? '#0EBE7F' : 'white',
        }}>
        <Text style={{color: '#333333', fontSize: 13, fontWeight: '500'}}>
          {item.text}
        </Text>
        <Text style={{color: '#677294', fontSize: 9, fontWeight: '300'}}>
          {item.dis}
        </Text>
      </TouchableOpacity>
    );
  };
  return <FlatList horizontal data={data} renderItem={renderItem} />;
};

export default CardArray;

const styles = StyleSheet.create({});
