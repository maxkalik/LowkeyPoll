import React from 'react';
import { View, Text } from 'react-native';
import { LabelProps } from './types';
import { styles } from './styles';

const Label: React.FC<LabelProps> = ({ leftText, rightText }): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.left}>{leftText}</Text>
    {rightText && <Text style={styles.right}>{rightText}</Text>}
  </View>
);

export default Label;
