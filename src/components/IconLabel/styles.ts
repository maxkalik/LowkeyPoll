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
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {},
  title: {
    // height: 35,
    flex: 1,
    // marginHorizontal: 15,
    // backgroundColor: colors.COLOR_DIM,
    // borderRadius: 10,
    fontSize: 14,
    fontFamily: fonts.POPPINS.medium,
    color: colors.COLOR_FOREGROUND,
    justifyContent: 'center',
    paddingHorizontal: 15
  }
});
