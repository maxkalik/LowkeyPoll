import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.COLOR_BACKGROUND,
    marginTop: 47,
    // borderWidth: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  title: { fontSize: 30 }
});
