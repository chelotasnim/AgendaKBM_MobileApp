import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Animated, FlatList } from 'react-native';
import Styles from '../Styles/AuthStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../Config';

class Login extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            email_focused: false,
            password_focused: false,
            email_value: '',
            password_value: '',
            email_label_pos: new Animated.ValueXY({ x: 16, y: 15 }),
            password_label_pos: new Animated.ValueXY({ x: 16, y: 15 }),
            notifications: [],
            refresh: false
        };
    }

    handleInputFocus = (inputType, isFocused) => {
        const {
            email_label_pos,
            password_label_pos,
            email_value,
            password_value,
        } = this.state;

        const targetX = isFocused || (inputType === 'email' && email_value) || (inputType === 'password' && password_value) ? 8 : 16;
        const targetY = isFocused || (inputType === 'email' && email_value) || (inputType === 'password' && password_value) ? -12 : 15;

        const labelPosition = inputType === 'email' ? email_label_pos : password_label_pos;

        Animated.parallel([
            Animated.timing(labelPosition, {
                toValue: { x: targetX, y: targetY },
                duration: 100,
                useNativeDriver: false,
            })
        ]).start();

        if (inputType === 'email') {
            this.setState({ email_focused: isFocused });
        } else if (inputType === 'password') {
            this.setState({ password_focused: isFocused });
        };
    };

    handleInputChange = (inputType, value) => {
        if (inputType === 'email') {
            this.setState({ email_value: value });
        } else if (inputType === 'password') {
            this.setState({ password_value: value });
        };
    };

    removeNotif = (index) => {
        let current_notif = this.state.notifications;
        current_notif.splice(index, 1);

        this.setState({ notifications: current_notif });
    };

    sendData = async () => {
        const credentials = {
            email: this.state.email_value,
            password: this.state.password_value
        };

        axios.post(`${BASE_URL}login`, credentials, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(result => {
            this.setState({ notifications: [] });
            this.textInput.current.clear();
            this.setState({ email_value: '', password_value: '' });

            if (result.data.token) {
                AsyncStorage.clear();
                AsyncStorage.setItem('auth_token', result.data.token);
                this.props.navigation.navigate('Home');
            } else {
                const notifKeys = Object.keys(result.data.notifications);
                notifKeys.map((key) => {
                    let dumpNotif = this.state.notifications;
                    dumpNotif.push(result.data.notifications[key][0]);

                    this.setState({ notifications: dumpNotif });
                });

                this.setState({ refresh: true });
                this.handleInputFocus('email', false);
                this.handleInputFocus('password', false);
            };
        }).catch(err => console.log('err: ', err));
    };

    render() {
        const {
            email_focused,
            password_focused,
            email_label_pos,
            password_label_pos,
            email_value,
            password_value,
        } = this.state;

        return (
            <View style={Styles.page}>
                <View style={Styles.alert_container}>
                    <FlatList
                        data={this.state.notifications}
                        refreshing={this.state.refresh}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.removeNotif(index)} style={[Styles.alert_box, Styles.transparent_box]}>
                                <Image source={require('../../Assets/Icons/fail.png')} style={Styles.alert_icon} />
                                <Text style={Styles.alert_content}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={Styles.form_frame}>
                    <View style={Styles.form_header}>
                        <Image source={require('../../Assets/Images/small_logo.png')} style={Styles.app_image} />
                    </View>
                    <View>
                        <View>
                            <Text style={Styles.form_title}>AGENDA KBM</Text>
                            <Text style={Styles.form_subtitle}>Masuk untuk memulai sesi</Text>
                        </View>
                        <View style={Styles.input_group}>
                            <TextInput
                                ref={this.textInput}
                                style={[
                                    Styles.form_input,
                                    email_focused && Styles.focused_input,
                                ]}
                                value={email_value}
                                onFocus={() => this.handleInputFocus('email', true)}
                                onBlur={() => this.handleInputFocus('email', false)}
                                onChangeText={value => this.handleInputChange('email', value)}
                            />
                            <Animated.Text
                                style={[
                                    Styles.form_label,
                                    email_focused && Styles.focused_label,
                                    {
                                        transform: [
                                            { translateX: email_label_pos.x },
                                            { translateY: email_label_pos.y },
                                        ]
                                    },
                                ]}
                            >
                                Email
                            </Animated.Text>
                        </View>
                        <View style={Styles.input_group}>
                            <TextInput
                                ref={this.textInput}
                                style={[
                                    Styles.form_input,
                                    password_focused && Styles.focused_input,
                                ]}
                                value={password_value}
                                onFocus={() => this.handleInputFocus('password', true)}
                                onBlur={() => this.handleInputFocus('password', false)}
                                onChangeText={value => this.handleInputChange('password', value)}
                                secureTextEntry
                            />
                            <Animated.Text
                                style={[
                                    Styles.form_label,
                                    password_focused && Styles.focused_label,
                                    {
                                        transform: [
                                            { translateX: password_label_pos.x },
                                            { translateY: password_label_pos.y },
                                        ]
                                    },
                                ]}
                            >
                                Password
                            </Animated.Text>
                        </View>
                        <TouchableOpacity onPress={() => this.sendData()} style={Styles.form_button}>
                            <Text style={Styles.button_text}>Masuk</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;
