import React from 'react';
import {SignIn, SignUp, ChooseAvatar} from 'scenes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="ChooseAvatar" component={ChooseAvatar} />
  </Stack.Navigator>
);

export default AuthStack;
