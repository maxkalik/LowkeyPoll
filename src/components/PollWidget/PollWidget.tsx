import React from 'react';
import { View, Text } from 'react-native';
import { WidgetContainer, WidgetHeader } from '..';
import { users } from '../../utils/dataSource';
import { styles } from './styles';

const PollItem: React.FC = (): JSX.Element => (
  <View style={styles.pollItemContainer}>
    <Text style={styles.pollItemText}>Poll Item</Text>
  </View>
);

const PollWidgetContent: React.FC = (): JSX.Element => (
  <View style={styles.content}>
    <Text style={styles.pollTitle}>
      What is the greatest NBA team in the history?
    </Text>
    <PollItem />
  </View>
);

const PollWidget: React.FC = (): JSX.Element => (
  <WidgetContainer>
    <WidgetHeader
      title="Public Poll"
      username="Mila Spencer"
      userpicSource={users.milaSpencer.userpicSource}
      circleLabelTitle="votes"
      circleLabelValue="0"
    />
    <PollWidgetContent />
  </WidgetContainer>
);

export default PollWidget;
