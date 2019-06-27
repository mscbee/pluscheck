import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

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
                    <Text>Map</Text>
                </TouchableHighlight> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:200,
       // marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor: 'white',

    },
})

export default Map;