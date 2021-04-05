import { IconLabelProps } from '../IconLabel/types';

export interface SwitchControlProps extends IconLabelProps {
  onValueChange: (value: boolean) => void;
  value: boolean;
}
