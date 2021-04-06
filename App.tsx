import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PollContextProvider } from './src/context/PollContext';
import RootStackScreen from './src/screens/RootStackScreen/RootStackScreen';
import MainStackScreen from './src/screens/MainStackScreen/MainStackScreen';
import ModalScreen from './src/screens/ModalScreen/ModalScreen';

const App = (): JSX.Element => (
  <PollContextProvider>
    <NavigationContainer>
      <RootStackScreen mainStack={MainStackScreen} modal={ModalScreen} />
    </NavigationContainer>
  </PollContextProvider>
);

export default App;
