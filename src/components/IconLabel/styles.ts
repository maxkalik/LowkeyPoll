import { StyleSheet, ViewStyle } from 'react-native';
import { colors, fonts } from '../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
  icon: ViewStyle;
  title: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {},
  title: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.POPPINS.medium,
    color: colors.COLOR_FOREGROUND,
    justifyContent: 'center',
    paddingHorizontal: 15
  }
});
