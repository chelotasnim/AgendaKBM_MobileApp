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
        height: 68,
        paddingLeft: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 8,
        elevation: 2
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
        elevation: 2
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
        marginTop: 12,
        minHeight: '65%',
        maxHeight: '65%'
    },
    null_card: {
        width: '100%',
        paddingVertical: 64,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(225, 225, 225)'
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
        marginTop: 20
    },
    profile_row: {
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    profile_box: {
        elevation: 1
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
        elevation: 2
    },
    slide_value: {
        padding: 24,
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 8,
        elevation: 2
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
    }
});

export default Styles;