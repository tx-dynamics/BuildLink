import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    ph3: {
        paddingHorizontal: wp(5)
    },
    planCompView: {
        marginTop: hp(1),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dateText: {
        fontSize: 28,
        color: colors.themeSecondary,
        textAlign: "center",
        fontFamily: fontFamily.appTextBold
    },
    monthText: {
        fontSize: 28,
        marginTop: hp(-2),
        fontFamily: fontFamily.appTextBold
    },
    projectView: {
        justifyContent: "space-between",
        paddingVertical: hp(.8),
        height: hp(10),
        paddingHorizontal: wp(4),
        borderRadius: wp(3)
    },
    projectText: {
        color: colors.white,
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular
    },
    locationImage: {
        tintColor: colors.white,
        width: wp(3.5),
        height: wp(3.5),
    },
    adressText: {
        fontSize: 10,
        color: colors.white
    },
    calenderView: {
        width: wp(100),
        alignSelf: "center"
    },
    headerCalenderView: {
        borderWidth: .5,
        borderColor: colors.grey,
        padding: 4,
        borderRadius: wp(2)
    },
    calHeaderText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12
    },
    arrowView: {
        width: wp(5),
        height: wp(5),
    },
    todaysPlanText: {
        color: colors.black,
        fontSize: 13,
        fontFamily: fontFamily.appTextBold,
        paddingHorizontal: wp(5)
    },
    upcomingText: {
        color: colors.black,
        fontSize: 13,
        marginVertical: hp(3),
        fontFamily: fontFamily.appTextBold,
        paddingHorizontal: wp(5)
    }
})