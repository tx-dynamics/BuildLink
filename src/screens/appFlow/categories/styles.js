import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    catMainView: {
        marginHorizontal: wp(4),
        width: wp(35),
        height: wp(32),
        borderRadius: wp(3),
        borderColor: colors.catBorder,
        borderWidth: 1,
        alignItems: "center",
        marginTop: hp(3)
    },
    catSubView: {
        backgroundColor: colors.grey,
        alignItems: "center",
        justifyContent: "center",
        width: wp(17),
        height: wp(17),
        borderRadius: wp(50),
        marginTop: hp(2)
    },
    catImage: {
        width: wp(10),
        height: wp(10),
    },
    catText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 11,
        marginTop: hp(2)
    },
    subView: {
        marginTop: hp(1),
    },
    adressText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12,
        alignSelf: "center",
        marginTop: hp(-1)
    },
    subText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12,
        marginTop: hp(3),
        paddingHorizontal: wp(4)
    },

})