import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons} from 'constants';
import {Home} from 'scenes';
import {Colors} from 'styles';
const {width} = Dimensions.get('window');

const ProfileIcon = ({focused}) => (
  <View
    style={{
      borderWidth: 2,
      borderColor: focused ? Colors.PRIMARY : Colors.PRIMARY_MATE,
      borderRadius: 75,
    }}>
    <Image
      source={require('assets/profile.jpeg')}
      style={{width: width * 0.065, height: width * 0.065, borderRadius: 75}}
    />
  </View>
);

const TabIcon = ({routeName, focused}) => {
  let iconFile = Icons.find(val => val.key === routeName);
  return routeName === 'Profile' ? (
    <ProfileIcon focused={focused} />
  ) : (
    <Image
      source={focused ? iconFile.active : iconFile.inactive}
      style={{width: width * 0.065, height: width * 0.065}}
    />
  );
};

const TabNav = createBottomTabNavigator();
const TabNavigator = () => (
  <TabNav.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        return <TabIcon routeName={route.name} focused={focused} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
    })}>
    <TabNav.Screen name="Home" component={Home} />
    <TabNav.Screen name="Topic" component={Home} />
    <TabNav.Screen name="Friend" component={Home} />
    <TabNav.Screen name="Profile" component={Home} />
  </TabNav.Navigator>
);

export default TabNavigator;
