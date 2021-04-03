import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { TouchableIcon } from '../../components/common';
import { styles } from './styles';
import { ChatBarType } from './types';

const ChatBar: React.FC<ChatBarType> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior="position"
      style={styles.general}
      contentContainerStyle={styles.container}>
      <TouchableIcon
        name="addon"
        foregroundColor="black"
        onPress={() => navigation.navigate('Modal')}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={value => console.log(value)}
        value="Message"
      />
      <TouchableIcon name="camera" foregroundColor="black" />
    </KeyboardAvoidingView>
  );
};

export default ChatBar;
