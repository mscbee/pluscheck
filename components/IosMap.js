import React from 'react';
import { MapView } from 'react-native-maps';

class IosMap extends React.Component {  
    render() {    
        return (      
        <MapView 
            style={{flex: 1}}
            region={{ latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.042}}        
            showsUserLocation={true} />    
        );  
    }
}

export default IosMap;
