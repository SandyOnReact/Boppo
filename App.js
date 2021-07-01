import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RootNavigator } from './app/navigators';

const App = () => {
  return (
    <View style={styles.rootContainer}>
      <RootNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
