import { StyleSheet } from 'react-native';
import { ChatScrollViewStyles } from './types';

export const styles = StyleSheet.create<ChatScrollViewStyles>({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    paddingHorizontal: 15
  },
  scrollView: {
    width: '100%',
    height: '100%',
    paddingVertical: 20
  }
});

export const contentInset = { bottom: 40 };