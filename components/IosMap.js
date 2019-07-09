import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class IosMap extends React.Component { 
      
    
    render() { 
        return ( 
            <MapView 
                flex={1} 
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsMyLocationButton={true}
                showCompass={true}
                showScale={true}
                scrollEnabled={true}
                loadingEnabled={true}
                minZoomLevel={1}
                rotateEnabled={true}
            >
            </MapView>
        );  
    }
}

export default IosMap;
