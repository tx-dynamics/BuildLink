import { StyleSheet } from 'react-native';
import { colors, fontFamily, hp, wp } from '../../../services';

export const styles = StyleSheet.create({
    bgImageView: {
        alignItems: "center",
        top: -5
    },
    bgStyle: {
        width: wp(101.5),
        height: hp(28),
    },
    topSingleImageStyle: {
        width: wp(35),
        height: hp(20),
        position: "absolute",
        bottom: hp(5),
        right: hp(6)
    },
    titleView: {
        marginTop: hp(-2),
        marginLeft: wp(5)
    },
    welcomeText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12.1
    },
    loginText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextBold,
        fontSize: 20.07
    },
    textInputView: {
        alignItems: "center",
        marginTop: hp(5.2)
    },
    passwordView: {
        alignItems: "center",
        marginTop: hp(.5),
        height: hp(10)

    },
    buttonView: {
        alignSelf: "center",
        marginTop: hp(4)
    },
    buttonStyle: {
        width: wp(40),
        height: hp(5.5)
    },
    signUpView: {
        marginTop: hp(9),
        alignItems: "center"
    },
    signUpText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 14
    },
    flatListView: {
        alignItems: "center",
        marginTop: hp(2)
    },
    socialImagesView: {
        justifyContent: "center",
        alignItems: "center",
        width: wp(12),
        height: wp(12),
        borderRadius: 50,
        backgroundColor: colors.inputBg,
        marginHorizontal: wp(2)
    },
    socailImageStyle: {
        width: wp(7),
        height: wp(7)
    },
})