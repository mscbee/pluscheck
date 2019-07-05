import React from 'react';
import IosMap from './IosMap';
import { View } from 'react-native';
import YelpService from './Yelp';
import { Location } from 'expo-location';
import { Permissions } from 'expo-permissions';

const deltas = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
};

export default class MapResults extends React.Component {

    state = {
        region: null,
        hospitals: []
    }


    componentWillMount() {
        this.getLocationAsync();
      }
    
      getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied'
          });
        }

        let location = await Location.getCurrentPositionAsync({});
        const region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        ...deltas
        };
        await this.setState({ region });
        await this.getHospitals();

     }

    

    getHospitals = async () => {
        const { latitude, longitude } = this.state.region;
        const userLocation = { latitude, longitude };
        const hospitals = await YelpService.getHospitals(userLocation);
        this.setState({ hospitals });
      };


    render() {
        const { region, hospitals } = this.state;
        return(
            <View style={{flex:1}}>
                <IosMap
                region={region}
                places={hospitals}
                />
            </View>

        );
    }
}