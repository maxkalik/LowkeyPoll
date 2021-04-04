import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../../src/utils/constants';

interface Styles {
  container: ViewStyle;
  gradient: ViewStyle;
  title: TextStyle;
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
  title: { fontSize: 30, color: colors.COLOR_FOREGROUND }
});

export const gradientColors = [colors.COLOR_DARK, colors.COLOR_BACKGROUND];
