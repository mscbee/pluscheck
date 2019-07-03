import React from 'react';
import AppNavigator from './components/AppNavigation';
import MainAppView from './components/MainAppView';
import IosMap from './components/IosMap';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <MapView style={{flex: 1}} />
      </View>
       // <AppNavigator />
    );
  }
};

