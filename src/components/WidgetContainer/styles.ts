import { StyleSheet, ViewStyle } from 'react-native';
import { gradients } from '../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
  gradient: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: 25,
    marginTop: 10
  },
  gradient: {
    flex: 1,
    width: '100%',
    borderRadius: 25,
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 20
  }
});

export const gradientColors = gradients.GRADIENT_WIDGET;
