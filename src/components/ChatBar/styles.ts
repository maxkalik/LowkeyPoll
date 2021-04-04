import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors, fonts } from '../../../src/utils/constants';

interface Styles {
  general: ViewStyle;
  hstack: ViewStyle;
  container: ViewStyle;
  textInput: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  general: { width: '100%' },
  container: {
    height: 80,
    backgroundColor: colors.COLOR_BACKGROUND
  },
  hstack: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 5,
    alignItems: 'center'
  },
  textInput: {
    height: 35,
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: colors.COLOR_DIM,
    borderRadius: 10,
    fontSize: 15,
    fontFamily: fonts.POPPINS.regular,
    color: colors.COLOR_FOREGROUND,
    paddingHorizontal: 15
  }
});
