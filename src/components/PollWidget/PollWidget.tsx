import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WidgetContainer, WidgetHeader } from '..';
import {
  PollItemProps,
  PollWidgetContentProps,
  PollWidgetProps
} from './types';
import { styles } from './styles';

const PollItem: React.FC<PollItemProps> = ({ text, onPress }): JSX.Element => (
  <TouchableOpacity style={styles.pollItemContainer} onPress={onPress}>
    <Text style={styles.pollItemText}>{text}</Text>
  </TouchableOpacity>
);

const PollWidgetContent: React.FC<PollWidgetContentProps> = ({
  title,
  items,
  opPressPollItem
}): JSX.Element => (
  <View style={styles.content}>
    <Text style={styles.pollTitle}>{title}</Text>
    {items.map(item => (
      <PollItem
        key={item.text}
        onPress={() => opPressPollItem(item.text)}
        text={item.text}
      />
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
  const [votes, setVotes] = useState(voteCounter);
  const pollItemPress = (text: string) => {
    console.log('voted for ', text);
    setVotes(votes + 1);
  };

  return (
    <WidgetContainer>
      <WidgetHeader
        title="Public Poll"
        username={headerUsername}
        userpicSource={userpicSource}
        circleLabelTitle="votes"
        circleLabelValue={String(votes)}
      />
      <PollWidgetContent
        title={title}
        items={items}
        opPressPollItem={poll => pollItemPress(poll)}
      />
    </WidgetContainer>
  );
};

export default PollWidget;
