import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../src/utils/constants';
import { PollWidgetStyles } from './types';

export const styles = StyleSheet.create<PollWidgetStyles>({
  content: {
    paddingTop: 12
  },
  pollTitle: {
    color: colors.COLOR_FOREGROUND,
    fontSize: 15,
    fontFamily: fonts.POPPINS.medium,
    paddingBottom: 4
  },
  pollItemContainer: {
    borderRadius: 15,
    backgroundColor: colors.COLOR_BLUE + 20,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    marginTop: 8
  },
  pollItemText: {
    color: colors.COLOR_FOREGROUND,
    fontSize: 12,
    fontFamily: fonts.POPPINS.regular
  }
});
