import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenProps } from './types';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackScreen: React.FC<RootStackScreenProps> = ({
  mainStack,
  modal
}): JSX.Element => (
  <RootStack.Navigator mode="modal">
    <RootStack.Screen
      name="Main"
      component={mainStack}
      options={{ headerShown: false }}
    />
    <RootStack.Screen name="Modal" component={modal} />
  </RootStack.Navigator>
);

export default RootStackScreen;
