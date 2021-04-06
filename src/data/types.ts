import { ImageSourcePropType } from 'react-native';
import { PollTypes } from '../context/types';

export interface UsersTypes {
  [key: string]: UserType;
}

export interface UserType {
  username: string;
  userpicSource: ImageSourcePropType;
}

export interface ChatItem extends UserType {
  text?: string;
  poll?: PollTypes;
}
