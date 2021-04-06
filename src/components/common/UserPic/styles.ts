import { StyleSheet } from 'react-native';
import { UserPicStyles } from './types';

export const styles = StyleSheet.create<UserPicStyles>({
  large: {
    borderRadius: 15,
    width: 40,
    height: 40
  },
  medium: {
    borderRadius: 13,
    width: 35,
    height: 35
  }
});
