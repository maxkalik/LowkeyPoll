import React from 'react';
import { StatusBar, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { ChatScrollView, ChatBar, Message, Poll } from '../../components';
import { HomeScreenProps } from './types';
import { styles } from './styles';
import { messages } from '../../utils/dataSource';

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
          <Poll />
        </ChatScrollView>
        <ChatBar navigation={navigation} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
