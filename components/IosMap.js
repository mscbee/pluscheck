import React from 'react';
import { MapView } from 'react-native-maps';

export default class Iosmap extends React.Component {  
    render() {    
        return ( 
        <View>
            {/* <Button
            title="Return to home screen"
            onPress={() =>
                this.props.navigation.navigate('MainAppView')
            } /> */}
            
            <MapView 
                style={{flex: 1}}
                initialRegion={geolocation.getCurrentPosition()}
                //showsUserLocation={true} 
            /> 
        </View>        
        );  
    }
}

