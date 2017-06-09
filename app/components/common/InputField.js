import {TextInput} from 'react-native';
import React from 'react';

export default InputField = ({placeholder, style}) => {
  return <TextInput style={style}
                    placeholderTextColor={'#cccccc'}
                    underlineColorAndroid={"transparent"}
                    placeholder={placeholder}
                    returnKeyType="next"
                    enablesReturnKeyAutomatically={true}
                    disableFullscreenUI={true}

  />
}