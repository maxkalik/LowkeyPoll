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
  keyboardAvoidingView: { width: '100%' }
});
