import React, { Component } from 'react';
import Styles from '../Styles/MainStyle';
import { View, Text, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Home extends Component {
    render() {
        return (
            <View style={Styles.page}>
                <LinearGradient
                    colors={['rgb(66, 249, 194)', 'rgb(23, 155, 115)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={Styles.page_header_gradient}
                >
                    <Image source={require('../../Assets/Images/wave.png')} style={Styles.page_header_wave} />
                    <View style={Styles.page_header}>
                        <View>
                            <Text style={[Styles.page_header_main_content, Styles.normal_text, Styles.user_name]}>Hi! Radhitia Pratama</Text>
                            <Text style={[Styles.page_header_main_content, Styles.normal_text, Styles.app_name]}>Agenda</Text>
                            <Text style={[Styles.page_header_main_content, Styles.bold_text, Styles.app_name]}>KBM</Text>
                        </View>
                        <View>
                            <Text style={[Styles.page_header_main_content, Styles.normal_text, Styles.app_time, { marginTop: 24 }]}>09</Text>
                            <Text style={[Styles.page_header_fade_content, Styles.normal_text, Styles.app_time, { marginTop: -3 }]}>47</Text>
                        </View>
                    </View>
                </LinearGradient>
                <LinearGradient
                    colors={['rgb(131, 250, 214)', 'rgb(109, 199, 171)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={Styles.wave_illusion}
                >
                    <View style={Styles.wave_illusion_cover}></View>
                    <View style={Styles.floating_header}>
                        <View style={Styles.icon_box}>
                            <Image source={require('../../Assets/Icons/user-clock.png')} style={Styles.icon} />
                        </View>
                        <View style={Styles.floating_banner_title_box}>
                            <Text style={Styles.floating_banner_title}>Jadwal Kelas Anda Hari Ini</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View style={Styles.content_wrapper}>
                    <View style={Styles.content_header}>
                        <Text style={Styles.content_header_text}>XII RPL 1</Text>
                        <Text style={[Styles.content_header_text, Styles.day_name]}>senin</Text>
                        <Text style={Styles.content_header_text}>21 Agt 2023</Text>
                    </View>
                    <ScrollView style={Styles.content_list}>
                        <View style={Styles.null_card}>
                            <Image style={Styles.null_icon} source={require('../../Assets/Icons/books.png')} />
                            <Text style={Styles.null_text}>Tidak Ada Jadwal Kelas</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Home;