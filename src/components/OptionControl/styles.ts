import { StyleSheet } from 'react-native';
import { fonts } from '../../../src/utils/constants';
import { raundViewStyle } from '../../styles';
import { OptionControlStyles } from './types';

export const styles = StyleSheet.create<OptionControlStyles>({
  container: {
    marginTop: 25
  },
  touchableContainer: raundViewStyle,
  button: {
    width: '100%',
    textAlignVertical: 'center',
    fontSize: 15,
    fontFamily: fonts.POPPINS.regular
  }
});
