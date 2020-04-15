import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BorderlessButton } from 'react-native-gesture-handler';

import Deliveries from '~/pages/Deliveries';
import DeliveryInfo from '~/pages/DeliveryInfo';
import RegisterProblem from '~/pages/RegisterProblem';
import ViewProblems from '~/pages/ViewProblems';
import ConfirmDelivery from '~/pages/ConfirmDelivery';

const Stack = createStackNavigator();

export interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerLeft: ({ onPress }) => (
          <BorderlessButton onPress={onPress} style={{ marginLeft: 25 }}>
            <Icon name="chevron-left" size={25} color="white" />
          </BorderlessButton>
        ),
      }}
    >
      <Stack.Screen name="Deliveries" component={Deliveries} />
      <Stack.Screen name="DeliveryInfo" component={DeliveryInfo} />
      <Stack.Screen name="RegisterProblem" component={RegisterProblem} />
      <Stack.Screen name="ViewProblems" component={ViewProblems} />
      <Stack.Screen name="ConfirmDelivery" component={ConfirmDelivery} />
    </Stack.Navigator>
  );
};

export default Dashboard;
