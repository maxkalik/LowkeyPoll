import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../src/utils/constants';
import { raundViewStyle } from '../../styles';
import { EditControlStyles } from './types';

export const styles = StyleSheet.create<EditControlStyles>({
  textField: {
    ...raundViewStyle,
    width: '100%',
    color: colors.COLOR_FOREGROUND,
    fontSize: 15,
    fontFamily: fonts.POPPINS.regular
  }
});
