import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles, gradientColors } from './styles';

const WidgetContainer: React.FC = ({ children }): JSX.Element => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={gradientColors}
        style={styles.gradient}>
        {children}
      </LinearGradient>
    </View>
  );
};

export default WidgetContainer;
