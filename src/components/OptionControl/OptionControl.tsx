import React from 'react';
import { Option, TouchableText } from '../../../src/components/common';
import LabeledContainer from '../LabeledContainer/LabeledContainer';
import { OptionControlProps } from './types';
import { styles } from './styles';

const OptionControl: React.FC<OptionControlProps> = ({
  labelLeftTitle,
  labelRightTitle,
  onButtonPress,
  onChangeOptionText,
  onCloseOption,
  items
}) => {
  return (
    <LabeledContainer
      style={styles.container}
      leftText={labelLeftTitle}
      rightText={labelRightTitle}>
      {items.map((text: string, i: React.Key) => {
        // console.log(items);
        return (
          <Option
            key={i}
            title={text}
            onChangeText={value => onChangeOptionText(value, Number(i))}
            onClosePress={() => onCloseOption(Number(i))}
          />
        );
      })}
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
