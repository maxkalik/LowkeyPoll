import { ViewStyle, TextStyle } from 'react-native';

export interface LabelProps {
  leftText: string;
  rightText?: string;
}

export interface LabelStyles {
  container: ViewStyle;
  left: TextStyle;
  right: TextStyle;
}
