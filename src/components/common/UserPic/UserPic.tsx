import React from 'react';
import { Image } from 'react-native';
import { UserPicProps } from './types';
import { styles } from './styles';

const UserPic: React.FC<UserPicProps> = ({ source, size }): JSX.Element => {
  return <Image style={styles[size || 'large']} source={source} />;
};

export default UserPic;
