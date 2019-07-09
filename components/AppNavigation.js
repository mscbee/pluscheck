import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainAppView from './MainAppView';
import MapResults from './MapResults';

const AppNavigator = createStackNavigator(
    {
        MainAppView: MainAppView,
        map: MapResults
    },
    {
        initialRouteName: "MainAppView"
    }
);

  export default createAppContainer(AppNavigator);