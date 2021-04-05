import React from 'react';
import { View, Text } from 'react-native';
import { WidgetContainer, WidgetHeader } from '../';
import { users } from '../../utils/dataSource';
// import { styles, gradientColors } from './styles';

const Poll: React.FC = (): JSX.Element => {
  return (
    <WidgetContainer>
      <WidgetHeader
        title="Public Poll"
        username="Mila Spencer"
        userpicSource={users.milaSpencer.userpicSource}
        circleLabelTitle="votes"
        circleLabelValue="0"
      />
      <View>
        <Text>Poll title</Text>
        <Text>Poll item</Text>
      </View>
    </WidgetContainer>
  );
};

export default Poll;
