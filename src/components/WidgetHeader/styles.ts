import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../src/utils/constants';
import { WidgetHeaderStyles } from './types';

export const styles = StyleSheet.create<WidgetHeaderStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 10,
    fontFamily: fonts.POPPINS.regular,
    color: colors.COLOR_FOREGROUND,
    paddingBottom: 2
  },
  userName: {
    fontSize: 12,
    fontFamily: fonts.POPPINS.semibold,
    color: colors.COLOR_FOREGROUND
  }
});
