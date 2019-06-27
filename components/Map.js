import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Image } from 'react-native';

class Map extends React.Component {
    handleMapTap = () => {
        alert('Hospital List')
    }

    render() {
        return (
            <View>
                <TouchableHighlight 
                 style={styles.container} 
                 onPress={this.handleMapTap}
                >
                    <Image source={require('../assets/map.png')} /> 
                </TouchableHighlight> 
            </View>
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