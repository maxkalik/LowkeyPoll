import { TextStyle, ViewStyle } from 'react-native';

export interface CircleLabelProps {
  value: string;
  title: string;
}

export interface CircleLabel {
  container: ViewStyle;
  value: TextStyle;
  description: TextStyle;
}
