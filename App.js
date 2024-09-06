import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import EventCreationScreen from './src/components/EventCreationScreen';
import EventDiscoveryScreen from './src/components/EventDiscoveryScreen';
import ChatScreen from './src/components/ChatScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to HausFestApp!</Text>
      <EventCreationScreen />
      <EventDiscoveryScreen />
      <ChatScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;