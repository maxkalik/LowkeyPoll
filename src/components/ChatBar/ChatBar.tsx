import React from 'react';
import { View, TextInput } from 'react-native';
import { TouchableIcon } from '../common';
import { styles } from './styles';
import { ChatBarType } from './types';
import { colors } from '../../../src/utils/constants';

const ChatBar: React.FC<ChatBarType> = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
  );
};

export default ChatBar;
