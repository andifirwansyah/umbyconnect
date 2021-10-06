import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons} from 'constants';
import {Home, Topic, Thread, Profile} from 'scenes';
import {Colors} from 'styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {width} = Dimensions.get('window');
import {useSelector} from 'react-redux';

const ProfileIcon = ({focused}) => {
  const userData = useSelector(state => state.user.data);
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: focused ? Colors.PRIMARY : Colors.PRIMARY_MATE,
        borderRadius: 75,
      }}>
      <Image
        source={{
          uri: userData?.avatar
            ? userData.avatar
            : 'https://www.unmc.edu/cihc/_images/faculty/default.jpg',
        }}
        style={{width: width * 0.065, height: width * 0.065, borderRadius: 75}}
      />
    </View>
  );
};

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

const TopicStack = createNativeStackNavigator();
const TopicStackScene = () => (
  <TopicStack.Navigator screenOptions={{headerShown: false}}>
    <TopicStack.Screen name="TopicMain" component={Topic} />
    <TopicStack.Screen name="Thread" component={Thread} />
  </TopicStack.Navigator>
);

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
    <TabNav.Screen name="Topic" component={TopicStackScene} />
    <TabNav.Screen name="Friend" component={Home} />
    <TabNav.Screen name="Profile" component={Profile} />
    {/* <TabNav.Screen name="Thread" component={Thread} /> */}
  </TabNav.Navigator>
);

export default TabNavigator;
