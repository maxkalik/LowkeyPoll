import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { TouchableTextProps } from './types';
import { styles } from './styles';

const TouchableText: React.FC<TouchableTextProps> = ({
  onPress,
  style,
  containerStyle,
  weight,
  isDisable,
  title
}): JSX.Element => (
  <TouchableOpacity
    disabled={isDisable}
    style={[styles.container, containerStyle]}
    onPress={onPress}>
    <Text
      style={[
        isDisable ? styles.disabled : styles.active,
        styles[weight || 'regular'],
        style
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default TouchableText;
