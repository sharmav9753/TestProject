import 'react-native-gesture-handler'; // Don't move this line from top.
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigatorFactory} from './Navigation/NavigatorFactory';

export default function App() {
  return (
    <NavigationContainer>
      <NavigatorFactory />
    </NavigationContainer>
  );
}
