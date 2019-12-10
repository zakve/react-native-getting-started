/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  StatusBar
} from 'react-native';

// Navigation
import BottomBarNavigator from "./navigation/BottomBarNavigator";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <BottomBarNavigator />
    </Fragment>
  );
};

const styles = StyleSheet.create({

});

export default App;
