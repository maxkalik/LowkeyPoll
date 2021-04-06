import { ViewStyle } from 'react-native';
import { IconLabelProps } from '../IconLabel/types';

export interface SwitchControlProps extends IconLabelProps {
  onValueChange: (value: boolean) => void;
  value: boolean;
  style?: ViewStyle;
}

export interface SwitchControlStyles {
  container: ViewStyle;
  switchView: ViewStyle;
  withBorder: ViewStyle;
  withoutBorder: ViewStyle;
}
