import React from 'react';
import IosMap from './IosMap';
import { SafeAreaView } from 'react-native';

const region = {
    latitude: 51.529500,
    longitude: -0.368720,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

export default class MapResults extends React.Component {
    
    state = {
        region: null,
        hospitals: []
    }

    render() {
        return(
            <SafeAreaView style={{flex:1}}>
                <IosMap
                region={region}
                places={this.state.hospitals}
                />
            </SafeAreaView>

        );
    }
}