import { GestureResponderEvent } from 'react-native';

export interface OptionProps {
  title: string;
  onClosePress: (event: GestureResponderEvent) => void;
  onChangeText: (text: string) => void;
}
