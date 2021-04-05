import React from 'react';
import { Text, View } from 'react-native';
import { TouchableIcon } from '..';
import { OptionProps } from './types';
import { styles } from './styles';

const Option: React.FC<OptionProps> = ({
  title,
  onClosePress
}): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <TouchableIcon
      style={styles.touchableIconContainer}
      onPress={onClosePress}
      name="close medium"
    />
  </View>
);

export default Option;
