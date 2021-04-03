import React from 'react';
import { Text, View } from 'react-native';
import { ChatScrollView, ChatBar } from '../../components';
import { UserPic } from '../../components/common';
import { HomeScreenProps } from './types';
import { styles } from './styles';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  return (
    <View style={styles.container}>
      <ChatScrollView>
        <Text style={styles.title}>This is the home screen!</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>sdfsd</Text>
        <UserPic source={require('../../assets/png/max-kalik.png')} />
      </ChatScrollView>
      <ChatBar navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
