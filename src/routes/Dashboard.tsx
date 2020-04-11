import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Deliveries from '~/pages/Deliveries';
import DeliveryInfo from '~/pages/DeliveryInfo';
import RegisterProblem from '~/pages/RegisterProblem';
import ViewProblems from '~/pages/ViewProblems';
import ConfirmDelivery from '~/pages/ConfirmDelivery';

const Stack = createStackNavigator();

export interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Deliveries" component={Deliveries} />
      <Stack.Screen name="DeliveryInfo" component={DeliveryInfo} />
      <Stack.Screen name="RegisterProblem" component={RegisterProblem} />
      <Stack.Screen name="ViewProblems" component={ViewProblems} />
      <Stack.Screen name="ConfirmDelivery" component={ConfirmDelivery} />
    </Stack.Navigator>
  );
};

export default Dashboard;
