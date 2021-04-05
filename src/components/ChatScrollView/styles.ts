import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  scrollView: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
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
