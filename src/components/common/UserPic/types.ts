import {
  ImageSourcePropType,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  ImageStyle
} from 'react-native';

export interface UserPicProps {
  source: ImageSourcePropType;
  size?: 'large' | 'medium';
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface UserPicStyles {
  large: ImageStyle;
  medium: ImageStyle;
}
