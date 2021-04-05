import React from 'react';
import { View, Switch } from 'react-native';
import { SwitchControlProps } from './types';
import { styles } from './styles';
import { IconLabel } from '..';

const SwitchControl: React.FC<SwitchControlProps> = ({
  iconName,
  title,
  onValueChange,
  value
}): JSX.Element => {
  const switchStyles = [
    styles.switchView,
    value ? styles.withoutBorder : styles.withBorder
  ];
  return (
    <View style={styles.container}>
      <IconLabel iconName={iconName} title={title} />
      <Switch
        trackColor={{ false: '#1C1A2A', true: '#1C6EF2' }}
        thumbColor={value ? 'white' : '#7E7A9A'}
        ios_backgroundColor="1C1A2A"
        style={switchStyles}
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

export default SwitchControl;
