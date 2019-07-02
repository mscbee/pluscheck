import React from 'react';
import { MapView } from 'react-native-maps';

export default class Iosmap extends React.Component {  
    render() {    
        return ( 
        <View>
            <Button
            title="Return to home screen"
            onPress={() =>
                this.props.navigation.navigate('MainAppView')
            } />
            
            <MapView 
                style={{flex: 1}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                //showsUserLocation={true} 
            /> 
        </View>        
        );  
    }
}

