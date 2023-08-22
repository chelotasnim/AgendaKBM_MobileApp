import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import Styles from '../Styles/MainStyle';
import Home from '../Student/Home';
import Schedule from '../Student/Schedule';
import Profile from '../Student/Profile';

const Tab = createBottomTabNavigator();

class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let rn = route.name;

                        if (rn === 'Home') {
                            if (focused) {
                                return <Image source={require('../../Assets/Icons/th-list.png')} style={[Styles.nav_icon, { opacity: .3 }]} />
                            } else {
                                return <Image source={require('../../Assets/Icons/th-list.png')} style={Styles.nav_icon} />
                            };
                        } else if (rn === 'Schedule') {
                            if (focused) {
                                return <Image source={require('../../Assets/Icons/calendar.png')} style={[Styles.nav_icon, { opacity: .3 }]} />
                            } else {
                                return <Image source={require('../../Assets/Icons/calendar.png')} style={Styles.nav_icon} />
                            };
                        } else if (rn === 'Profile') {
                            if (focused) {
                                return <Image source={require('../../Assets/Icons/profile.png')} style={[Styles.nav_icon, { opacity: .3 }]} />
                            } else {
                                return <Image source={require('../../Assets/Icons/profile.png')} style={Styles.nav_icon} />
                            };
                        };
                    },
                    tabBarActiveTintColor: 'rgb(32, 201, 151)',
                    tabBarInactiveTintColor: 'rgba(150,150,150,0.7)',
                    tabBarStyle: {
                        backgroundColor: 'white',
                        position: 'absolute',
                        bottom: 20,
                        marginHorizontal: 20,
                        height: 60,
                        borderRadius: 8,
                        shadowColor: '#000000',
                        shadowOpacity: 0.2,
                        shadowOffset: {
                            width: 10,
                            height: 10,
                        },
                        elevation: 0,
                        borderTopWidth: 1,
                        borderTopColor: 'rgb(245, 245, 245)'
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                })}>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Schedule" component={Schedule} />
                    <Tab.Screen name="Profile" component={Profile} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigation;