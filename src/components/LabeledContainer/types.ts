import { LabelProps } from '../common/Label/types';

export interface LabeledContainerProps extends LabelProps {
  children: JSX.Element | JSX.Element[];
}
