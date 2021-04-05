import React from 'react';
import { View, Text } from 'react-native';
import { CircleLabelProps } from './types';
import { styles } from './styles';

const CircleLabel: React.FC<CircleLabelProps> = ({
  value,
  title
}): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.description}>{title}</Text>
  </View>
);

export default CircleLabel;
