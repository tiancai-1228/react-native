import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-ionicons';
import HomeScreen from './home';
import SettingsScreen from './new';
import Like from './like';
import Account from './account';
import {StatusBar} from 'react-native';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'new') {
              iconName = focused ? 'logo-apple' : 'logo-apple';
            } else if (route.name === 'like') {
              iconName = focused ? 'heart' : 'heart';
            } else if (route.name === 'account') {
              iconName = focused ? 'happy' : 'happy';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="new" component={SettingsScreen} />
        <Tab.Screen name="like" component={Like} />
        <Tab.Screen name="account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
