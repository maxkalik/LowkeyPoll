import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { ChatScrollView, ChatBar } from '../../components';
import { TouchableIcon } from '../../components/common';
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
      </ChatScrollView>
      <ChatBar navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
