import React, { useState, useCallback, useRef } from 'react';
import {
  Text,
  ScrollView,
  View,
  Button,
  RefreshControl,
  TextInput,
  // Platform,
  KeyboardAvoidingView
} from 'react-native';
import { Icon26px } from '../../components/icons';
import { HomeScreenProps } from './types';
import { styles } from './styles';
// import { ScrollView } from 'react-native-gesture-handler';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const scrollViewRef = useRef();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ alignItems: 'flex-end' }}>
        <Text style={styles.title}>This is the home screen!</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>Sdfasdfasdfasd</Text>
        <Text style={styles.title}>sdfsd</Text>
      </ScrollView>
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        behavior="position"
        style={{
          width: '100%'
        }}
        contentContainerStyle={{
          height: 100,
          borderWidth: 1,
          backgroundColor: 'white',
          flexDirection: 'row'
        }}>
        <Icon26px name="addon" color="black" />
        <TextInput
          style={{ height: 40 }}
          onChangeText={value => console.log(value)}
          value="Message"
        />
        <Icon26px name="camera" color="black" />
        <Button
          onPress={() => navigation.navigate('Modal')}
          title="Open Modal"
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;
