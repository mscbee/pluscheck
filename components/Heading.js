import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Heading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>+check</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        
    },
})

export default Heading;