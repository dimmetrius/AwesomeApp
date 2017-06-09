import React from 'react';
import {View, Text, Image, StyleSheet, Platform, Dimensions} from 'react-native';
import utils from './../utils';

import InputField from './common/InputField';
import Logo from './common/Logo';
import Button from './common/Button';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const fullWidth = () => Dimensions.get('window').width;
const elementsMargin = 40;

export default class AdressScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      screenWidth: fullWidth()
    }
  }

  componentDidMount(){
    //ToDo подписаться на событие смены ориентации и менять state
  }



  render() {
    const { navigate } = this.props.navigation;
    const {screenWidth} = this.state;
    const elementsWidth = screenWidth - elementsMargin
    const screenWidthStyle = {width: screenWidth}
    const elementWidthStyle = {width:elementsWidth}
    const inputStyle = [styles.input, elementWidthStyle]

    //Todo при onStartShouldSetResponder у кнопки Next автоматом делать blur у всех полей ввода! Клавиатура
    return (

      <View style={styles.container}
            onLayout={(e)=>{this.setState({screenWidth: fullWidth()})}}
      >
        <KeyboardAwareScrollView>
          <View style={[styles.container, {marginBottom:40, marginTop:40}, screenWidthStyle]}>
        <Image source={Logo} resizeMode={'contain'} style={elementWidthStyle}/>

        <Text textAlign="center" style={[styles.text, elementWidthStyle]}>Whats your adress?</Text>

        <View>
          <InputField placeholder="First Line" style={inputStyle}/>
          <InputField placeholder="Second Line" style={inputStyle}/>
          <InputField placeholder="Town/City" style={inputStyle}/>
          <InputField placeholder="PostCode" style={inputStyle}/>
        </View>
            <Button onPress={() => navigate('Options')}
                    style={[styles.loginButton, elementWidthStyle]}
                    text="Next"
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column'
  },
  text:{
    fontSize: 18,
    marginTop: 40,
    marginBottom: 40,
    textAlign: "center"
  },
  input: {
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#cccccc',
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
    fontSize: utils.font(18),
  },
  loginButton: {
    height: 50,
    backgroundColor: '#2E67FB',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    flexDirection: 'row',
  }
});