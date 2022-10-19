import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    reviewCompView: {
        backgroundColor: colors.whitish,
        alignItems: "center",
        justifyContent: "center",
        width: wp(26),
        height: hp(11),
        borderRadius: wp(2),
        paddingHorizontal: wp(3),
        marginHorizontal: wp(3),
    },
    sourceView: {
        justifyContent: "center",
        alignItems: "center",
        width: wp(12),
        height: wp(12),
        top: hp(-2),
    },
    sourceImg: {
        width: wp(11),
        height: wp(11),
    },
    nameText: {
        fontSize: 7,
        fontFamily: fontFamily.appTextBold,
        color: colors.black,
        bottom: wp(5.5),
    },
    titleText: {
        fontSize: 7,
        fontFamily: fontFamily.appTextRegular,
        color: colors.black,
        textAlign: "center",
        bottom: wp(5.5),
    }
})