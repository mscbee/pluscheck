import React from 'react';
import { ScrollView, TouchableHighlight, StyleSheet, Image, Button } from 'react-native';
import AppNavigator from './AppNavigation';
import { createAppContainer } from 'react-navigation';
import { requireNativeComponent } from 'react-native-web/dist/index';




export default class MapDiagram extends React.Component {

    
    handleAddPress = () => {  
        this.props.navigation.navigate("IosMap") 
        
    }
    
    render() {
        return (
            <ScrollView minimumZoomScale={0.9} maximumZoomScale={1} bouncesZoom={true}>
                    <TouchableHighlight 
                    style={styles.container} 
                    underlayColor="white"
                    >
                        <Button title={'hey'} onPress={this.handleAddPress}> 
                            <Image source={require('../assets/map.png')} /> 
                        </Button>
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
