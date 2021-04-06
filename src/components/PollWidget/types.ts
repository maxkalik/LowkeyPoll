import { ImageSourcePropType } from 'react-native';
export interface PollItemProps {
  text: string;
  onPress: () => void;
}

export interface PollWidgetContentProps {
  title: string;
  items: PollItemProps[];
}

export interface PollWidgetComponentProps extends PollWidgetContentProps {
  opPressPollItem: (value: string) => void;
}

export interface PollWidgetProps extends PollWidgetContentProps {
  headerUsername: string;
  userpicSource: ImageSourcePropType;
  voteCounter: number;
}
