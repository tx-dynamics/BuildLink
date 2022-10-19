import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    titleText: {
        color: colors.black,
        fontSize: 13,
        fontFamily: fontFamily.appTextBold
    },
    skilledPic: {
        width: wp(20),
        height: wp(20),
        marginHorizontal: wp(1.5),
        borderRadius: wp(4),
        backgroundColor: "blue"
    },
    paddingView: {
        paddingHorizontal: wp(5)
    },
    nameTextInput: {
        backgroundColor: colors.whitish,
        borderRadius: wp(4),
        height: hp(6)
    },
    phoneText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        marginBottom: hp(-2)
    },
    subView: {
        flexDirection: "row",
        alignItems: "center"
    },
    countryPickerView: {
        backgroundColor: colors.whitish,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: wp(3),
        height: hp(6),
        top: hp(-.4)
    },
    themeView: {
        fontSize: 13,
        fontFamily: fontFamily.appTextRegular,
        flagSizeButton: 14,
    },
    dropDownImg: {
        width: wp(3.5),
        height: wp(3.5),
        marginHorizontal: wp(1.5),
        tintColor: colors.black
    },
    typeInputView: {
        marginLeft: wp(2),
        backgroundColor: colors.whitish,
        width: wp(63.5),
        borderRadius: wp(4),
        height: hp(6)
    },
    locationInput: {
        backgroundColor: colors.whitish,
        borderRadius: wp(4),
        height: hp(6)
    },
    yourWorkText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
    },
    addImg: {
        marginHorizontal: wp(1),
        width: wp(20.5),
        height: wp(20.5),
        borderRadius: wp(4),
    },
    btnView: {
        width: wp(40),
        alignSelf: "center",
        marginTop: hp(12)
    },
    btnContainerView: {
        borderRadius: wp(3)
    }
})