import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    renderView: {
        backgroundColor: colors.catColor,
        padding: 5,
        paddingHorizontal: wp(4),
        alignItems: "center",
        justifyContent: "center",
        marginLeft: wp(3.5),
        borderRadius: wp(4)
    },
    renderCatText: {
        color: colors.black,
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular
    },
    renderPastWorkView: {
        paddingRight: wp(6),
        marginVertical: hp(1.35)
    },
    renderPastWorkImg: {
        width: wp(42),
        height: hp(22),
        borderRadius: wp(2.1)
    },
    notificationImg: {
        width: wp(6),
        height: wp(6),
        alignSelf: "flex-end",
        marginTop: hp(2.5)
    },
    profileImg: {
        width: wp(27),
        height: wp(27),
        borderRadius: wp(27 / 2)
    },
    cameraView: {
        position: "absolute",
        width: wp(5.5),
        height: wp(5.5),
        borderRadius: wp(3),
        backgroundColor: colors.white,
        bottom: hp(.01),
        left: wp(49),
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
    },
    cameraImg: {
        width: wp(3),
        height: wp(3),
    },
    userNameView: {
        marginTop: hp(1),
        alignItems: "center"
    },
    userNameText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 12
    },
    cityText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 11
    },
    starView: {
        flexDirection: "row",
        marginTop: hp(1),
        paddingLeft: wp(14.5)
    },
    startStyle: {
        width: wp(3.5),
        height: wp(3.5),
        marginHorizontal: wp(.4)
    },
    ratingText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 11,
        marginLeft: 10
    },
    categoriesView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: hp(1.5)
    },
    categoriesText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 13
    },
    addImg: {
        width: wp(6),
        height: wp(6),
    },
    catFlatlistView: {
        marginTop: hp(1.5),
        marginLeft: wp(5)
    },
    pastWorkView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: hp(2)
    },
    pastWorkText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 13
    }
})