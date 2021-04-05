import React from 'react';
import { StatusBar, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { ChatScrollView, ChatBar, Message, PollWidget } from '../../components';
import { HomeScreenProps } from './types';
import { styles } from './styles';
import { messages, users } from '../../utils/dataSource';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior="position"
        style={styles.keyboardAvoidingView}>
        <ChatScrollView>
          {messages.map((msgProps, i) => (
            <Message key={i} {...msgProps} />
          ))}
          <PollWidget
            headerUsername={users.milaSpencer.username}
            userpicSource={users.milaSpencer.userpicSource}
            circleLabel={{ value: String(0), title: 'votes' }}
            title="What is the greatest NBA team in the history?"
            items={[
              { text: 'Los Angeles Lakers' },
              { text: 'Golden State Warriors' }
            ]}
          />
        </ChatScrollView>
        <ChatBar navigation={navigation} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
