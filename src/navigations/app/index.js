import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../tabs';

const Stack = createNativeStackNavigator();
const AppStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Main" component={TabNavigator} />
  </Stack.Navigator>
);

export default AppStack;
