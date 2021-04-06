import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  TouchableIcon,
  TouchableText,
  HeaderTitle
} from '../../components/common';
import { usePollState } from '../../context/PollContext';
import {
  RootStackParamList,
  RootStackScreenProps,
  RootScreenNavigationProp
} from './types';
import { MainScreenRouteProp } from '../MainStackScreen/types';
import {
  parsePollFromNavigationRouteParam,
  checkCreateAvailability
} from './helper';
import { styles, headerStatusBarHeight, cardStyle } from './styles';

const RootStack = createStackNavigator<RootStackParamList>();
const HeaderTitleComponent = () => <HeaderTitle title="New Poll" />;

const RootStackScreen: React.FC<RootStackScreenProps> = ({
  mainStack,
  modal
}): JSX.Element => {
  const pollContext = usePollState();

  const createPoll = (
    navigation: RootScreenNavigationProp,
    route: MainScreenRouteProp
  ) => {
    if (pollContext.setPoll) {
      const poll = parsePollFromNavigationRouteParam(route);
      pollContext.setPoll(poll);
      navigation.goBack();
    }
  };

  const options = ({
    navigation,
    route
  }: {
    navigation: RootScreenNavigationProp;
    route: MainScreenRouteProp;
  }) => {
    return {
      headerTransparent: true,
      headerStatusBarHeight: headerStatusBarHeight,
      cardStyle: cardStyle,
      headerRightContainerStyle: styles.headerRightContainerStyle,
      headerLeftContainerStyle: styles.headerLeftContainerStyle,
      headerStyle: styles.headerStyle,
      headerTitle: HeaderTitleComponent,
      headerLeft: () => (
        <TouchableIcon name="close large" onPress={() => navigation.goBack()} />
      ),
      headerRight: () => (
        <TouchableText
          title="Create"
          style={styles.headerRight}
          weight="medium"
          isDisable={route.params && !checkCreateAvailability(route)}
          onPress={() => createPoll(navigation, route)}
        />
      )
    };
  };

  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={mainStack}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Modal" component={modal} options={options} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
