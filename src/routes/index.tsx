import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Deliveries"
        component={Dashboard}
        options={{
          tabBarIcon: () => <Icon name="reorder" size={20} color="#666" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Icon name="account-circle" size={20} color="#666" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
