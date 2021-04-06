import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, ScrollView } from 'react-native';
import { styles, gradientColors, gradientCoordinate } from './styles';

const ModalContainer: React.FC = ({ children }) => (
  <View style={styles.container}>
    <LinearGradient
      start={gradientCoordinate.start}
      end={gradientCoordinate.end}
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

export default ModalContainer;
