import React from 'react';
import { TextInput } from 'react-native';
import { colors } from '../../../src/utils/constants';
import LabeledContainer from '../LabeledContainer/LabeledContainer';
import { styles } from './styles';
import { EditControlProps } from './types';

const EditControl: React.FC<EditControlProps> = ({
  labelLeftTitle,
  labelRightTitle,
  onChangeText,
  placeholder,
  value
}) => (
  <LabeledContainer leftText={labelLeftTitle} rightText={labelRightTitle}>
    <TextInput
      style={styles.textField}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.COLOR_SECONDARY}
      keyboardAppearance="dark"
      value={value}
      multiline
    />
  </LabeledContainer>
);

export default EditControl;
