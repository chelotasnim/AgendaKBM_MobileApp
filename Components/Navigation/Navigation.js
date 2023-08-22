import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Auth/Login';

const Tab = createBottomTabNavigator();

class Navigation extends Component {
    render() {
        return (
            <>
                <Tab.Navigator screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: 'white',
                        borderTopWidth: 0
                    },
                }}>
                    <Tab.Screen name="Home" component={Login} />
                </Tab.Navigator>
            </>
        );
    }
}

export default Navigation;