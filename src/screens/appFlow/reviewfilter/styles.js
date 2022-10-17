import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    tradesManView: {
        backgroundColor: colors.grey,
        flexDirection: "row",
        height: hp(3.5),
        alignItems: "center",
        borderRadius: wp(1.5),
        justifyContent: "space-between",
        paddingHorizontal: wp(1),
        marginHorizontal: wp(1)
    },
    tradesmanText: {
        color: colors.black,
        fontSize: 12,
    },
    trademanToucView: {
        paddingHorizontal: wp(2),
    },
    tradesmanImage: {
        width: wp(3),
        height: wp(3)
    },
    buttonView: {
        marginTop: hp(45),
        marginBottom: hp(2),
        backgroundColor: colors.theme,
        width: wp(80),
        alignSelf: "center",
        borderRadius: wp(3),
    },
    btnContainerStyle: {
        height: hp(6),
    },
    btnText: {
        fontSize: 14,
        fontFamily: fontFamily.appTextBold
    },
    topView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: colors.whitish,
        paddingVertical: hp(2),
        borderBottomWidth: 1
    },
    areaRadiusText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 15
    },
    milesText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 13
    },
    selectedTradesmanView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: colors.whitish,
        paddingVertical: hp(2),
        borderBottomWidth: 1
    },
    selectedTradesmanText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 15
    },
    RateMainView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: colors.whitish,
        paddingVertical: hp(2),
        borderBottomWidth: 1
    },
    rateText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 15
    },
    fromPrice: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 13
    },
    toPrice: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 13
    },
    dateTimeRangeText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 15,
        marginVertical: hp(2)
    },
    fromDate: {
        color: colors.greyDark,
        marginLeft: wp(5)
    },
    toDate: {
        color: colors.greyDark,
        marginLeft: wp(10)
    }
})