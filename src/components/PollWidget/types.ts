import { ImageSourcePropType } from 'react-native';
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
  voteCounter: number;
}
