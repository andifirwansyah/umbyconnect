import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './auth';
import AppStack from './app';
import {Colors} from 'styles';
import {useSelector} from 'react-redux';
import AnimatedSplash from 'react-native-animated-splash-screen';

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

const RootNavigator = () => {
  const userToken = useSelector(state => state.auth.userToken);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  });

  return (
    <NavigationContainer>
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoading}
        logoImage={require('assets/logo.png')}
        backgroundColor={Colors.WHITE}
        logoHeight={150}
        logoWidth={150}>
        <RootStackNavigation userToken={userToken} />
      </AnimatedSplash>
    </NavigationContainer>
  );
};

export default RootNavigator;
