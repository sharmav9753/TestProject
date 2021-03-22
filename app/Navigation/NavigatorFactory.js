import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from './screens.json';
import DemoScreen from '../Screens/DemoScreen';

const Stack = createStackNavigator();

export const NavigatorFactory = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name={screens.DemoScreen.Name}
      component={DemoScreen}
      options={{title: screens.DemoScreen.Title}}
    />
  </Stack.Navigator>
);