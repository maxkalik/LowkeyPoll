import { StyleSheet } from 'react-native';
import { colors } from '../../../src/utils/constants';
import { SwitchControlStyles } from './types';

export const styles = StyleSheet.create<SwitchControlStyles>({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchView: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
    borderColor: colors.COLOR_SECONDARY
  },
  withBorder: {
    borderWidth: 1
  },
  withoutBorder: {
    borderWidth: 0
  }
});

export const iosBackgroundColor = colors.COLOR_DARK;

export const trackColor = { false: colors.COLOR_DARK, true: colors.COLOR_BLUE };

export const getThumbColor = (value: boolean): string => {
  return value ? colors.COLOR_FOREGROUND : colors.COLOR_SECONDARY;
};
