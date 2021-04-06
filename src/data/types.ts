import { ImageSourcePropType } from 'react-native';

export interface UsersTypes {
  [key: string]: UserType;
}

export interface UserType {
  username: string;
  userpicSource: ImageSourcePropType;
}
