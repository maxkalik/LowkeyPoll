import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './types';
import HomeScreen from '../HomeScreen/HomeScreen';
import PollScreen from '../PollScreen/PollScreen';

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackScreen: React.FC = (): JSX.Element => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={HomeScreen} />
    <MainStack.Screen name="Poll" component={PollScreen} />
  </MainStack.Navigator>
);

export default MainStackScreen;
