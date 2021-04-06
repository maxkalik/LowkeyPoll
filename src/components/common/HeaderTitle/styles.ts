import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../utils/constants';
import { ChatHeaderTitleStyles } from './types';


export const styles = StyleSheet.create<ChatHeaderTitleStyles>({
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
