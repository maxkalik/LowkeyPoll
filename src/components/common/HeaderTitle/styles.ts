import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors, fonts } from '../../../utils/constants';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.POPPINS.semibold,
    color: colors.COLOR_FOREGROUND,
    paddingBottom: 2
  },
  subTitle: {
    textAlign: 'center',
    color: colors.COLOR_SECONDARY,
    fontSize: 12,
    fontFamily: fonts.POPPINS.regular,
    paddingBottom: 6
  }
});
