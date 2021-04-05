import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors, fonts } from '../../../utils/constants';
// import { raundViewStyle } from '../../../styles';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  touchableIconContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.COLOR_DARK,
    width: '100%',
    flexDirection: 'row',
    borderColor: 'white',
    marginBottom: 8
  },
  touchableIconContainer: {
    backgroundColor: colors.COLOR_BLUE + '15',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 14,
    flex: 1,
    textAlignVertical: 'center',
    fontSize: 15,
    fontFamily: fonts.POPPINS.regular,
    color: colors.COLOR_FOREGROUND
  }
});
