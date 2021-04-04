import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, fonts } from '../../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
  text: TextStyle;
  regular: TextStyle;
  medium: TextStyle;
  semiBold: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    // paddingVertical: 4
    // borderWidth: 1,
    // borderColor: 'white'
  },
  text: {
    color: colors.COLOR_BLUE
  },
  regular: {
    fontFamily: fonts.POPPINS.regular
  },
  medium: {
    fontFamily: fonts.POPPINS.medium
  },
  semiBold: {
    fontFamily: fonts.POPPINS.semibold
  }
});
