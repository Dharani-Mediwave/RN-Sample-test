/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import AppNavigator from "./src/navigation/Navigator";
import { CheckNetwork } from './src/components';

const App = () => {

  const [isNetwork, setNetwork] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {isNetwork ?
        <AppNavigator /> :
        <CheckNetwork isConnected={isNetwork} setConnected={setNetwork} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
