import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
  keyboardAvoidingView: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
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
