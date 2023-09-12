import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    page: {
        minHeight: '100%',
        backgroundColor: 'rgb(245, 245, 245)'
    },
    page_header: {
        paddingTop: 40,
        paddingBottom: 85,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomRightRadius: 75,
        overflow: 'hidden'
    },
    page_header_gradient: {
        borderBottomRightRadius: 75,
    },
    page_header_wave: {
        position: 'absolute',
        bottom: -5,
        left: 0,
        width: '100%',
        height: '75%',
        transform: [{ scaleX: -1 }],
        opacity: .6
    },
    page_header_main_content: {
        textTransform: 'uppercase',
        color: 'rgb(255, 255, 255)'
    },
    page_header_fade_content: {
        textTransform: 'uppercase',
        color: 'rgba(255, 255, 255, .6)'
    },
    normal_text: {
        fontFamily: 'Montserrat-Regular',
    },
    bold_text: {
        fontFamily: 'Montserrat-Bold'
    },
    user_name: {
        marginBottom: 8,
        letterSpacing: 1,
        fontSize: 12
    },
    app_name: {
        lineHeight: 32,
        fontSize: 32
    },
    app_time: {
        textAlign: 'center',
        lineHeight: 32,
        fontSize: 32
    },
    wave_illusion: {
        marginTop: -1,
        width: '100%',
        height: 75
    },
    wave_illusion_cover: {
        position: 'absolute',
        width: '100%',
        height: '102%',
        backgroundColor: 'rgb(245, 245, 245)',
        borderTopLeftRadius: 75
    },
    floating_header: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 24,
        transform: [{ translateY: -32 }],
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    icon_box: {
        width: 68,
        minHeight: 68,
        paddingLeft: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 8,
    },
    icon: {
        width: 35,
        height: 35
    },
    floating_banner_title_box: {
        padding: 24,
        flex: 1,
        marginLeft: 5,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 8,
    },
    floating_banner_title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'rgb(100, 100, 100)'
    },
    content_wrapper: {
        paddingHorizontal: 24,
    },
    content_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content_header_text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'rgb(125, 125, 125)'
    },
    content_list: {
        marginTop: 20,
        minHeight: '57%',
        maxHeight: '57%'
    },
    null_card: {
        width: '100%',
        paddingVertical: 64,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'rgb(255, 255, 255)',
    },
    null_icon: {
        width: 150,
        height: 150,
        opacity: .18
    },
    null_text: {
        marginTop: 5,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: 'rgb(205, 205, 205)'
    },
    day_name: {
        textTransform: 'capitalize'
    },
    profile_container: {
        marginTop: 20,
        maxHeight: '70%'
    },
    profile_row: {
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    form_button: {
        marginTop: 16,
        width: '100%',
        padding: 18,
        borderRadius: 5,
        backgroundColor: 'rgb(32, 201, 151)'
    },
    button_text: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: 'rgb(255, 255, 255)'
    },
    slide_btn: {
        width: 50,
        height: 68,
        paddingLeft: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 8,
    },
    slide_value: {
        padding: 24,
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 8,
    },
    slide_value_text: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'rgb(100, 100, 100)'
    },
    slide_btn_icon: {
        width: 24,
        height: 24
    },
    nav_icon: {
        width: 30,
        height: 30
    },
    schedule_box: {
        marginTop: 8,
        borderRadius: 5,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    schedule_header: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    schedule_name: {
        fontSize: 12
    },
    schedule_status: {
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 3,
        fontSize: 12
    },
    schedule_detail: {
        paddingTop: 12,
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderWidth: 1,
        borderColor: 'rgb(235, 235, 235)'
    },
    schedule_subject: {
        marginBottom: 5,
        fontSize: 20
    },
    schedule_teacher: {
        fontSize: 16
    },
    schedule_range: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    schedule_time: {
        fontSize: 16
    },
    time_separator: {
        fontSize: 20,
        color: 'rgb(200, 200, 200)'
    },
    name_format: {
        textTransform: 'capitalize'
    }
});

export default Styles;