import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapDiagram from './MapDiagram';
import Logo from './Logo';
import MapView from 'react-native-maps';


class MainAppView extends React.Component {
    render() {
        return(
            <View style={styles.mainAppView} >
                <Logo />
                <MapDiagram />
                <MapView />
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