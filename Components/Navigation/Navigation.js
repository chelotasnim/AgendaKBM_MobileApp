import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Student/Home';
import Schedule from '../Student/Schedule';
import Profile from '../Student/Profile';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderTopWidth: 0,
                        backgroundColor: 'white',
                        position: 'absolute',
                        bottom: 20,
                        marginHorizontal: 20,
                        height: 60,
                        borderRadius: 8,
                        elevation: 0,
                        borderWidth: 1,
                        borderTopWidth: 1,
                        borderColor: 'rgb(225, 225, 225)'
                    }
                }}>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Schedule" component={Schedule} />
                    <Tab.Screen name="Profile" component={Profile} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigation;