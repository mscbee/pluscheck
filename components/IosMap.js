import React from 'react';
import MapView from 'react-native-maps';

const Marker = MapView.Marker

class IosMap extends React.Component { 
    renderMarkers() {
        return this.props.places.map((place, i) => (
          <Marker key={i} title={place.name} coordinate={place.coords} />
        ))
      }  
    render() { 
        const { region } = this.props   
        return ( 
            <MapView 
                flex={1} 
                region={region}
                showsUserLocation={true}
                showsMyLocationButton={true}
            >
            {this.renderMarkers()}
            </MapView>
        );  
    }
}

export default IosMap;

