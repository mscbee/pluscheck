import React from 'react';
import { MapView } from 'react-native-maps';

export default class Iosmap extends React.Component {  
    render() {    
        return ( 
            <MapView 
                style={{flex: 1}}
                initialRegion={geolocation.getCurrentPosition()}
            />
        );  
    }
}

