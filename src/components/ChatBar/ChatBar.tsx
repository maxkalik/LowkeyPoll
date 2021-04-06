import React, { useState } from 'react';
import { View, TextInput, Alert } from 'react-native';
import { TouchableIcon, TouchableText } from '../common';
import { styles } from './styles';
import { ChatBarType } from './types';
import { colors } from '../../../src/utils/constants';
import { toUpperCase } from '../../utils/toUpperCase';

const ChatBar: React.FC<ChatBarType> = ({ navigation, onPressSend }) => {
  const [text, setText] = useState('');

  const sendText = () => {
    onPressSend(text);
    setText('');
  };

  const showAlert = () => {
    if (text.length) {
      return Alert.alert(
        toUpperCase(text),
        '-- converted ASCII from lowercase --',
        [{ text: 'OK', onPress: () => setText('') }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableIcon
        name="addon"
        onPress={() => navigation.navigate('Modal')}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={value => setText(value)}
        placeholder="Message"
        placeholderTextColor={colors.COLOR_SECONDARY}
        keyboardAppearance="dark"
        value={text}
      />
      {text.length > 0 && (
        <TouchableText
          title="Send"
          onPress={sendText}
          style={styles.sendButton}
        />
      )}
      <TouchableIcon name="camera" onPress={showAlert} />
    </View>
  );
};

export default ChatBar;
