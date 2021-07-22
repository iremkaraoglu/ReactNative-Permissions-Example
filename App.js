/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CameraPermission from './screens/camPermission';
import MicrophonePermission from './screens/micPermission';


const App = () => {
  return <MyStack />;
};

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen
          name="CameraPermission"
          component={CameraPermission}
          options={{title: ''}}
        />
        <Stack.Screen
          name="MicrophonePermission"
          component={MicrophonePermission}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
