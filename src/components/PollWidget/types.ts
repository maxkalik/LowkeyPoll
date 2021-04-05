import { ImageSourcePropType } from 'react-native';
import { CircleLabelProps } from '../common/CircleLabel/types';
export interface PollItemProps {
  text: string;
}

export interface PollWidgetContentProps {
  title: string;
  items: PollItemProps[];
}

export interface PollWidgetProps extends PollWidgetContentProps {
  headerUsername: string;
  userpicSource: ImageSourcePropType;
  circleLabel?: CircleLabelProps;
}
