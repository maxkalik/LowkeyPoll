import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { TouchableIcon } from '../common';
import { styles } from './styles';
import { ChatBarType } from './types';
import { colors } from '../../../src/utils/constants';

const ChatBar: React.FC<ChatBarType> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={60}
      behavior="position"
      style={styles.general}
      contentContainerStyle={styles.container}>
      <View style={styles.hstack}>
        <TouchableIcon
          name="addon"
          onPress={() => navigation.navigate('Modal')}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={value => console.log(value)}
          placeholder="Message"
          placeholderTextColor={colors.COLOR_SECONDARY}
          keyboardAppearance="dark"
          // value="Message"
        />
        <TouchableIcon name="camera" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatBar;
