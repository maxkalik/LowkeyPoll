import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen/RootStackScreen';
import MainStackScreen from './screens/MainStackScreen/MainStackScreen';
import ModalScreen from './screens/ModalScreen/ModalScreen';

const App = (): JSX.Element => (
  <NavigationContainer>
    <RootStackScreen mainStack={MainStackScreen} modal={ModalScreen} />
  </NavigationContainer>
);

export default App;
