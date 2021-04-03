import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { fontSize: 30, fontFamily: 'Poppins-Medium' }
});
