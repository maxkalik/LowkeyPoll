import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, fonts } from '../../utils/constants';

interface Styles {
  container: ViewStyle;
  username: TextStyle;
  text: TextStyle;
  textContainer: ViewStyle;
  userLink: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingVertical: 4
  },
  textContainer: { flex: 1, paddingLeft: 14, paddingTop: 3 },
  username: {
    color: colors.COLOR_SECONDARY,
    fontSize: 12,
    fontFamily: fonts.POPPINS.semibold,
    paddingBottom: 2
  },
  text: {
    color: colors.COLOR_FOREGROUND,
    fontSize: 15,
    lineHeight: 22,
    fontFamily: fonts.POPPINS.regular,
    flexWrap: 'wrap',
    width: '100%'
  },
  userLink: {
    fontSize: 15,
    lineHeight: 15,
    marginBottom: -3,
    fontFamily: fonts.POPPINS.semibold
  }
});
