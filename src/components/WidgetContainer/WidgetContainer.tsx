import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles, gradientColors, gradientCoordinates } from './styles';

const WidgetContainer: React.FC = ({ children }): JSX.Element => (
  <View style={styles.container}>
    <LinearGradient
      start={gradientCoordinates.start}
      end={gradientCoordinates.end}
      colors={gradientColors}
      style={styles.gradient}>
      {children}
    </LinearGradient>
  </View>
);

export default WidgetContainer;
