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
    topView: {
        paddingHorizontal: wp(5),
        marginTop: hp(2.5)
    },
    areaRaduisText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 13,
    },
    radiusView: {
        justifyContent: "space-between",
        paddingHorizontal: wp(4),
        backgroundColor: colors.whitish,
        flexDirection: "row",
        height: hp(5.5),
        alignItems: "center",
        borderRadius: wp(4),
        marginTop: hp(2)
    },
    radiusTextInput: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12
    },
    radiusText: {
        color: colors.blackLight,
    },
    selectedTradesmanView:
    {
        marginTop: hp(2)
    },
    selectedTradesmanText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 13
    },
    selectedFlalistView: {
        justifyContent: "space-between",
        paddingHorizontal: wp(4),
        backgroundColor: colors.whitish,
        flexDirection: "row",
        height: hp(5.5),
        alignItems: "center",
        borderRadius: wp(4),
        marginTop: hp(2)
    },
    selectedTextInput: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        width: wp(30),
        fontSize: 12
    },
    margintop: {
        marginTop: hp(1),
    },
    rateText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold
    },
    multiSliderView: {
        alignSelf: "center",
        marginTop: hp(-1)
    },
    multiSelectorSelected: {
        borderWidth: .2,
        width: 0,
        height: 0,
        borderColor: colors.theme,
    },
    multiSelectorUnSelected: {
        borderWidth: .2,
        width: 0,
        height: 0,
        borderColor: colors.greyDark,
    },
    scrollLabel: {
        alignItems: "center",
        justifyContent: "center"
    },
    scrollMarkerImage: {
        width: wp(3),
        height: wp(3),
        top: hp(1.2)
    },
    viewTop: {
        top: hp(1)
    },
    labelText: {
        color: colors.blackLight,
        fontSize: 12
    },
    dateRangeView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(2),
    },
    daterangeText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold
    },
    dateRangeImage: {
        width: wp(4),
        height: wp(4)
    },
    calenderStyle: {
        width: wp(100),
        alignSelf: "center"
    },
    calenderHeaderView: {
        borderWidth: .5,
        borderColor: colors.grey,
        padding: 4,
        borderRadius: wp(2)
    },
    calenderHeaderText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12
    },
    calenderRenderArrow: {
        width: wp(5),
        height: wp(5),
    },
    timeRangeText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold
    },
    timeRangeView: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: wp(10),
        justifyContent: "space-between",
        marginTop: hp(2),
    },
    timerangeTouch: {
        backgroundColor: colors.whitish,
        width: wp(22),
        height: hp(5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: wp(15)
    },
    startTimeText: {
        color: colors.theme,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 13,
    },
    datePickerStart: {
        width: wp(25),
        height: hp(5),
        alignSelf: "center",
        borderRadius: 15,
        fontSize: 50,
        fontFamily: fontFamily.appTextRegular,
    },
    endTimeTouch: {
        backgroundColor: colors.whitish,
        width: wp(22),
        height: hp(5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: wp(5)
    },
    endTimeText: {
        color: colors.theme,
        fontFamily: fontFamily.appTextRegular
    },
    buttonView: {
        marginTop: hp(2),
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
    }
})