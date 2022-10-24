import { StyleSheet } from 'react-native';
import { colors, wp, hp, fontFamily } from '../../../services';

export const styles = StyleSheet.create({
    shadeStyle: {
        width: wp(12),
        height: wp(12),
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: "white",
        borderRadius: wp(12 / 2),
        marginHorizontal: wp(3),
        borderColor: colors.borderLight,
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp(2)
    },
    borderStyle: {
        width: wp(12),
        height: wp(12),
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: wp(12 / 2),
        marginHorizontal: wp(3),
        borderColor: colors.borderLight,
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp(2)
    },
    renderCatImage: {
        width: wp(7),
        height: wp(7)
    },
    renderTextView: {
        marginTop: hp(.5),
    },
    renderText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 10,
        textAlign: "center"
    },
    mainView: {
        backgroundColor: colors.backgrondLight,
        paddingHorizontal: wp(4),
        marginTop: hp(1)
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
        fontWeight: "400",
        //fontFamily: fontFamily.appTextRegular,
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
        width: wp(40),
        marginTop: hp(3),
    },
    containerStyle: {
        height: hp(3.5),
        marginBottom: hp(2),
    },
    buttonText: {
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular
    },
    homeImageView: {
        position: "absolute",
        top: hp(8),
        right: wp(-.6)
    },
    homeImage: {
        width: wp(42),
        height: wp(42)
    },
    searchView: {
        marginTop: hp(6.5)
    },
    categoryView: {
        marginTop: hp(1.5),
        paddingHorizontal: wp(5.4)
    },
    categoryText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
    },
    nearByText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        paddingHorizontal: wp(5.4),
        marginTop: hp(2),
        marginBottom: hp(2)
    }

})