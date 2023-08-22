import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import Styles from '../Styles/MainStyle';

class Schedule extends Component {
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
                        <View style={Styles.slide_btn}>
                            <Image source={require('../../Assets/Icons/chevron-left.png')} style={[Styles.slide_btn_icon, Styles.prev_btn]} />
                        </View>
                        <View style={Styles.slide_value}>
                            <Text style={Styles.slide_value_text}>Senin</Text>
                        </View>
                        <View style={Styles.slide_btn}>
                            <Image source={require('../../Assets/Icons/chevron-right.png')} style={[Styles.slide_btn_icon, Styles.next_btn]} />
                        </View>
                    </View>
                </LinearGradient>
                <View style={Styles.content_wrapper}>
                    <View style={Styles.content_header}>
                        <Text style={Styles.content_header_text}>XII RPL 1</Text>
                        <Text style={[Styles.content_header_text, Styles.day_name]}>senin</Text>
                        <Text style={Styles.content_header_text}>20 Jam</Text>
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

export default Schedule;