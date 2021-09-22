import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './auth';

const RootStack = createNativeStackNavigator();
const RootStackNavigation = ({userToken}) => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="Auth" component={AuthStack} />
  </RootStack.Navigator>
);

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation userToken={'userToken'} />
    </NavigationContainer>
  );
};

export default RootNavigator;
