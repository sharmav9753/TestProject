import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    alignSelf: 'center',
  },
});

const DemoScreen = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
          <Text style={styles.message}>This is a demo screen</Text>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default DemoScreen;
