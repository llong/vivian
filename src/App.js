import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import AssemblyLine from './components/AssemblyLine';

// You can modify the props here for testing in web preview.
// The test suite ignores this file.
const App = () => (
  <View style={styles.app}>
    <Text style={styles.baseText}>
      <AssemblyLine stages={['Idea', 'Development', 'Testing', 'Deployment']} />
    </Text>
  </View>
);

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  baseText: {
    fontFamily: 'monospace',
    fontSize: 13,
  },
});

export default App;
