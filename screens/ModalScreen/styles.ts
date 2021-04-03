import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 47,
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: { fontSize: 30 }
});
