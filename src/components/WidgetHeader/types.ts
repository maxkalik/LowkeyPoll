import { ImageSourcePropType, TextStyle, ViewStyle } from 'react-native';

export interface WidgetHeaderDescriptionProps {
  title: string;
  username: string;
}

export interface WidgetHeaderProps extends WidgetHeaderDescriptionProps {
  circleLabelValue?: string;
  circleLabelTitle?: string;
  userpicSource: ImageSourcePropType;
}

export interface WidgetHeaderStyles {
  container: ViewStyle;
  descriptionContainer: ViewStyle;
  title: TextStyle;
  userName: TextStyle;
}
