import { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';

export interface OptionProps {
  title: string;
  onClosePress: (event: GestureResponderEvent) => void;
  onChangeText: (text: string) => void;
}

export interface OptionStyles {
  container: ViewStyle;
  title: TextStyle;
  touchableIconContainer: ViewStyle;
}
