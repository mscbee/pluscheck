import React from 'react';
import AppNavigator from './components/AppNavigation';
import MainAppView from './components/MainAppView';
import MapView from 'react-native-maps';
import IosMap from './components/IosMap';
import { SafeAreaView } from 'react-native';

const region = {
  latitude: 37.321996988,
  longitude: -122.0325472123455,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

export default class App extends React.Component {
  state = {
    region: null,
    hospitals: []
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <IosMap
          region={region}
          places={this.state.hospitals}
        />
      </SafeAreaView>
      //<IosMap />
     // <AppNavigator />
    );
  }
}

