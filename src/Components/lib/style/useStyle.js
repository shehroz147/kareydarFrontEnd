import {StyleSheet, Platform} from 'react-native';
import {fontPixel, heightPixel} from './adjust';

export function useStyles() {
  return StyleSheet.create({
    rubik: {
      fontFamily: Platform.OS === 'ios' ? 'Rubik' : 'Rubik-VariableFont_wght',
    },
    playfair: {
      fontFamily:
        Platform.OS === 'ios'
          ? 'Playfair Display'
          : 'PlayfairDisplay-VariableFont_wght',
    },
    input: {
      backgroundColor: '#EEEEEE',
      width: '100%',
      height: heightPixel(65),
      marginTop: heightPixel(16),
      paddingLeft: 15,
      color: '#222222',
      fontFamily: Platform.OS === 'ios' ? 'Rubik' : 'Rubik-VariableFont_wght',
      fontSize: fontPixel(14),
      fontWeight: '500',
      letterSpacing: 1,
    },
  });
}
