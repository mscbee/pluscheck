import React from 'react';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

class IosMap extends React.Component { 
    
    render() { 
        return ( 
            <MapView 
                flex={1} 
                showsUserLocation
                followsUserLocation={true}
                showsMyLocationButton
                showCompass={true}
                // showScale={true}
                // scrollEnabled={true}
                // loadingEnabled={true}
                // rotateEnabled={true}
                //region={region}
            >
            </MapView>
        );  
    }
}

export default IosMap;
