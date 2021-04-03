import { StyleSheet, ImageStyle } from 'react-native';

interface Styles {
  large: ImageStyle;
  medium: ImageStyle;
}

export const styles = StyleSheet.create<Styles>({
  large: {
    borderRadius: 15,
    width: 40,
    height: 40
  },
  medium: {
    borderRadius: 15,
    width: 35,
    height: 35
  }
});
