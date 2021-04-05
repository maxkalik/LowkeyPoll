import React from 'react';
import { View } from 'react-native';
import { Label } from '../../../src/components/common';
import { styles } from './styles';
import { LabeledContainerProps } from './types';

const LabeledContainer: React.FC<LabeledContainerProps> = ({
  leftText,
  rightText,
  style,
  children
}) => {
  return (
    <View style={[styles.container, style]}>
      <Label leftText={leftText} rightText={rightText} />
      {children}
    </View>
  );
};

export default LabeledContainer;
