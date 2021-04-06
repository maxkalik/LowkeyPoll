import { StyleSheet } from 'react-native';
import { gradients } from '../../../src/utils/constants';
import { WidgetContainerStyles } from './types';

export const styles = StyleSheet.create<WidgetContainerStyles>({
  container: {
    borderRadius: 25,
    marginVertical: 8
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

export const gradientCoordinates = {
  start: { x: 0.0, y: 0.0 },
  end: { x: 0.5, y: 1.0 }
};

export const gradientColors = gradients.GRADIENT_WIDGET;
