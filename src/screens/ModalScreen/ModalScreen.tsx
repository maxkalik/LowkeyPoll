import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, ScrollView } from 'react-native';
import { ModalScreenProps } from './types';
import { styles, gradientColors } from './styles';
import { SwitchControl, EditControl } from '../../../src/components';
import { Label, TouchableText } from '../../../src/components/common';

const ModalScreen: React.FC<ModalScreenProps> = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
          <EditControl
            labelLeftTitle="Question"
            labelRightTitle="0/140"
            placeholder="Message"
            onChangeText={value => setQuestion(value)}
            value={question}
          />
          <View style={styles.controlComponent}>
            <Label leftText="Options" rightText="0/8" />
            <TouchableText title="Add an option" />
          </View>
          <SwitchControl
            iconName="anonymous"
            title="Anonymous voting"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <SwitchControl
            iconName="add more"
            title="Ability to add more options"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default ModalScreen;
