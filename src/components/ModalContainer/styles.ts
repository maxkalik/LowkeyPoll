import { StyleSheet, ViewStyle } from 'react-native';
import { colors, gradients } from '../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
  gradient: ViewStyle;
  scrollViewContent: ViewStyle;
  scrollView: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.COLOR_DARK,
    marginTop: 47,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,

    elevation: 20
  },
  gradient: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollViewContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20
  },
  scrollView: {
    width: '100%',
    marginTop: 60
  }
});

export const gradientColors = gradients.GRADIENT_SCREEN;
