import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

class Session extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const sessionValidation = async () => {
            const authentication = await AsyncStorage.getItem('auth_token');
            if (authentication) {
                this.props.navigation.navigate('Home');
            } else {
                this.props.navigation.navigate('Login');
            };
        };
        sessionValidation();
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    };
}

export default Session;