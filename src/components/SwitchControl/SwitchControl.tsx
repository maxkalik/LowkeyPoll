import React from 'react';
import { View, Switch } from 'react-native';
import { SwitchControlProps } from './types';
import {
  styles,
  trackColor,
  getThumbColor,
  iosBackgroundColor
} from './styles';
import { IconLabel } from '..';

const SwitchControl: React.FC<SwitchControlProps> = ({
  iconName,
  title,
  onValueChange,
  value,
  style
}): JSX.Element => {
  const switchStyles = [
    styles.switchView,
    value ? styles.withoutBorder : styles.withBorder
  ];
  return (
    <View style={[styles.container, style]}>
      <IconLabel iconName={iconName} title={title} />
      <Switch
        trackColor={trackColor}
        thumbColor={getThumbColor(value)}
        ios_backgroundColor={iosBackgroundColor}
        style={switchStyles}
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

export default SwitchControl;
