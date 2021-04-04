import { StyleProp, GestureResponderEvent, TextStyle } from 'react-native';
// import { colors } from '../../../utils/constants';

export interface TouchableTextProps {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
  title: string;
  weight?: 'regular' | 'medium' | 'semiBold';
  // foregroundColor?: string | 'white';
}