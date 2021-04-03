import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.COLOR_BACKGROUND,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
