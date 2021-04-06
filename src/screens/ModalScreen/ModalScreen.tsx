import React, { useState, useEffect } from 'react';
import { ModalScreenProps } from './types';
import {
  ModalContainer,
  SwitchControl,
  EditControl,
  OptionControl
} from '../../../src/components';
import { styles } from './styles';

const ModalScreen: React.FC<ModalScreenProps> = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [isMoreOptions, setIsMoreOptions] = useState(false);

  useEffect(() => {
    navigation.setParams({
      question,
      options
    });
  }, [question, options]);

  const changeQuestion = (value: string) => {
    setQuestion(value);
  };

  const changeOption = (value: string, i: number) => {
    const optionsCopy = options;
    optionsCopy[i] = value;
    setOptions(optionsCopy);
  };

  const toggleAnonymous = () => {
    setIsAnonymous(previousState => !previousState);
  };

  const toggleMoreOptions = () => {
    setIsMoreOptions(previousState => !previousState);
  };

  const addOption = () => {
    if (options.length < 1) {
      setOptions(['']);
    } else {
      const i = options.length - 1;
      if (options[i]) {
        setOptions([...options, '']);
      }
    }
  };

  const removeOption = (i: number) => {
    const optionsCopy = options;
    optionsCopy.splice(i, 1);
    const updatedOptions = optionsCopy;
    setOptions([...updatedOptions]);
  };

  console.log(options);

  return (
    <ModalContainer>
      <EditControl
        labelLeftTitle="Question"
        labelRightTitle="0/140"
        placeholder="Message"
        onChangeText={changeQuestion}
        value={question}
      />
      <OptionControl
        labelLeftTitle="Options"
        labelRightTitle="0/8"
        onButtonPress={addOption}
        items={options}
        onCloseOption={removeOption}
        onChangeOptionText={changeOption}
      />
      <SwitchControl
        style={styles.anonymousSwitchControl}
        iconName="anonymous"
        title="Anonymous voting"
        onValueChange={toggleAnonymous}
        value={isAnonymous}
      />
      <SwitchControl
        iconName="add more"
        title="Ability to add more options"
        onValueChange={toggleMoreOptions}
        value={isMoreOptions}
      />
    </ModalContainer>
  );
};

export default ModalScreen;
