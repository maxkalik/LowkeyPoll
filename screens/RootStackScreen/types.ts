import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  MainStackParamList,
  MainStackScreenProps
} from '../MainStackScreen/types';
import { ModalScreenProps } from '../ModalScreen/types';

export type RootStackParamList = {
  Main: StackNavigationProp<MainStackParamList>;
  Modal: undefined;
};

export type RootScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;

export interface RootStackScreenProps {
  mainStack: React.FC<MainStackScreenProps>;
  modal: React.FC<ModalScreenProps>;
}
