import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './types';
import HomeScreen from '../HomeScreen/HomeScreen';
import PollScreen from '../PollScreen/PollScreen';
import { HomeHeaderTitle } from '../../components';

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackScreen: React.FC = (): JSX.Element => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: () => <HomeHeaderTitle />,
        headerLeft: () => (
          <Button onPress={() => console.log('pressed')} title="X" />
        ),
        headerRight: () => (
          <Button onPress={() => console.log('pressed')} title="Info" />
        )
      }}
    />
    <MainStack.Screen name="Poll" component={PollScreen} />
  </MainStack.Navigator>
);

export default MainStackScreen;
