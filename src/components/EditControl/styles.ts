import { StyleSheet, ViewStyle } from 'react-native';
import { colors, fonts } from '../../../src/utils/constants';
import { raundViewStyle } from '../../styles';

interface Styles {
  textField: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  textField: {
    ...raundViewStyle,
    width: '100%',
    color: colors.COLOR_FOREGROUND,
    fontSize: 15,
    fontFamily: fonts.POPPINS.regular
  }
});
