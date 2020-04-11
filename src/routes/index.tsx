import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '~/pages/SignIn';
import Profile from '~/pages/Profile';

import Dashboard from './Dashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export interface props {
  isSigned: boolean;
}

const Routes: React.FC<props> = ({ isSigned }) => {
  if (!isSigned)
    return (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    );

  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Dasboard" component={Dashboard} />
    </Tab.Navigator>
  );
};

export default Routes;
