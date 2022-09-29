import { StyleSheet } from 'react-native';
import { colors, fontFamily, hp, wp } from '../../../services';

export const styles = StyleSheet.create({
    imageStyle: {
        width: wp(70),
        height: hp(35),
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
        width: wp(3.5),
        height: wp(3.5),
        borderRadius: wp(2),
    },
    dotComponentStyleTwo: {
        width: wp(5),
        height: wp(5),
        borderRadius: wp(3),
    },
    swiperTopView: {
        width: wp(100),
        height: hp(50),
        alignSelf: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    imageTopView: {
        alignItems: 'center',
    }
})