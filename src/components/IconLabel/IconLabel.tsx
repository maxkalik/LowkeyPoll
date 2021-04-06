import React from 'react';
import { View, Text } from 'react-native';
import { Icon26px } from '../icons';
import { IconLabelProps } from './types';
import { styles } from './styles';

const IconLabel: React.FC<IconLabelProps> = ({
  iconName,
  title
}): JSX.Element => (
  <View style={styles.container}>
    <Icon26px name={iconName} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default IconLabel;
