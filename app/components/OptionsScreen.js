import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet, Platform, Dimensions} from 'react-native';
import utils from './../utils';

import Logo from './common/Logo';
import Button from './common/Button';
import Option from './common/Option';

import { NavigationActions } from 'react-navigation'

const fullWidth = () => Dimensions.get('window').width;
const elementsMargin = 40;

export default class AdressScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      screenWidth: fullWidth(),
      data : [
        {marked:false, text:'Nusery'},
        {marked:false, text:'Reception'},
        {marked:false, text:'Year 1'},
        {marked:false, text:'Year 2'},
        {marked:true,  text:'Year 3'},
        {marked:true,  text:'Year 4'},
        {marked:true,  text:'Year 5'},
        {marked:true,  text:'Year 6'},
        {marked:false, text:'Year 7'},
        {marked:false, text:'Year 8'},

        {marked:false, text:'Year 9'},
        {marked:false, text:'Year 10'},
        {marked:false, text:'Year 11'},
        {marked:false, text:'Year 12'},
        {marked:false, text:'Year 13'},

      ]
    }
  }

  componentDidMount(){
    //ToDo подписаться на событие смены ориентации и менять state
  }



  render() {
    const { dispatch, navigate } = this.props.navigation;
    const {screenWidth, data} = this.state;
    const elementsWidth = screenWidth - elementsMargin
    const screenWidthStyle = {width: screenWidth}
    const elementWidthStyle = {width:elementsWidth}

    return (

      <View style={styles.container}
            onLayout={(e)=>{this.setState({screenWidth: fullWidth()})}}
      >
          <View style={[styles.container, {marginBottom:40, marginTop:40}, screenWidthStyle]}>
            <Image source={Logo} resizeMode={'contain'} style={elementWidthStyle}/>

            <Text textAlign="center" style={[styles.text, elementWidthStyle]}>
              What's year groups are you comfortable teaching?
            </Text>

            <ScrollView horizontal={true}>
            <View style={{flex:1, flexWrap: 'wrap', flexDirection: 'column'}}>

              {data.map((item, i) => <Option marked={item.marked} text={item.text} width={elementsWidth/2} key={i} />)}

            </View>
            </ScrollView>

            <Button onPress={() => dispatch(NavigationActions.back())}
                    style={[styles.loginButton, elementWidthStyle]}
                    text="Next"
            />
          </View>
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
    borderWidth: Platform.OS === 'ios'? 1 : 0,
    borderRadius: Platform.OS === 'ios'? 6 : 0,
    borderColor: Platform.OS === 'ios' ? '#cccccc':'transparent',
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