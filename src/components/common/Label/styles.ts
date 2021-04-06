import { StyleSheet, TextStyle } from 'react-native';
import { colors, fonts } from '../../../../src/utils/constants';
import { LabelStyles } from './types';

const baseLabelTextStyle: TextStyle = {
  fontSize: 12,
  color: colors.COLOR_SECONDARY,
  fontFamily: fonts.POPPINS.medium
};

export const styles = StyleSheet.create<LabelStyles>({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  left: baseLabelTextStyle,
  right: baseLabelTextStyle
});
