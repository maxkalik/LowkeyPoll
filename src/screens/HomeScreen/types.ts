import { ViewStyle } from 'react-native';
import { MainScreenNavigationProp } from '../MainStackScreen/types';

export type HomeScreenProps = {
  navigation: MainScreenNavigationProp;
};

export interface HomeScreenStyles {
  container: ViewStyle;
  keyboardAvoidingView: ViewStyle;
}
