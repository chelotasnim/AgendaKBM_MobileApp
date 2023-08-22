import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Animated, Linking } from 'react-native';
import Styles from '../Styles/AuthStyle';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailFocused: false,
            passwordFocused: false,
            emailValue: '',
            passwordValue: '',
            emailLabelPosition: new Animated.ValueXY({ x: 16, y: 15 }),
            passwordLabelPosition: new Animated.ValueXY({ x: 16, y: 15 })
        };
    }

    handleInputFocus = (inputType, isFocused) => {
        const {
            emailLabelPosition,
            passwordLabelPosition,
            emailValue,
            passwordValue,
        } = this.state;

        const targetX = isFocused || (inputType === 'email' && emailValue) || (inputType === 'password' && passwordValue) ? 8 : 16;
        const targetY = isFocused || (inputType === 'email' && emailValue) || (inputType === 'password' && passwordValue) ? -12 : 15;

        const labelPosition = inputType === 'email' ? emailLabelPosition : passwordLabelPosition;

        Animated.parallel([
            Animated.timing(labelPosition, {
                toValue: { x: targetX, y: targetY },
                duration: 100,
                useNativeDriver: false,
            })
        ]).start();

        if (inputType === 'email') {
            this.setState({ emailFocused: isFocused });
        } else if (inputType === 'password') {
            this.setState({ passwordFocused: isFocused });
        }
    };

    handleInputChange = (inputType, value) => {
        if (inputType === 'email') {
            this.setState({ emailValue: value });
        } else if (inputType === 'password') {
            this.setState({ passwordValue: value });
        }
    };

    render() {
        const {
            emailFocused,
            passwordFocused,
            emailLabelPosition,
            passwordLabelPosition,
            emailValue,
            passwordValue,
        } = this.state;

        return (
            <View style={Styles.page}>
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
                                style={[
                                    Styles.form_input,
                                    emailFocused && Styles.focused_input,
                                ]}
                                value={emailValue}
                                onFocus={() => this.handleInputFocus('email', true)}
                                onBlur={() => this.handleInputFocus('email', false)}
                                onChangeText={value => this.handleInputChange('email', value)}
                            />
                            <Animated.Text
                                style={[
                                    Styles.form_label,
                                    emailFocused && Styles.focused_label,
                                    {
                                        transform: [
                                            { translateX: emailLabelPosition.x },
                                            { translateY: emailLabelPosition.y },
                                        ]
                                    },
                                ]}
                            >
                                Email
                            </Animated.Text>
                        </View>
                        <View style={Styles.input_group}>
                            <TextInput
                                style={[
                                    Styles.form_input,
                                    passwordFocused && Styles.focused_input,
                                ]}
                                value={passwordValue}
                                secureTextEntry
                                onFocus={() => this.handleInputFocus('password', true)}
                                onBlur={() => this.handleInputFocus('password', false)}
                                onChangeText={value => this.handleInputChange('password', value)}
                            />
                            <Animated.Text
                                style={[
                                    Styles.form_label,
                                    passwordFocused && Styles.focused_label,
                                    {
                                        transform: [
                                            { translateX: passwordLabelPosition.x },
                                            { translateY: passwordLabelPosition.y },
                                        ]
                                    },
                                ]}
                            >
                                Password
                            </Animated.Text>
                        </View>
                        <TouchableOpacity style={Styles.form_button}>
                            <Text style={Styles.button_text}>Masuk</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={Styles.form_footer_text}>Belum Punya Akun? <Text style={Styles.link} onPress={() => { Linking.openURL('https://127.0.0.1:8000/regist') }}>Daftar disini.</Text></Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;
