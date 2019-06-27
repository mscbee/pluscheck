import React from 'react';
import { ScrollView, TouchableHighlight, StyleSheet, Image, Modal, Text } from 'react-native';

class Map extends React.Component {

    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    render() {
        return (
            <ScrollView minimumZoomScale={0.9} maximumZoomScale={1} bouncesZoom={true}>
                <Modal
                animationType="slide"
                //transparent={false}
                visible={this.state.modalVisible}
                presentationStyle="overFullScreen"
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }} />
                <TouchableHighlight 
                 style={styles.container} 
                 onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
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