import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constants';
import { HeadersStyles } from './types';

export const styles = StyleSheet.create<HeadersStyles>({
  headerStyle: {
    backgroundColor: colors.COLOR_DARK,
    shadowRadius: 0,
    shadowColor: 'transparent'
  },
  headerRightContainerStyle: { padding: 20 },
  headerLeftContainerStyle: { padding: 20 }
});
