import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import * as Colors from '../../Constants/Colors';
import * as Fonts from '../../Constants/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.baseBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: Fonts.largest,
    fontWeight: Fonts.bold,
    color: Colors.textBlack,
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
