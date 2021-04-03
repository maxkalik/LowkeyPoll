import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { TouchableIcon } from '../../components/common';
import Messages from '../../components/Messages/Messages';
import { HomeScreenProps } from './types';
import { styles } from './styles';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Messages>
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
      </Messages>
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        behavior="position"
        style={{
          width: '100%'
        }}
        contentContainerStyle={{
          height: 100,
          borderWidth: 1,
          backgroundColor: 'white',
          flexDirection: 'row'
        }}>
        <TouchableIcon
          name="addon"
          foregroundColor="black"
          onPress={() => navigation.navigate('Modal')}
        />
        <TextInput
          style={{ height: 40 }}
          onChangeText={value => console.log(value)}
          value="Message"
        />
        <TouchableIcon name="camera" foregroundColor="black" />
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;
