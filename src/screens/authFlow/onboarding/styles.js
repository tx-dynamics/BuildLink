import { StyleSheet } from 'react-native';
import { colors, fontFamily, hp, wp } from '../../../services';

export const styles = StyleSheet.create({
    buttonTopView: {
        alignSelf: 'center',
        width: wp(80),
        marginBottom: hp(7)
    },
    topImageIconStyle: {
        width: wp(30),
        height: wp(30),
        resizeMode: 'contain'
    },
    topImageStyle: {
        position: 'absolute',
        right: wp(-2.5),
        top: hp(-4), zIndex: 1
    },
    dotComponentTopView: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: hp(20),
        width: wp(22),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageStyle: {
        width: wp(70),
        height: hp(35),
        resizeMode: 'contain'
    },
    titleTopView: {
        paddingHorizontal: wp(9),
        paddingTop: hp(5)
    },
    titleStyle: {
        fontFamily:
            fontFamily.appTextRegular,
        fontSize: 16,
        color: colors.black,
        textAlign: 'center'
    },
    dotComponentStyle: {
        width: wp(3),
        height: wp(3),
        borderRadius: wp(2),
    },
    dotComponentStyleTwo: {
        width: wp(4.5),
        height: wp(4.5),
        borderRadius: wp(3),
    },
    swiperTopView: {
        width: wp(100),
        height: hp(50),
        alignSelf: 'center',
        paddingHorizontal: wp(3),
        justifyContent: 'center'
    },
})