import { StyleSheet } from 'react-native';
import { colors, fontFamily, hp, wp } from '../../../services';

export const styles = StyleSheet.create({
    bgimageView: {
        alignItems: "center",
        width: wp(100),
    },
    bgImgeStyle: {
        //width: wp(104),
        height: hp(31),

    },
    selectionMainView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: hp(1)
    },
    selectionSubView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: wp(2.5),
        marginRight: wp(13),
        marginTop: hp(.8)
    },
    titleView: {
        marginTop: hp(-2.8),
        marginLeft: wp(4)
    },
    loginText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextBold,
        fontSize: 20
    },
    subTitleText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextBold,
        fontSize: 13,
        marginTop: hp(1.5)
    },
    textInputView: {
        alignItems: "center",
        marginTop: hp(3),
    },
    passwordView: {
        alignItems: "center",
        marginTop: hp(.5)
    },
    buttonView: {
        alignSelf: "center",
        marginTop: hp(6)
    },
    buttonStyle: {
        width: wp(40),
        height: hp(5.5),

    },
    selectImageStyle: {
        width: wp(3),
        height: wp(3),
    },
    unselectImageStyle: {
        width: wp(2.5),
        height: wp(2.5),
    },
    selectText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 13
    },
    imageView: {
        width: wp(6)
    },
    flatListStyle: {
        marginLeft: wp(6.5),
    }
})