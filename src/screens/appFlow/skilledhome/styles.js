import { StyleSheet } from 'react-native';
import { colors, wp, hp, fontFamily } from '../../../services';

export const styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.backgrondLight,
        paddingHorizontal: wp(4),
        marginTop: hp(2)
    },
    subView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: hp(2)
    },
    imageStyle: {
        width: wp(5),
        height: wp(5),
    },
    locationText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12
    },
    downArrowIcon: {
        width: wp(1.5),
        height: wp(1.5),
        alignSelf: "center",
        top: hp(-.4),
        marginLeft: wp(1.5),
        tintColor: colors.black
    },
    profileImageView: {
        width: wp(8),
        height: wp(8),
        borderRadius: wp(5),
        top: hp(-1)
    },
    profileImage: {
        width: wp(8),
        height: wp(8),
        borderRadius: wp(5),
    },
    userNameView: {
        marginTop: hp(2.5)
    },
    userNameText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12
    },
    subText: {
        color: colors.black,
        width: wp(50),
        fontFamily: fontFamily.appTextBold,
        textAlign: "left",
        fontSize: 14,
    },
    buttonView: {
        width: wp(23),
        marginTop: hp(3),
    },
    containerStyle: {
        height: hp(3.7),
        marginBottom: hp(2),
    },
    buttonText: {
        fontSize: 12,
        color: colors.white,
        fontFamily: fontFamily.appTextBold
    },
    homeImageView: {
        position: "absolute",
        top: hp(8),
        right: wp(-.6)
    },
    homeImage: {
        width: wp(40),
        height: wp(40)
    },
    searchView: {
        marginTop: hp(2),
    },
    categoryText: {
        color: colors.black,
        marginTop: hp(4.5),
        fontSize: 13,
        paddingHorizontal: wp(5),
        fontFamily: fontFamily.appTextBold,
    },
    nearByText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 13,
        paddingHorizontal: wp(5),
        marginVertical: hp(2),
    },
    container: {
        alignSelf: "center",
    },
})