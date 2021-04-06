import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, fonts } from '../../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
  active: TextStyle;
  regular: TextStyle;
  medium: TextStyle;
  semiBold: TextStyle;
  disabled: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {},
  regular: {
    fontFamily: fonts.POPPINS.regular
  },
  medium: {
    fontFamily: fonts.POPPINS.medium
  },
  semiBold: {
    fontFamily: fonts.POPPINS.semibold
  },
  active: {
    color: colors.COLOR_BLUE
  },
  disabled: {
    color: colors.COLOR_SECONDARY
  }
});
