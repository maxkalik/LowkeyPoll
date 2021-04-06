import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  TouchableIcon,
  TouchableText,
  HeaderTitle
} from '../../components/common';
import { usePollState } from '../../context/PollContext';
import { RootStackParamList, RootStackScreenProps } from './types';
import { PollTypes } from '../../context/types';
import { styles } from './styles';

const RootStack = createStackNavigator<RootStackParamList>();
const HeaderTitleComponent = () => <HeaderTitle title="New Poll" />;

const RootStackScreen: React.FC<RootStackScreenProps> = ({
  mainStack,
  modal
}): JSX.Element => {
  const pollContext = usePollState();

  const createPoll = (navigation, route) => {
    if (pollContext.setPoll) {
      const poll = parsePollFromNavigationRouteParam(route);
      pollContext.setPoll(poll);
      navigation.goBack();
    }
  };

  const parsePollFromNavigationRouteParam = ({ params }): PollTypes => {
    const question = JSON.stringify(params.question);
    const optionsJson = JSON.stringify(params.options);
    const options = JSON.parse(optionsJson);
    return {
      title: question.replace(/['"]+/g, ''),
      items: options.map((text: string) => {
        return { text };
      }),
      votes: 0
    };
  };

  const checkCreateAvailability = (route): boolean => {
    const poll = parsePollFromNavigationRouteParam(route);
    if (poll.title.length > 0 && poll.items.length > 1) {
      return poll.items[0].text.length > 0 && poll.items[1].text.length > 0;
    } else {
      return false;
    }
  };

  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={mainStack}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Modal"
        component={modal}
        options={({ navigation, route }) => {
          return {
            headerTransparent: true,
            headerStatusBarHeight: 53,
            cardStyle: { backgroundColor: 'transparent' },
            headerRightContainerStyle: styles.headerRightContainerStyle,
            headerLeftContainerStyle: styles.headerLeftContainerStyle,
            headerStyle: styles.headerStyle,
            headerTitle: HeaderTitleComponent,
            headerLeft: () => (
              <TouchableIcon
                name="close large"
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <TouchableText
                title="Create"
                style={styles.headerRight}
                weight="medium"
                isDisable={
                  route.params !== undefined && !checkCreateAvailability(route)
                }
                onPress={() => createPoll(navigation, route)}
              />
            )
          };
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
