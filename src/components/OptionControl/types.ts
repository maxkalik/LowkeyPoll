import { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';

export interface OptionControlProps {
  labelLeftTitle: string;
  labelRightTitle?: string;
  onButtonPress: (event: GestureResponderEvent) => void;
  items: string[] | [];
  onCloseOption: (i: number) => void;
  onChangeOptionText: (value: string, i: number) => void;
}

export interface OptionControlStyles {
  container: ViewStyle;
  touchableContainer: ViewStyle;
  button: TextStyle;
}
