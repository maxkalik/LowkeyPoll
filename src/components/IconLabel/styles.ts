import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../src/utils/constants';
import { IconLabelStyles } from './types';

export const styles = StyleSheet.create<IconLabelStyles>({
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
