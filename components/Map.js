import React from 'react';
import { ScrollView, TouchableHighlight, StyleSheet, Image } from 'react-native';

class Map extends React.Component {
    handleMapTap = () => {
        alert('Hospital List')
    }

    render() {
        return (
            <ScrollView minimumZoomScale={0.9} maximumZoomScale={1} bouncesZoom={true}>
                <TouchableHighlight 
                 style={styles.container} 
                 onPress={this.handleMapTap}
                 underlayColor="white"
                >
                    <Image source={require('../assets/map.png')} /> 
                </TouchableHighlight> 
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Map;