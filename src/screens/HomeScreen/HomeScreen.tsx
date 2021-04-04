import React from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { ChatScrollView, ChatBar, Message } from '../../components';
import { HomeScreenProps } from './types';
import { styles } from './styles';
import { messages } from '../../utils/dataSource';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior="position"
        style={styles.keyboardAvoidingView}>
        <ChatScrollView>
          {messages.map((msgProps, i) => (
            <Message key={i} {...msgProps} />
          ))}
        </ChatScrollView>
        <ChatBar navigation={navigation} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;
