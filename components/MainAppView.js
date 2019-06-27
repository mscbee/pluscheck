import React from 'react';
import { View, StyleSheet } from 'react-native';
import Map from './Map';
import Logo from './Logo';

class MainAppView extends React.Component {
    render() {
        return(
            <View style={styles.mainAppView} >
                <Logo />
                <Map />
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