import React from 'react';
import { Text, View, Button } from 'react-native';
import { ModalScreenProps } from './types';
import { styles } from './styles';

const ModalScreen: React.FC<ModalScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>This is a modal!</Text>
    <Button onPress={() => navigation.goBack()} title="Dismiss" />
  </View>
);

export default ModalScreen;
