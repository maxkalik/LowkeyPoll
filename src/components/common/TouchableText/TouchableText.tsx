import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { TouchableTextProps } from './types';
import { styles } from './styles';

const TouchableText: React.FC<TouchableTextProps> = ({
  onPress,
  style,
  weight,
  title
}): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={[styles.text, styles[weight || 'regular'], style]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default TouchableText;
