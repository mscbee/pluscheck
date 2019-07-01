import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapDiagram from './MapDiagram';
import Logo from './Logo';
import IosMap from './IosMap';

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

const styles = StyleSheet.create({
    mainAppView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
})

export default MainAppView;