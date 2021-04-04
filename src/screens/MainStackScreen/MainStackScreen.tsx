import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './types';
import HomeScreen from '../HomeScreen/HomeScreen';
import PollScreen from '../PollScreen/PollScreen';
import { TouchableIcon, UserPic, HeaderTitle } from '../../components/common';
import { styles } from './styles';

const MainStack = createStackNavigator<MainStackParamList>();
const HeaderLeftComponent = () => <TouchableIcon name="close large" />;
const HeaderTitleComponent = () => (
  <HeaderTitle title="Lowkey Squad" subTitle="1 member • 1 online" />
);
const HeaderRightComponent = () => (
  <UserPic
    size="medium"
    source={require('../../assets/png/greta-priede.png')}
  />
);

const MainStackScreen: React.FC = (): JSX.Element => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: HeaderLeftComponent,
        headerTitle: HeaderTitleComponent,
        headerRight: HeaderRightComponent,
        headerRightContainerStyle: styles.headerRightContainerStyle,
        headerLeftContainerStyle: styles.headerLeftContainerStyle,
        headerStyle: styles.headerStyle
      }}
    />
    <MainStack.Screen name="Poll" component={PollScreen} />
  </MainStack.Navigator>
);

export default MainStackScreen;