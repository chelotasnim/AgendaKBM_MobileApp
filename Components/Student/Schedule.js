import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
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

const Rest = (data) => {
    return (
        <>
            <View style={Styles.separator_box}>
                <View style={[Styles.separator_line, Styles.left_line]}></View>
                <Text style={Styles.separator}>Istirahat</Text>
                <View style={[Styles.separator_line, Styles.right_line]}></View>
            </View>
            <View style={Styles.schedule_box}>
                <View style={Styles.schedule_header}>
                    <Text style={Styles.schedule_name}>Jam Ke {data.schedule.jam_ke}</Text>
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
        </>
    );
};

const NotFound = () => {
    return (
        <View style={Styles.null_card}>
            <Image style={Styles.null_icon} source={require('../../Assets/Icons/books.png')} />
            <Text style={Styles.null_text}>Tidak Ada Jadwal Kelas</Text>
        </View>
    );
};

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                grade: ''
            },
            time: '',
            yesterday: '',
            tomorrow: '',
            data: [{
                id: 1,
                found: false
            }],
            token: ''
        };
    };

    componentDidMount() {
        this.get_data('today');
    };

    async get_data(day) {
        const token = await AsyncStorage.getItem('auth_token');
        this.setState({ token: token });

        axios.get(`${BASE_URL}student/${day}`, {
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

            let data = this.state.data;
            if (result.data.found == null) {
                data = result.data.main_data.kelas.jadwal;
            };

            this.setState({
                user: {
                    name,
                    grade: `${result.data.main_data.kelas.jenjang.jenjang} ${result.data.main_data.kelas.name}`
                },
                time: result.data.now_date,
                yesterday: result.data.yesterday,
                tomorrow: result.data.tomorrow,
                data: data
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
                        <TouchableOpacity onPress={() => this.get_data(this.state.yesterday)} style={Styles.slide_btn}>
                            <Image source={require('../../Assets/Icons/chevron-left.png')} style={[Styles.slide_btn_icon, Styles.prev_btn]} />
                        </TouchableOpacity>
                        <View style={Styles.slide_value}>
                            <Text style={Styles.slide_value_text}>{this.state.time.day_name}</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.get_data(this.state.tomorrow)} style={Styles.slide_btn}>
                            <Image source={require('../../Assets/Icons/chevron-right.png')} style={[Styles.slide_btn_icon, Styles.next_btn]} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <View style={Styles.content_wrapper}>
                    <View style={Styles.content_header}>
                        <Text style={Styles.content_header_text}>{this.state.user.grade}</Text>
                        <Text style={[Styles.content_header_text, Styles.day_name]}>{this.state.time.day_name}</Text>
                        <Text style={Styles.content_header_text}>{this.state.data.length} Jam</Text>
                    </View>
                    <ScrollView style={Styles.content_list}>
                        {
                            this.state.data.map((data) => {
                                if (data.found === false) {
                                    return <NotFound key={data.id} />
                                };

                                if (data.rest === true) {
                                    return <Rest key={data.id} schedule={data} />;
                                };
                                return <Schedules key={data.id} schedule={data} />;
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    };
};

export default Schedule;