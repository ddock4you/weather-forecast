import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellowView}>hello?</Text>
      <Text style={styles.blueView}>okay hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  blueView: {
    flex: 1,
    backgroundColor: 'blue',
  }
});
