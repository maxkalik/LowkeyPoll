import { TextStyle, ViewStyle } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  MainStackParamList,
  MainStackScreenProps
} from '../MainStackScreen/types';
import { ModalScreenProps } from '../ModalScreen/types';

export type RootStackParamList = {
  Main: StackNavigationProp<MainStackParamList>;
  Modal: { question: string; options: string[] };
};

export type RootScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;

export interface RootStackScreenProps {
  mainStack: React.FC<MainStackScreenProps>;
  modal: React.FC<ModalScreenProps>;
}

export interface RootStackHeadersStyles {
  headerStyle: ViewStyle;
  headerRight: TextStyle;
  headerRightContainerStyle: ViewStyle;
  headerLeftContainerStyle: ViewStyle;
}
