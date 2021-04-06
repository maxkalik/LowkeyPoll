import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './types';
import HomeScreen from '../HomeScreen/HomeScreen';
import { TouchableIcon, UserPic, HeaderTitle } from '../../components/common';
import { currentUser } from '../../data';
import { styles } from './styles';

const MainStack = createStackNavigator<MainStackParamList>();
const HeaderLeftComponent = () => <TouchableIcon name="close large" />;
const HeaderTitleComponent = () => (
  <HeaderTitle title="Lowkey Squad" subTitle="1 member • 1 online" />
);
const HeaderRightComponent = () => (
  <UserPic size="medium" source={currentUser.userpicSource} />
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
  </MainStack.Navigator>
);

export default MainStackScreen;
