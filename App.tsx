import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        onPress={() => navigation.navigate('Modal')}
        title="Open Modal"
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={HomeScreen} />
    <MainStack.Screen name="Details" component={DetailsScreen} />
  </MainStack.Navigator>
)

const RootStackScreen = () => (
  <RootStack.Navigator mode="modal">
    <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name="Modal" component={ModalScreen} />
  </RootStack.Navigator>
)


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};





const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
