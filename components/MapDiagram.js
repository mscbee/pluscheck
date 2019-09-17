import React from 'react';
import { ScrollView, TouchableHighlight, StyleSheet, Image, Button } from 'react-native';

export default class MapDiagram extends React.Component {
    
    render() {
        const { location, hospitals } = this.state;
        return (
            <ScrollView minimumZoomScale={0.9} maximumZoomScale={1} bouncesZoom={true}>
            <Image 
              style={styles.logo}
              source={require('../assets/pluscheck.png')} 
            /> 
            <TouchableHighlight 
              style={styles.container} 
              underlayColor="white"
            >                           
            <Image source={require('../assets/map.png')} /> 
            </TouchableHighlight> 
            <Button
              title=" "
              onPress={() => this.props.navigation.navigate('IosMap', {
                region: {location},
                hospitals: {hospitals},
              })}
            />
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 250, 
        height: 250, 
        marginLeft: 55, 
        alignItems:'center', 
        justifyContent:'center'
    },
    container: {
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
