import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '../../../services';

export const styles = StyleSheet.create({
    imageStyle: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain'
    },
    subtitleStyle: {
        fontSize: 16,
        fontFamily: fontFamily.appTextLight,
        color: '#666666',
        textAlign: 'center',
        paddingTop: 5
    },
    titleStyle: {
        fontSize: 20,
        fontFamily: fontFamily.appTextSemiBold,
        color: colors.black
    },
    textStyle: {
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular,
        color: colors.black,
    },
    dotComponentActiveStyle: {
        width: 14,
        height: 14,
        borderRadius: 10,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.theme,
    },
    dotComponentStyle: {
        width: 9,
        height: 9,
        borderRadius: 5,
    },
    swiperTopView: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-around'
    },
    imageTopView: {
        alignItems: 'center',
        marginBottom: 50
    }
})