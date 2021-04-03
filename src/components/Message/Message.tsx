import React from 'react';
import { View, Text } from 'react-native';
import { UserPic } from '../common';
import { styles } from './styles';
import { MessageProps } from './types';

const Message: React.FC<MessageProps> = ({
  userpicSource,
  username,
  text
}): JSX.Element => (
  <View style={styles.container}>
    <UserPic source={userpicSource} />
    <View style={styles.textContainer}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  </View>
);

export default Message;
