import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../utils/constants';

interface Styles {
  headerStyle: ViewStyle;
  headerRight: TextStyle;
  headerRightContainerStyle: ViewStyle;
  headerLeftContainerStyle: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  headerStyle: {
    backgroundColor: colors.COLOR_DARK,
    shadowRadius: 0,
    shadowColor: 'transparent'
  },
  headerRightContainerStyle: { paddingRight: 20 },
  headerLeftContainerStyle: { paddingLeft: 20 },
  headerRight: { fontSize: 14 }
});
