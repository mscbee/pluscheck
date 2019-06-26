import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

class Map extends React.Component {

    handleMapTap = () => {
        alert('Hospital List')
    }
    render() {
        return(
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
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
    },
  });

export default Map;