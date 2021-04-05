import React from 'react';
import { Text } from 'react-native';
import { TouchableText } from '../../../src/components/common';
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
      <TouchableText
        containerStyle={styles.touchableContainer}
        style={styles.button}
        title="Add an option"
        onPress={onButtonPress}
      />
      <Text>Option</Text>
    </LabeledContainer>
  );
};

export default OptionControl;
