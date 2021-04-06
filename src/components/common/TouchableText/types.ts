import {
  StyleProp,
  GestureResponderEvent,
  ViewStyle,
  TextStyle
} from 'react-native';

export interface TouchableTextProps {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
  title: string;
  weight?: 'regular' | 'medium' | 'semiBold';
  isDisable?: boolean;
}

export interface TouchableTextStyles {
  container: ViewStyle;
  active: TextStyle;
  regular: TextStyle;
  medium: TextStyle;
  semiBold: TextStyle;
  disabled: TextStyle;
}
