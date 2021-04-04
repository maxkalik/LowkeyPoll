import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../utils/constants';

interface Styles {
  headerStyle: ViewStyle;
  headerRightContainerStyle: ViewStyle;
  headerLeftContainerStyle: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  headerStyle: {
    backgroundColor: colors.COLOR_DARK,
    shadowRadius: 0,
    shadowColor: 'transparent'
  },
  headerRightContainerStyle: { padding: 15 },
  headerLeftContainerStyle: { padding: 15 }
});
