import React, { useEffect, useState } from 'react';
import { StatusBar, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { ChatScrollView, ChatBar, Message, PollWidget } from '../../components';
import { usePollState } from '../../context/PollContext';
import { HomeScreenProps } from './types';
import { styles } from './styles';
import { users, messages, currentUser } from '../../data';
import { ChatItem } from '../../data/types';

const renderMessage = (message: ChatItem, i: React.Key): JSX.Element => {
  if (message.poll) {
    return (
      <PollWidget
        key={i}
        headerUsername={message.username}
        userpicSource={message.userpicSource}
        voteCounter={message.poll.votes}
        title={message.poll.title}
        items={message.poll.items}
      />
    );
  } else {
    return (
      <Message
        key={i}
        username={message.username}
        userpicSource={message.userpicSource}
        text={message.text || ''}
      />
    );
  }
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  const [messagesList, setMessagesList] = useState<ChatItem[]>(messages);
  const pollContext = usePollState();

  const createMessage = (text: string) => {
    setMessagesList([...messagesList, { ...currentUser, text }]);
  };

  useEffect(() => {
    if (pollContext.poll.title) {
      const userMessage: ChatItem = {
        ...users.milaSpencer,
        poll: pollContext.poll
      };
      setMessagesList([...messagesList, userMessage]);
    }
    if (pollContext.clearContext) {
      pollContext.clearContext();
    }
  }, [pollContext, messagesList]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior="position"
        style={styles.keyboardAvoidingView}>
        <ChatScrollView>
          {messagesList.length &&
            messagesList.map((message, i) => renderMessage(message, i))}
        </ChatScrollView>
        <ChatBar navigation={navigation} onPressSend={createMessage} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
