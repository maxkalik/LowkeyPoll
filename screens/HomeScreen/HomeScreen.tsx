import React from 'react';
import {
  Text,
  ScrollView,
  View,
  Button,
  TextInput,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { HomeScreenProps } from './types';
import { styles } from './styles';
// import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={{ flex: 1 }}>
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
    </ScrollView>
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior="position"
      style={{
        width: '100%'
      }}
      contentContainerStyle={{
        height: 100,
        borderWidth: 1
      }}>
      <View>
        <TextInput
          style={{ height: 40 }}
          onChangeText={value => console.log(value)}
          value="Message"
        />
        <Button
          onPress={() => navigation.navigate('Modal')}
          title="Open Modal"
        />
      </View>
    </KeyboardAvoidingView>
  </View>
);

export default HomeScreen;
