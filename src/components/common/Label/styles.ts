import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, fonts } from '../../../../src/utils/constants';

interface Styles {
  container: TextStyle;
  left: TextStyle;
  right: TextStyle;
}

const baseLabelTextStyle = {
  fontSize: 12,
  color: colors.COLOR_SECONDARY,
  fontFamily: fonts.POPPINS.medium
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  left: baseLabelTextStyle,
  right: baseLabelTextStyle
});
