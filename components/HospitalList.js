import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'; 

class HospitalList extends Component {

    returnToMainPage = () => {  
        this.props.navigation.navigate("MainAppView") 
        
    }

    render() {
        return(
            <View>
                <Button title={'Press'} onPress={this.returnToMainPage}>
                    <Text>Hospital List</Text>
                </Button>
            </View>
        );
    }
}

export default HospitalList;