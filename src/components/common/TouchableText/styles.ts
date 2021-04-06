import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../../src/utils/constants';
import { TouchableTextStyles } from './types';

export const styles = StyleSheet.create<TouchableTextStyles>({
  container: {},
  regular: {
    fontFamily: fonts.POPPINS.regular
  },
  medium: {
    fontFamily: fonts.POPPINS.medium
  },
  semiBold: {
    fontFamily: fonts.POPPINS.semibold
  },
  active: {
    color: colors.COLOR_BLUE
  },
  disabled: {
    color: colors.COLOR_SECONDARY
  }
});
