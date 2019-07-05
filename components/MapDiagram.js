import React from 'react';
import { ScrollView, TouchableHighlight, StyleSheet, Image } from 'react-native';

export default class MapDiagram extends React.Component {

   
    handleAddPress = () => {  
        this.props.navigation.navigate({routeName:'map'})   
    }
    
    render() {
        return (
            <ScrollView minimumZoomScale={0.9} maximumZoomScale={1} bouncesZoom={true}>
                    <TouchableHighlight 
                    style={styles.container} 
                    underlayColor="white"
                    onPress={this.handleAddPress}
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
