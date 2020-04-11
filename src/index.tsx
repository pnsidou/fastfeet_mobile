import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import App from '~/App';

export default function AppWrapper(): React.FC {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}