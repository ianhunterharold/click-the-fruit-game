/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import Coconut from './src/components/Coconut';

import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';


const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <View>
        <Coconut />
      </View>
    </SafeAreaView>
  );
};

export default App;
