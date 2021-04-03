import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  general: ViewStyle;
  container: ViewStyle;
  textInput: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  general: { width: '100%' },
  container: {
    height: 100,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  textInput: { height: 40 }
});
