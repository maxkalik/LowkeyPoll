import {
  ImageSourcePropType,
  GestureResponderEvent,
  StyleProp,
  ViewStyle
} from 'react-native';

export interface UserPicProps {
  source: ImageSourcePropType;
  size?: 'large' | 'medium';
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}
