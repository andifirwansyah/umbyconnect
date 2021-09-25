import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../tabs';
import {CreateThread} from 'scenes';

const Stack = createNativeStackNavigator();
const AppStack = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Group>
    <Stack.Group
      screenOptions={{
        presentation: 'modal',
        headerShown: Platform.OS === 'ios' ? true : false,
      }}>
      <Stack.Screen
        name="CreateThread"
        component={CreateThread}
        options={{title: 'Buat Thread'}}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default AppStack;
