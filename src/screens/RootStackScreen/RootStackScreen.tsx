import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  TouchableIcon,
  TouchableText,
  HeaderTitle
} from '../../components/common';
import { RootStackParamList, RootStackScreenProps } from './types';
import { styles } from './styles';

const RootStack = createStackNavigator<RootStackParamList>();
const HeaderTitleComponent = () => <HeaderTitle title="New Poll" />;

const RootStackScreen: React.FC<RootStackScreenProps> = ({
  mainStack,
  modal
}): JSX.Element => {
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
        options={({ navigation }) => ({
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
              onPress={() => navigation.goBack()}
            />
          )
        })}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
