import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WidgetContainer, WidgetHeader } from '..';
import {
  PollItemProps,
  PollWidgetContentProps,
  PollWidgetProps
} from './types';
import { styles } from './styles';

const PollItem: React.FC<PollItemProps> = ({ text }): JSX.Element => (
  <TouchableOpacity style={styles.pollItemContainer}>
    <Text style={styles.pollItemText}>{text}</Text>
  </TouchableOpacity>
);

const PollWidgetContent: React.FC<PollWidgetContentProps> = ({
  title,
  items
}): JSX.Element => (
  <View style={styles.content}>
    <Text style={styles.pollTitle}>{title}</Text>
    {items.map(item => (
      <PollItem key={item.text} {...item} />
    ))}
  </View>
);

const PollWidget: React.FC<PollWidgetProps> = ({
  headerUsername,
  userpicSource,
  voteCounter,
  title,
  items
}): JSX.Element => {
  return (
    <WidgetContainer>
      <WidgetHeader
        title="Public Poll"
        username={headerUsername}
        userpicSource={userpicSource}
        circleLabelTitle="votes"
        circleLabelValue={String(voteCounter)}
      />
      <PollWidgetContent title={title} items={items} />
    </WidgetContainer>
  );
};

export default PollWidget;
