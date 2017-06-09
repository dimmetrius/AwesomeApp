import React from 'react';
import {View, Text} from 'react-native';
import utils from './../../utils';

const defColor = '#D8D8D8';
const narkedColor = '#80D135';
export default Button = ({marked, text, width}) => {
  return (
    <View style={{
              width:width,
              height:30,
              margin:5,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              }}>
      <View style={{left:0, width:30, height:30, backgroundColor: marked ? narkedColor: defColor, borderRadius: 5, marginRight: 5}}/>
      <Text>{text}</Text>
    </View>
  )
}