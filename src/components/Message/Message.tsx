import React from 'react';
import { View, Text } from 'react-native';
import { UserPic, TouchableText } from '../common';
import { styles } from './styles';
import { MessageProps } from './types';

const UserLinkWithText: React.FC<{ text: string }> = ({
  text
}): JSX.Element => (
  <Text style={styles.text}>
    <TouchableText
      weight="medium"
      style={styles.userLink}
      title={text.split(' ')[0]}
    />
    {' ' + text.substr(text.indexOf(' ') + 1)}
  </Text>
);

const MessageText: React.FC<{ text: string }> = ({ text }): JSX.Element => {
  const isUserName = text.startsWith('@');
  if (isUserName) {
    return <UserLinkWithText text={text} />;
  } else {
    return <Text style={styles.text}>{text}</Text>;
  }
};

const Message: React.FC<MessageProps> = ({
  userpicSource,
  username,
  text
}): JSX.Element => (
  <View style={styles.container}>
    <UserPic source={userpicSource} />
    <View style={styles.textContainer}>
      <Text style={styles.username}>{username}</Text>
      <MessageText text={text} />
    </View>
  </View>
);

export default Message;
