import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { fonts } from '../../../src/utils/constants';
import { raundViewStyle } from '../../styles';

interface Styles {
  container: ViewStyle;
  touchableContainer: ViewStyle;
  button: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
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
