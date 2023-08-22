import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles/MainStyle';
import Header from './Header';

class Home extends Component {
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
    };
};

export default Home;