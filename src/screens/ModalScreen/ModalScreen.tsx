import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Switch
} from 'react-native';
import { ModalScreenProps } from './types';
import { styles, gradientColors } from './styles';
import { Icon26px } from '../../../src/components/icons';

const ModalScreen: React.FC<ModalScreenProps> = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={gradientColors}
        style={styles.gradient}>
        <ScrollView
          style={{
            width: '100%'
          }}
          contentContainerStyle={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 60,
            paddingHorizontal: 20
          }}>
          <View
            style={{ borderWidth: 1, width: '100%', flexDirection: 'column' }}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between'
              }}>
              <Text>Question</Text>
              <Text>0/140</Text>
            </View>
            <TextInput
              style={{ borderWidth: 1, width: '100%' }}
              onChangeText={value => console.log(value)}
              placeholder="Message"
              placeholderTextColor="gray"
              keyboardAppearance="dark"
              multiline
              // value="Message"
            />
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
            <Icon26px name="anonymous" />
            <Text style={{ flex: 1 }}>Anonymous voting</Text>
            <Switch
              trackColor={{ false: '#1C1A2A', true: '#1C6EF2' }}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              ios_backgroundColor="1C1A2A"
              style={{
                transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
                borderWidth: isEnabled ? 0 : 1,
                borderColor: 'white'
              }}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}


export default ModalScreen;
