import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Image
} from 'react-native';

class Logo extends React.Component {
    render() {
        return(
            <View> 
             <Image 
                style={styles.logo}
                source={require('../assets/pluscheck.png')} 
            /> 
            </View>
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
})

export default Logo;
