import { ViewStyle, TextStyle } from 'react-native';
import { MainScreenNavigationProp } from '../../screens/MainStackScreen/types';

export type ChatBarType = {
  navigation: MainScreenNavigationProp;
  onPressSend: (text: string) => void;
};
export interface ChatBarStyles {
  container: ViewStyle;
  textInput: ViewStyle;
  sendButton: TextStyle;
}
