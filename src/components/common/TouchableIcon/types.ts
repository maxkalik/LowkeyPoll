import { StyleProp, GestureResponderEvent, ViewStyle } from 'react-native';

export interface TouchableIconProps {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  name: string;
  foregroundColor?: string | 'white';
}
