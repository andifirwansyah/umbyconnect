import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../tabs';
import {
  ChooseAvatar,
  CreateThread,
  DetailThread,
  FriendProfile,
  EditProfile,
  Setting,
  Notification,
} from 'scenes';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
const AppStack = () => {
  const hasChooseAvatar = useSelector(state => state.hasChooseAvatar.data);
  console.log('HAS CHOOSE AVATAR => ', hasChooseAvatar);
  return (
    <Stack.Navigator
      initialRouteName={hasChooseAvatar ? 'Main' : 'ChooseAvatar'}>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="ChooseAvatar" component={ChooseAvatar} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="DetailThread" component={DetailThread} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Notification" component={Notification} />
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
};

export default AppStack;
