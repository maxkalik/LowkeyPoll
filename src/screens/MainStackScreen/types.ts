import { StackNavigationProp } from '@react-navigation/stack';
import { RootScreenNavigationProp } from '../RootStackScreen/types';

type ModalScreenProps = {
  navigation: RootScreenNavigationProp;
};

export type MainStackParamList = {
  Home: undefined;
  Poll: undefined;
  Modal: undefined;
};

export interface MainStackScreenProps {
  home: React.FC<ModalScreenProps>;
  poll: () => JSX.Element;
}

export type MainScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Home'
>;
