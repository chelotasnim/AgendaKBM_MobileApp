import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';

class Session extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        };
    };

    componentDidMount() {
        this.check_auth();
    };

    componentDidUpdate() {
        this.check_auth();
    };

    async check_auth() {
        const token = await AsyncStorage.getItem('auth_token');
        if (token === null) {
            this.props.navigation.navigate('Login');
        };

        this.setState({ token: token });
    };

    render() {
        return (
            <></>
        );
    };
}

export default Session;