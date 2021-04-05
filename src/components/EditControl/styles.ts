import { StyleSheet, ViewStyle } from 'react-native';
import { colors, fonts } from '../../../src/utils/constants';

interface Styles {
  textField: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  textField: {
    width: '100%',
    // height: 50,
    textAlignVertical: 'center',
    borderRadius: 12,
    color: colors.COLOR_FOREGROUND,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 15,
    backgroundColor: colors.COLOR_DARK,
    fontFamily: fonts.POPPINS.regular
  }
});
