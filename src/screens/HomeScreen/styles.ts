import { StyleSheet } from 'react-native';
import { colors } from '../../../src/utils/constants';
import { HomeScreenStyles } from './types';

export const styles = StyleSheet.create<HomeScreenStyles>({
  container: {
    backgroundColor: colors.COLOR_BACKGROUND,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  keyboardAvoidingView: {
    paddingTop: 40,
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end'
  }
});
