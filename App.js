import React from 'react';
import AppNavigator from './components/AppNavigation';
import MainAppView from './components/MainAppView';
import MapView from 'react-native-maps';
import MapResults from './components/MapResults';
import { SafeAreaView } from 'react-native';



export default class App extends React.Component {
 
  render() {
    return (
      <MapResults />
      //<IosMap />
     // <AppNavigator />
    );
  }
}

