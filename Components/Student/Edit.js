import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles/MainStyle';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../Config';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                fullname: '',
                username: '',
                email: ''
            },
            token: ''
        };
    };

    componentDidMount() {
        this.get_data();
    };

    async get_data() {
        const token = await AsyncStorage.getItem('auth_token');
        this.setState({ token: token });

        axios.get(`${BASE_URL}student/today`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.token}`
            }
        }).then(result => {
            let user_name = result.data.main_data.name.split(' ');
            let name = '';
            if (user_name.length > 1) {
                name = user_name[0] + ' ' + user_name[1];
            } else {
                name = user_name[0];
            };

            this.setState({
                user: {
                    name,
                    fullname: result.data.main_data.name,
                    username: result.data.main_data.username,
                    email: result.data.main_data.email
                }
            });
        });
    };

    render() {
        return (
            <View style={Styles.page}>
                <Header data={this.state.user.name} />
                <LinearGradient
                    colors={['rgb(131, 250, 214)', 'rgb(109, 199, 171)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={Styles.wave_illusion}
                >
                    <View style={Styles.wave_illusion_cover}></View>
                    <View style={Styles.floating_header}>
                        <View style={Styles.icon_box}>
                            <Image source={require('../../Assets/Icons/profile.png')} style={Styles.icon} />
                        </View>
                        <View style={Styles.floating_banner_title_box}>
                            <Text style={Styles.floating_banner_title}>Edit Profile Akun Anda</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View style={Styles.content_wrapper}>
                    <View style={Styles.content_header}>
                        <Text style={Styles.content_header_text}>Status Akun :</Text>
                        <Text style={Styles.content_header_text}>Akun Siswa</Text>
                    </View>
                    <ScrollView style={Styles.profile_container}>
                        <View style={Styles.profile_row}>
                            <View style={Styles.icon_box}>
                                <Image source={require('../../Assets/Icons/user-tag.png')} style={Styles.icon} />
                            </View>
                            <View style={[Styles.floating_banner_title_box, Styles.floating_banner_title_input]}>
                                <TextInput placeholder='Wajib Mengisi Nama' style={[Styles.floating_banner_title, Styles.name_format]}>{this.state.user.fullname}</TextInput>
                            </View>
                        </View>
                        <View style={Styles.profile_row}>
                            <View style={Styles.icon_box}>
                                <Image source={require('../../Assets/Icons/tag.png')} style={Styles.icon} />
                            </View>
                            <View style={[Styles.floating_banner_title_box, Styles.floating_banner_title_input]}>
                                <TextInput placeholder='Wajib Mengisi NISN' style={Styles.floating_banner_title}>{this.state.user.username}</TextInput>
                            </View>
                        </View>
                        <View style={Styles.profile_row}>
                            <View style={Styles.icon_box}>
                                <Image source={require('../../Assets/Icons/at.png')} style={Styles.icon} />
                            </View>
                            <View style={[Styles.floating_banner_title_box, Styles.floating_banner_title_input]}>
                                <TextInput placeholder='Wajib Mengisi Email' style={Styles.floating_banner_title}>{this.state.user.email}</TextInput>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.logout()} style={Styles.form_button}>
                            <Text style={Styles.button_text}>Simpan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={[Styles.form_button, Styles.border_button, Styles.edit_button]}>
                            <Text style={[Styles.button_text, Styles.border_button_text]}>Batalkan</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Edit;