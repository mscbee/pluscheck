import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class IosMap extends React.Component { 
      
    
    render() { 
        //const { region } = this.props
 
        return ( 
            <MapView 
                flex={1} 
                //region={region}
                showsUserLocation={true}
                showsMyLocationButton={true}
            >
            </MapView>

        );  
    }
}

export default IosMap;

