import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import utils from './../../utils';

export default Button = ({onPress, style, text}) => {
  return (
      <TouchableHighlight onPress={onPress}
                                style={style}
                                underlayColor="#2E67FB"
      >
      <Text style={{fontSize: utils.font(18), color: '#ffffff'}}>
        {text}
      </Text>
    </TouchableHighlight>
  )
}