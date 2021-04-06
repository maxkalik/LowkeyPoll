import React from 'react';
import { View, TextInput } from 'react-native';
import { TouchableIcon } from '..';
import { OptionProps } from './types';
import { styles } from './styles';

const Option: React.FC<OptionProps> = ({
  title,
  onClosePress,
  onChangeText
}): JSX.Element => (
  <View style={styles.container}>
    <TextInput
      keyboardAppearance="dark"
      style={styles.title}
      onChangeText={onChangeText}>
      {title}
    </TextInput>
    <TouchableIcon
      style={styles.touchableIconContainer}
      onPress={onClosePress}
      name="close medium"
    />
  </View>
);

export default Option;
