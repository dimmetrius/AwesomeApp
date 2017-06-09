import {Platform, PixelRatio} from 'react-native';
export default utils = {
  font: function(sp) {
    try {
      return Platform.OS === 'ios' ? sp : Math.floor(sp * (PixelRatio.getFontScale()));
    } catch (e) {
      return sp;
    }
  }
}
