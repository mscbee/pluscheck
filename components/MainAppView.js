import React from 'react';
import { View } from 'react-native';
import Map from './Map';
import Logo from './Logo';

class MainAppView extends React.Component {
    render() {
        return(
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between'}} >
                <Logo />
                <Map />
            </View>
        );
    }
};

export default MainAppView;