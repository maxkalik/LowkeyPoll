import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../src/utils/constants';
import { ChatBarStyles } from './types';

export const styles = StyleSheet.create<ChatBarStyles>({
  container: {
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
  },
  sendButton: {
    fontFamily: fonts.POPPINS.medium,
    position: 'absolute',
    bottom: -10,
    right: 30
  }
});
