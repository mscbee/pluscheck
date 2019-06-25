import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from './Heading';

export default function App() {
  return (
    <View>
      <Heading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
