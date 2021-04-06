import { ImageSourcePropType, ViewStyle, TextStyle } from 'react-native';

export interface MessageProps {
  userpicSource: ImageSourcePropType;
  username: string;
  text: string;
}

export interface MessageStyles {
  container: ViewStyle;
  username: TextStyle;
  text: TextStyle;
  textContainer: ViewStyle;
  userLink: ViewStyle;
}
