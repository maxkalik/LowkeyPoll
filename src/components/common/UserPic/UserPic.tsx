import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { UserPicProps } from './types';
import { styles } from './styles';

const UserPic: React.FC<UserPicProps> = ({
  source,
  size,
  style,
  onPress
}): JSX.Element => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image style={styles[size || 'large']} source={source} />
    </TouchableOpacity>
  );
};

export default UserPic;
