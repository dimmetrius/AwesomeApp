'use strict';

import {AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AdressScreen from './components/AgressScreen';
import OptionsScreen from './components/OptionsScreen';

const AwesomeApp = StackNavigator({
  Adress: {screen: AdressScreen},
  Options: {screen: OptionsScreen},
}, {
  headerMode: 'none'
});

AppRegistry.registerComponent('AwesomeApp', () => AwesomeApp);
