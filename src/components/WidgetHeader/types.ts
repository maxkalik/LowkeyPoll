import { ImageSourcePropType } from 'react-native';

export interface WidgetHeaderDescriptionProps {
  title: string;
  username: string;
}

export interface WidgetHeaderProps extends WidgetHeaderDescriptionProps {
  circleLabelValue?: string;
  circleLabelTitle?: string;
  userpicSource: ImageSourcePropType;
}
