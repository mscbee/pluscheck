import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainAppView from './MainAppView';
import MapView from 'react-native-maps';

const AppNavigator = createStackNavigator(
    {
        MainAppView: MainAppView,
        map: MapView
    },
    {
        initialRouteName: "MainAppView"
    }
);

  export default createAppContainer(AppNavigator);