import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  switchView: ViewStyle;
  withBorder: ViewStyle;
  withoutBorder: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchView: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
    borderColor: '#7E7A9A'
  },
  withBorder: {
    borderWidth: 1
  },
  withoutBorder: {
    borderWidth: 0
  }
});
