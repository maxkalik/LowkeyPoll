import React from 'react';
import { ViewStyle } from 'react-native';
import { LabelProps } from '../common/Label/types';

export interface LabeledContainerProps extends LabelProps {
  children: React.ReactNode;
  style?: ViewStyle;
}
