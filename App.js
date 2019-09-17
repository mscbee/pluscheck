import React from 'react';
import MapDiagram from './components/MapDiagram';
import IosMap from './components/IosMap';
import Yelp from './components/Yelp'

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Platform, SafeAreaView } from 'react-native';


const AppNavigator = createStackNavigator({
  MainAppView: {
      screen: MapDiagram,
  },
  IosMap: {
      screen: IosMap,
      }
  },
  {
      initialRouteName: "MainAppView"
  });

const AppContainer = createAppContainer(AppNavigator);

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default class App extends React.Component {

  state = {
    region: null,
    hospitals: []
  };
  
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this.getLocationAsync();
    }
  }
  getHospitals = async () => {
    console.log(this.state.region);
    const { latitude, longitude } = this.state.region;
    console.log(latitude, longitude);
    const userLocation = { latitude, longitude };
    const hospitals = await Yelp.getHospitals(userLocation);
    this.setState({ hospitals });
    console.log(hospitals);
  };

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...deltas
    };
    this.setState({ region });

    this.getHospitals();
  };

  render() {
    const { region, hospitals } = this.state;
    return (
        <AppContainer region={region} hospitals={hospitals}/>
    );
  }
}

