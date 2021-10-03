import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './auth';
import AppStack from './app';
import {View, ActivityIndicator} from 'react-native';
import {Colors} from 'styles';
import {useSelector} from 'react-redux';

const RootStack = createNativeStackNavigator();
const RootStackNavigation = ({userToken}) => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    {userToken ? (
      <RootStack.Screen name="App" component={AppStack} />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStack} />
    )}
  </RootStack.Navigator>
);

export const Splash = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator size="large" color={Colors.PRIMARY} />
  </View>
);

const RootNavigator = () => {
  const userToken = useSelector(state => state.auth.userToken);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <RootStackNavigation userToken={userToken} />
    </NavigationContainer>
  );
};

export default RootNavigator;
