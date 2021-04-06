import React, { useState } from 'react';
import { View, TextInput, Alert } from 'react-native';
import { TouchableIcon, TouchableText } from '../common';
import { styles } from './styles';
import { ChatBarType } from './types';
import { colors } from '../../../src/utils/constants';

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

/*

Bitwise solution
‘a’: 1100001 — ‘A’: 1000001;
‘b’: 1100010 — ‘B’: 1000010;
‘c’: 1100011 — ‘C’: 1000011;

*/

const toUpperCase = (str: string): string => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) & 223;
    result += String.fromCharCode(charCode);
  }
  return result;
};
