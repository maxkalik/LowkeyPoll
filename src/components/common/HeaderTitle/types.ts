import { TextStyle, ViewStyle } from 'react-native';

export interface ChatHeaderTitleProps {
  title: string;
  subTitle?: string;
}

export interface ChatHeaderTitleStyles {
  container: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
}
