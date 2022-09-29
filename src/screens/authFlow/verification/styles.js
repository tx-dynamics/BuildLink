import { StyleSheet } from 'react-native';
import { colors, fontFamily, hp, wp } from '../../../services';

export const styles = StyleSheet.create({
    titleView: {
        marginTop: hp(.5),
        marginLeft: wp(5)
    },
    loginText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextBold,
        fontSize: 20
    },
    otpContainer: {
        height: hp(10),
        paddingHorizontal: 35,
        borderRadius: 10,
    },
    otp: {
        width: wp(12.3),
        height: hp(6.2),
        fontFamily: fontFamily.appTextRegular,
        fontSize: 16,
        borderWidth: 0,
        borderRadius: 8,
        backgroundColor: colors.inputBg,
        color: colors.blackLight,
    },
    buttonView: {
        alignSelf: "center",
        marginTop: hp(5.5)
    },
    buttonStyle: {
        width: wp(40),
        height: hp(5.8)
    },
    bgImageView: {
        alignItems: "center",
        marginTop: hp(10),
    },
    imageStyle: {
        width: wp(85),
        height: hp(30)
    },
    OTPView: {
        marginTop: hp(7),
    },
    lastTextView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: hp(5),
        paddingHorizontal: wp(33),
    },
    timeText: {
        color: colors.black,
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular
    },
    resendText: {
        color: colors.greyDark,
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: 13
    },
})