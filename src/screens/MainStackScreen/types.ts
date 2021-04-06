import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  RootScreenNavigationProp,
  RootStackParamList
} from '../RootStackScreen/types';

type ModalScreenProps = {
  navigation: RootScreenNavigationProp;
  route: MainScreenRouteProp;
};

export type MainStackParamList = {
  Home: undefined;
  Modal: undefined;
};

export type MainScreenRouteProp = RouteProp<RootStackParamList, 'Modal'>;
export interface MainStackScreenProps {
  home: React.FC<ModalScreenProps>;
}

export type MainScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Home'
>;
