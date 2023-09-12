import React, { Component, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles/MainStyle';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../Config';

const Schedules = (data) => {
    return (
        <View style={Styles.schedule_box}>
            <View style={Styles.schedule_header}>
                <Text style={Styles.schedule_name}>Jam Ke {data.schedule.jam_ke}</Text>
                <Text style={[Styles.schedule_status, { backgroundColor: data.schedule.bg, color: data.schedule.color }]}>{data.schedule.keterangan}</Text>
            </View>
            <View style={Styles.schedule_detail}>
                <Text style={Styles.schedule_subject}>{data.schedule.guru_mapel.mapel.nama_mapel}</Text>
                <Text style={Styles.schedule_teacher}>~ {data.schedule.guru_mapel.guru.name}</Text>
            </View>
            <View style={Styles.schedule_range}>
                <Text style={Styles.schedule_time}>{data.schedule.mulai}</Text>
                <Text style={Styles.time_separator}>/</Text>
                <Text style={Styles.schedule_time}>{data.schedule.selesai}</Text>
            </View>
        </View>
    );
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                grade: ''
            },
            time: '',
            data: [],
            token: '',
            found: ''
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
                    grade: `${result.data.main_data.kelas.jenjang.jenjang} ${result.data.main_data.kelas.name}`
                },
                time: result.data.now_date,
                data: result.data.main_data.kelas.jadwal
            });
        });
    }

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
                            <Image source={require('../../Assets/Icons/user-clock.png')} style={Styles.icon} />
                        </View>
                        <View style={Styles.floating_banner_title_box}>
                            <Text style={Styles.floating_banner_title}>Jadwal Kelas Anda Hari Ini</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View style={Styles.content_wrapper}>
                    <View style={Styles.content_header}>
                        <Text style={Styles.content_header_text}>{this.state.user.grade}</Text>
                        <Text style={[Styles.content_header_text, Styles.day_name]}>{this.state.time.day_name}</Text>
                        <Text style={Styles.content_header_text}>{this.state.time.date}</Text>
                    </View>
                    <ScrollView style={Styles.content_list}>
                        {/* <View style={Styles.null_card}>
                            <Image style={Styles.null_icon} source={require('../../Assets/Icons/books.png')} />
                            <Text style={Styles.null_text}>Tidak Ada Jadwal Kelas</Text>
                        </View> */}
                        {
                            this.state.data.map((data) => <Schedules key={data.id} schedule={data} />)
                        }
                    </ScrollView>
                </View>
            </View>
        );
    };
};

export default Home;