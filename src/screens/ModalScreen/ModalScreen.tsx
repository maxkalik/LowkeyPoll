import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Button } from 'react-native';
import { ModalScreenProps } from './types';
import { styles, gradientColors } from './styles';

const ModalScreen: React.FC<ModalScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.5, y: 1.0 }}
      colors={gradientColors}
      style={styles.gradient}>
      <Text style={styles.title}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </LinearGradient>
  </View>
);

export default ModalScreen;
