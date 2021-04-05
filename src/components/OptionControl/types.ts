import { GestureResponderEvent } from 'react-native';

export interface OptionControlProps {
  labelLeftTitle: string;
  labelRightTitle?: string;
  onButtonPress: (event: GestureResponderEvent) => void;
}
