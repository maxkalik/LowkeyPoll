import React from 'react';
import { Message, PollWidget } from '../../components';
import { ChatItemProps } from './types';

const ChatItem: React.FC<ChatItemProps> = (message): JSX.Element => {
  if (message.poll) {
    return (
      <PollWidget
        headerUsername={message.username}
        userpicSource={message.userpicSource}
        voteCounter={message.poll.votes}
        title={message.poll.title}
        items={message.poll.items}
      />
    );
  } else {
    return (
      <Message
        username={message.username}
        userpicSource={message.userpicSource}
        text={message.text || ''}
      />
    );
  }
};

export default ChatItem;
