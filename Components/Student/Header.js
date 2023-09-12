import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles/MainStyle';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: 0,
            minutes: 0,
            minutes_opacity: 1
        };
    };

    componentDidMount() {
        this.getNewTime();
        this.startTimeGetter();

        this.minutesBlink();
    };

    getNewTime() {
        const datetime = new Date();
        let hours = datetime.getHours();
        let minutes = datetime.getMinutes();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        this.setState({
            hours,
            minutes
        });
    };

    startTimeGetter() {
        setInterval(() => {
            this.getNewTime();
        }, 1000);
    };

    minutesBlink() {
        setInterval(() => {
            this.setState({ minutes_opacity: 0 });
            setTimeout(() => {
                this.setState({ minutes_opacity: 1 });
            }, 500);
        }, 1000);

    };

    render() {
        return (
            <LinearGradient
                colors={['rgb(66, 249, 194)', 'rgb(23, 155, 115)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={Styles.page_header_gradient}
            >
                <Image source={require('../../Assets/Images/wave.png')} style={Styles.page_header_wave} />
                <View style={Styles.page_header}>
                    <View>
                        <Text style={[Styles.page_header_main_content, Styles.normal_text, Styles.user_name]}>Hi! {this.props.data}</Text>
                        <Text style={[Styles.page_header_main_content, Styles.normal_text, Styles.app_name]}>Agenda</Text>
                        <Text style={[Styles.page_header_main_content, Styles.bold_text, Styles.app_name]}>KBM</Text>
                    </View>
                    <View>
                        <Text style={[Styles.page_header_main_content, Styles.normal_text, Styles.app_time, { marginTop: 24 }]}>
                            {this.state.hours}
                        </Text>
                        <Text style={[Styles.page_header_fade_content, Styles.normal_text, Styles.app_time, {
                            marginTop: -3,
                            opacity: this.state.minutes_opacity
                        }]}>
                            {this.state.minutes}
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        );
    };
};

export default Header;