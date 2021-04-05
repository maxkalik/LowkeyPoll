import { StyleSheet, ViewStyle } from 'react-native';
// import { colors } from '../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
  gradient: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: 25,
    marginTop: 10,
    // height: 300
  },
  gradient: {
    flex: 1,
    width: '100%',
    borderRadius: 25,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 20
  }
});

export const gradientColors = ['#A83D7F', '#6F1D7A81', '#03114398'];
