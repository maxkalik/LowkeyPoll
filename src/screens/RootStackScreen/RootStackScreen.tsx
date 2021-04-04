import React, { useState } from 'react';
import { Button, View, Text, NativeModules } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableIcon, UserPic, HeaderTitle } from '../../components/common';
import { RootStackParamList, RootStackScreenProps } from './types';
import { styles } from './styles';

const RootStack = createStackNavigator<RootStackParamList>();
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


const RootStackScreen: React.FC<RootStackScreenProps> = ({
  mainStack,
  modal
}): JSX.Element => {
  // const [statusBarHeight, setStatusBarHeight] = useState(47);
  // const { StatusBarManager } = NativeModules;
  // StatusBarManager.getHeight(statusBarHeight => {
  //   // console.log(statusBarHeight);
  //   // setStatusBarHeight(statusBarHeight);
  // });
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
          headerStatusBarHeight: 60,
          cardStyle: { backgroundColor: 'transparent' },
          // headerBackground: () => (
          //   <View style={{ flex: 1, bottom: 0 }}>
          //     <View
          //       style={{
          //         // borderWidth: 1,
          //         height: 80,
          //         width: '100%',
          //         borderColor: 'red',
          //         position: 'absolute',
          //         bottom: 0,
          //         backgroundColor: 'silver'
          //       }}
          //     />
          //   </View>
          // ),
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
          headerRight: HeaderRightComponent
          // headerTitleContainerStyle: { borderWidth: 1, marginHorizontal: 0 }
        })}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
