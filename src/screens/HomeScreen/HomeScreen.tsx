import React from 'react';
import { Text, View } from 'react-native';
import { ChatScrollView, ChatBar, Message } from '../../components';
import { HomeScreenProps } from './types';
import { styles } from './styles';
import { messages } from '../../utils/dataSource';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  return (
    <View style={styles.container}>
      <ChatScrollView>
        {messages.map((msgProps, i) => (
          <Message key={i} {...msgProps} />
        ))}
      </ChatScrollView>
      <ChatBar navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
