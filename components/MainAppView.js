import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapDiagram from './MapDiagram';
import Logo from './Logo';
import IosMap from './IosMap';
import { createStackNavigator, createAppContainer } from "react-navigation";

class MainAppView extends React.Component {
    render() {
        return(
            <View style={styles.mainAppView} >
                <Logo />
                <MapDiagram />
            </View>
        );
    }
};

const AppNavigator = createStackNavigator({
    map: {
        screen: MapDiagram
    },
    iosmap: {
        screen: IosMap
    } 
  });

const styles = StyleSheet.create({
    mainAppView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
})

export default createAppContainer(AppNavigator);