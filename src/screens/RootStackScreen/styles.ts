import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../utils/constants';
import { RootStackHeadersStyles } from './types';

export const styles = StyleSheet.create<RootStackHeadersStyles>({
  headerStyle: {
    backgroundColor: colors.COLOR_DARK,
    shadowRadius: 0,
    shadowColor: 'transparent'
  },
  headerRightContainerStyle: { paddingRight: 20 },
  headerLeftContainerStyle: { paddingLeft: 20 },
  headerRight: { fontSize: 14 }
});

export const headerStatusBarHeight = 53;
export const cardStyle: ViewStyle = { backgroundColor: 'transparent' }