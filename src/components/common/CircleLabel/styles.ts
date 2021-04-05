import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors, fonts } from '../../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
  value: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.COLOR_PURPLE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  value: {
    fontSize: 16,
    fontFamily: fonts.POPPINS.semibold,
    color: colors.COLOR_FOREGROUND,
    height: 16,
    lineHeight: 18
  },
  description: {
    fontSize: 10,
    fontFamily: fonts.POPPINS.regular,
    color: colors.COLOR_FOREGROUND,
    height: 11,
    lineHeight: 12
  }
});
