import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    titleView: {
        marginTop: hp(4),
        marginLeft: wp(5)
    },
    loginText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextBold,
        fontSize: 20
    },
    textInputView: {
        alignItems: "center",
        marginTop: hp(6)
    },
    buttonView: {
        alignSelf: "center",
        marginTop: hp(5.5)
    },
    buttonStyle: {
        width: wp(40),
        height: hp(5.5)
    },
    noteTextView: {
        alignItems: "center",
        paddingHorizontal: wp(12),
        marginTop: hp(20)
    },
    noteText: {
        color: colors.greyDark,
        fontSize: 10,
        textAlign: "center",
        fontFamily: fontFamily.appTextRegular
    },
    bgIMageView: {
        alignItems: "center",
        marginTop: hp(7)
    },
    imageStyle: {
        width: wp(80),
        height: hp(30)
    },
})