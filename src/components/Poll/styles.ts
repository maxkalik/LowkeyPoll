import { StyleSheet, ViewStyle } from 'react-native';
// import { colors } from '../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: 25,
    marginTop: 10
    // height: 300
  }
});
