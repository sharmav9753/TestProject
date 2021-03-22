import 'react-native-gesture-handler'; // Don't move this line from top.
import * as React from 'react';
import { Provider } from "react-redux";
import {NavigationContainer} from '@react-navigation/native';
import {NavigatorFactory} from './Navigation/NavigatorFactory';
import { store } from "./Store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigatorFactory />
      </NavigationContainer>
    </Provider>
  );
}
