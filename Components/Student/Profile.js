import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles/MainStyle';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Profile extends Component {
    constructor(props) {
        super(props);
    };

    logout = async () => {
        const token = await AsyncStorage.getItem('auth_token');
        fetch('http://192.168.43.84:8000/api/logout', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.token) {
                    AsyncStorage.clear();
                    this.props.navigation.navigate('Login');
                };
            })
    };

    render() {
        return (
            <View style={Styles.page}>
                <Header />
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
                            <Text style={Styles.floating_banner_title}>Profile Akun Anda</Text>
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
                            <View style={[Styles.icon_box, Styles.profile_box]}>
                                <Image source={require('../../Assets/Icons/user-tag.png')} style={Styles.icon} />
                            </View>
                            <View style={[Styles.floating_banner_title_box, Styles.profile_box]}>
                                <Text style={Styles.floating_banner_title}>Radhitia Pratama Effendy</Text>
                            </View>
                        </View>
                        <View style={Styles.profile_row}>
                            <View style={[Styles.icon_box, Styles.profile_box]}>
                                <Image source={require('../../Assets/Icons/tag.png')} style={Styles.icon} />
                            </View>
                            <View style={[Styles.floating_banner_title_box, Styles.profile_box]}>
                                <Text style={Styles.floating_banner_title}>radhitiapratama</Text>
                            </View>
                        </View>
                        <View style={Styles.profile_row}>
                            <View style={[Styles.icon_box, Styles.profile_box]}>
                                <Image source={require('../../Assets/Icons/at.png')} style={Styles.icon} />
                            </View>
                            <View style={[Styles.floating_banner_title_box, Styles.profile_box]}>
                                <Text style={Styles.floating_banner_title}>radhitia@gmail.com</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={Styles.form_button}>
                            <Text style={Styles.button_text}>Keluar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Profile;