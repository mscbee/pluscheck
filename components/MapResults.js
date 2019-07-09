import React from 'react';
import IosMap from './IosMap';
import { View } from 'react-native';
import YelpService from './Yelp';
import { Location } from 'expo-location';
import { Permissions } from 'expo-permissions';
import { Button } from 'react-native-elements';
import get from 'lodash/get';
import pick from 'lodash/pick';

//import Marker from 'react-native-maps';

const deltas = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
};

export default class MapResults extends React.Component {

    state = {
        location: null,
        hospitals: []
    }

    componentWillMount() {
        this.getLocationAsync();
      }

    getHospitals = async () => {
        const coords = get(this.state.location, 'coords');
		const userLocation = pick(coords, ['latitude', 'longitude']);
        const hospitals = await YelpService.getHospitals(userLocation);
        this.setState({ hospitals });
    };
    
    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied'
          });
        }

        let location = await Location.getCurrentPositionAsync({});
        // const region = {
        // latitude: location.coords.latitude,
        // longitude: location.coords.longitude,
        // ...deltas
        // };
        await this.setState({ location });
        await this.getHospitals();

    };


    render() {
        const { location, hospitals } = this.state;
        return(
            <View style={{flex:7}}>
                <IosMap
                location={location}
                places={hospitals}
                />
            </View>

        );
    }
}
