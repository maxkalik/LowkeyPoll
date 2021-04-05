import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../../src/utils/constants';

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
