import React from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from './components/Heading';
import HospitalList from './components/HospitalList';

export default function App() {
  return (
      <Heading style={{width: 100, height: 100,}}/>,
    //  <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <HospitalList />
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
