import React from 'react';
import { Text, View } from 'react-native';
import { ChatHeaderTitleProps } from './types';
import { styles } from './styles';

const HeaderTitle: React.FC<ChatHeaderTitleProps> = ({
  title,
  subTitle
}): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
  </View>
);

export default HeaderTitle;
