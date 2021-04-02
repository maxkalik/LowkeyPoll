import React from 'react';
import { Text, View, Button } from 'react-native';
import { HomeScreenProps } from './types';
import { styles } from './styles';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>This is the home screen!</Text>
    <Button onPress={() => navigation.navigate('Modal')} title="Open Modal" />
  </View>
);

export default HomeScreen;
