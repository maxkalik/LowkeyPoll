import React, { useEffect, useState } from 'react';
import { StatusBar, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { ChatScrollView, ChatBar, ChatItem } from '../../components';
import { usePollState } from '../../context/PollContext';
import { HomeScreenProps } from './types';
import { styles } from './styles';
import { users, messages, currentUser } from '../../data';
import { ChatItemProps } from '../../components/ChatItem/types';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  const [messagesList, setMessagesList] = useState<ChatItemProps[]>(messages);
  const pollContext = usePollState();

  const createMessage = (text: string) => {
    setMessagesList([...messagesList, { ...currentUser, text }]);
  };

  useEffect(() => {
    if (pollContext.poll.title) {
      const userMessage: ChatItemProps = {
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
            messagesList.map((message, i) => <ChatItem {...message} key={i} />)}
        </ChatScrollView>
        <ChatBar navigation={navigation} onPressSend={createMessage} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
