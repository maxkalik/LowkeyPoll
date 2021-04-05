import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, ScrollView } from 'react-native';
import { styles, gradientColors } from './styles';

const ModalContainer: React.FC = ({ children }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={gradientColors}
        style={styles.gradient}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}>
          {children}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default ModalContainer;
