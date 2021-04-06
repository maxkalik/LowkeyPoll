import { ImageSourcePropType, TextStyle, ViewStyle } from 'react-native';
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

export interface PollWidgetStyles {
  content: ViewStyle;
  pollTitle: TextStyle;
  pollItemContainer: ViewStyle;
  pollItemText: TextStyle;
}
