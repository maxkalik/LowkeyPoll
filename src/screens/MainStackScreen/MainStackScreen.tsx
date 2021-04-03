import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './types';
import HomeScreen from '../HomeScreen/HomeScreen';
import PollScreen from '../PollScreen/PollScreen';
import { TouchableIcon, UserPic, HeaderTitle } from '../../components/common';
import { colors } from '../../../src/utils/constants';

const MainStack = createStackNavigator<MainStackParamList>();

const styles = {
  headerStyle: {
    backgroundColor: colors.COLOR_DARK,
    shadowRadius: 0,
    shadowColor: 'transparent'
  }
};

const MainStackScreen: React.FC = (): JSX.Element => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => <TouchableIcon name="close large" />,
        headerTitle: () => (
          <HeaderTitle title="Lowkey Squad" subTitle="1 member • 1 online" />
        ),
        headerRight: () => (
          <UserPic
            size="medium"
            source={require('../../assets/png/greta-priede.png')}
          />
        ),
        headerRightContainerStyle: { padding: 15 },
        headerLeftContainerStyle: { padding: 15 },
        headerStyle: styles.headerStyle
      }}
    />
    <MainStack.Screen name="Poll" component={PollScreen} />
  </MainStack.Navigator>
);

export default MainStackScreen;
