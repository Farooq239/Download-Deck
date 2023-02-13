import React from 'react'

import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';

const App = () => {
  return (
    <View style={styles.navigationContainer} >
      {/* <Text >Download Deck</Text> */}
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
  },
});


export default App;
