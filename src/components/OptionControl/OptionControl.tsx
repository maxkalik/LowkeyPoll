import React from 'react';
import { Option, TouchableText } from '../../../src/components/common';
import LabeledContainer from '../LabeledContainer/LabeledContainer';
import { OptionControlProps } from './types';
import { styles } from './styles';

const OptionControl: React.FC<OptionControlProps> = ({
  labelLeftTitle,
  labelRightTitle,
  onButtonPress
}) => {
  return (
    <LabeledContainer
      style={styles.container}
      leftText={labelLeftTitle}
      rightText={labelRightTitle}>
      <Option title="Option" onClosePress={() => console.log('pressed')} />
      <TouchableText
        containerStyle={styles.touchableContainer}
        style={styles.button}
        title="Add an option"
        onPress={onButtonPress}
      />
    </LabeledContainer>
  );
};

export default OptionControl;
