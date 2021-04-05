import React from 'react';
import { View, Text } from 'react-native';
import { UserPic, CircleLabel } from '../common';
import { WidgetHeaderProps, WidgetHeaderDescriptionProps } from './types';
import { styles } from './styles';

const WidgetHeaderDescription: React.FC<WidgetHeaderDescriptionProps> = ({
  title,
  username
}): JSX.Element => (
  <View style={styles.descriptionContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.userName}>{username}</Text>
  </View>
);

const WidgetHeader: React.FC<WidgetHeaderProps> = ({
  title,
  username,
  userpicSource,
  circleLabelValue,
  circleLabelTitle
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <UserPic source={userpicSource} />
      <WidgetHeaderDescription title={title} username={username} />
      {circleLabelValue && circleLabelTitle && (
        <CircleLabel value={circleLabelValue} title={circleLabelTitle} />
      )}
    </View>
  );
};

export default WidgetHeader;
