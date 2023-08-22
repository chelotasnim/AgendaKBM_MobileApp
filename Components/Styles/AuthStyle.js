import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    page: {
        minHeight: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)'
    },
    form_frame: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form_header: {
        marginBottom: 32,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    app_image: {
        width: 50,
        height: 50
    },
    form_title: {
        marginBottom: 2,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: 'rgb(150, 150, 150)'
    },
    form_subtitle: {
        marginBottom: 24,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'rgb(200, 200, 200)'
    },
    input_group: {
        marginBottom: 14
    },
    form_label: {
        position: 'absolute',
        paddingHorizontal: 5,
        marginBottom: 5,
        backgroundColor: 'rgb(255, 255, 255)',
        pointerEvents: 'none',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: 'rgb(150, 150, 150)'
    },
    focused_label: {
        color: 'rgb(29, 175, 131)'
    },
    form_input: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        minWidth: 275,
        borderWidth: 1,
        borderColor: 'rgb(225, 225, 225)',
        borderRadius: 3,
        fontSize: 16,
        color: 'rgb(100, 100, 100)'
    },
    focused_input: {
        borderColor: 'rgb(29, 175, 131)'
    },
    form_button: {
        marginTop: 16,
        minWidth: 275,
        padding: 16,
        borderRadius: 3,
        backgroundColor: 'rgb(29, 175, 131)'
    },
    button_text: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: 'rgb(255, 255, 255)'
    },
    form_footer_text: {
        marginTop: 14,
        textAlign: 'right',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'rgb(150, 150, 150)'
    },
    link: {
        color: 'rgb(29, 175, 131)'
    }
});

export default Styles;