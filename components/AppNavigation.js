import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainAppView from './MainAppView';
import IosMap from './IosMap';

const AppNavigator = createStackNavigator(
    {
        MainAppView: MainAppView,
        IosMap: IosMap
    },
    {
        initialRouteName: "MainAppView"
    }
);

  export default createAppContainer(AppNavigator);