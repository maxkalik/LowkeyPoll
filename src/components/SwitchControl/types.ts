import { ViewStyle } from 'react-native';
import { IconLabelProps } from '../IconLabel/types';

export interface SwitchControlProps extends IconLabelProps {
  onValueChange: (value: boolean) => void;
  value: boolean;
  style?: ViewStyle;
}
