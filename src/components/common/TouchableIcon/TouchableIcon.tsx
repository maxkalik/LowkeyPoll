import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon26px } from '../../icons';
import { TouchableIconProps } from './types';

const TouchableIcon: React.FC<TouchableIconProps> = ({
  onPress,
  style,
  foregroundColor,
  name
}): JSX.Element => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon26px name={name} color={foregroundColor} />
  </TouchableOpacity>
);

export default TouchableIcon;
