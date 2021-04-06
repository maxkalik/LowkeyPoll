import { ImageSourcePropType } from 'react-native';
export interface PollItemProps {
  text: string;
  onPress: () => void;
}

export interface PollWidgetContentProps {
  title: string;
  opPressPollItem: (value: string) => void;
  items: PollItemProps[];
}

export interface PollWidgetProps extends PollWidgetContentProps {
  headerUsername: string;
  userpicSource: ImageSourcePropType;
  voteCounter: number;
}
