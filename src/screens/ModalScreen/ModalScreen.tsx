import React, { useState } from 'react';
import { ModalScreenProps } from './types';
import { styles } from './styles';
import {
  ModalContainer,
  SwitchControl,
  EditControl,
  OptionControl
} from '../../../src/components';

const ModalScreen: React.FC<ModalScreenProps> = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ModalContainer>
      <EditControl
        labelLeftTitle="Question"
        labelRightTitle="0/140"
        placeholder="Message"
        onChangeText={value => setQuestion(value)}
        value={question}
      />
      <OptionControl
        labelLeftTitle="Options"
        labelRightTitle="0/8"
        onButtonPress={() => console.log('pressed')}
      />
      <SwitchControl
        style={styles.anonymousSwitchControl}
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
    </ModalContainer>
  );
};

export default ModalScreen;
