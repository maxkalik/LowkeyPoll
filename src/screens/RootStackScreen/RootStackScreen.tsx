import React, { useState } from 'react';
import { Button, View, Text, NativeModules } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenProps } from './types';

const RootStack = createStackNavigator<RootStackParamList>();

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
          headerTitle: () => (
            <View>
              <Text>New Poll</Text>
            </View>
          ),
          headerLeft: () => (
            <View>
              <Button onPress={() => navigation.goBack()} title="X" />
            </View>
          ),
          headerRight: () => (
            <Button onPress={() => console.log('pressed')} title="Create" />
          ),
          headerTitleContainerStyle: { borderWidth: 1, marginHorizontal: 0 }
        })}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
