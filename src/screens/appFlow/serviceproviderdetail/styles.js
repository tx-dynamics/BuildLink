import { StyleSheet } from 'react-native';
import { wp, colors, hp, fontFamily } from '../../../services';

export const styles = StyleSheet.create({
    topView: {
        backgroundColor: colors.serviceprovidor,
        paddingVertical: hp(2),
        paddingHorizontal: wp(2),
        marginTop: hp(2)
    },
    backArrowImage: {
        width: wp(3),
        height: wp(3),
    },
    arrowView: {
        width: wp(5),
        height: wp(5.5),
        borderRadius: wp(1.5),
        marginTop: hp(1),
        marginLeft: wp(3),
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labourImage: {
        width: wp(30),
        height: hp(16),
        borderRadius: wp(1)
    },
    starStyle: {
        width: wp(3),
        height: wp(3)
    },
    ratingView: {
        alignItems: "center"
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
        width: wp(30),
        height: hp(5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: wp(3)
    },
    startTimeText: {
        color: colors.theme,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 13,
    },
    endTimeTouch: {
        backgroundColor: colors.whitish,
        width: wp(30),
        height: hp(5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: wp(3)
    },
    endTimeText: {
        color: colors.theme,
        fontFamily: fontFamily.appTextRegular
    },
    buttonView: {
        marginTop: hp(6),
        marginBottom: hp(2),
        backgroundColor: colors.theme,
        width: wp(45),
        alignSelf: "center",
        borderRadius: wp(4),
    },
    btnContainerStyle: {
        height: hp(6),
    },
    btnText: {
        fontSize: 14,
        fontFamily: fontFamily.appTextBold
    },
    ratingText: {
        color: colors.black,
        fontSize: 11,
    },
    overAllText: {
        color: colors.black,
        fontSize: 13
    },
    overallnumText: {
        color: colors.black,
        fontSize: 17,
        fontFamily: fontFamily.appTextBold
    },
    catText: {
        color: colors.black,
        fontSize: 18,
        fontFamily: fontFamily.appTextBold
    },
    companyText: {
        color: colors.black,
        fontSize: 11,
        fontFamily: fontFamily.appTextRegular
    },
    priceMainView: {
        alignItems: "center",
        marginLeft: wp(1)
    },
    dollarText: {
        color: colors.greyDark,
        fontSize: 10
    },
    priceText: {
        color: colors.black,
        fontSize: 16,
        fontFamily: fontFamily.appTextBold
    },
    aboutMainView: {
        paddingHorizontal: wp(6),
        marginTop: hp(2),
    },
    aboutText: {
        color: colors.black,
        fontSize: 14,
        fontFamily: fontFamily.appTextBold
    },
    aboutDetailView: {
        backgroundColor: colors.whitish,
        borderRadius: wp(5),
        marginTop: hp(1)
    },
    detailText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12,
        paddingHorizontal: wp(3),
        paddingVertical: hp(.75),
    },
    adressView: {
        paddingHorizontal: wp(6),
        marginTop: hp(3),
    },
    adressText: {
        color: colors.black,
        fontSize: 14,
        fontFamily: fontFamily.appTextBold
    },
    locationView: {
        backgroundColor: colors.whitish,
        borderRadius: wp(5),
        marginTop: hp(1),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: wp(2)
    },
    locatoinImg: {
        width: wp(3),
        height: wp(3)
    },
    locationText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12,
        paddingVertical: hp(1.5),
        marginHorizontal: wp(1)
    },
    availabiltyView: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: wp(6),
        marginTop: hp(2)
    },
    availabiltyText: {
        color: colors.black,
        fontSize: 13,
        fontFamily: fontFamily.appTextBold
    },
    downAroowImg: {
        width: wp(4),
        height: wp(4)
    },
    noteView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    noteText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 11
    },
    noteSubView: {
        height: wp(2),
        width: wp(2),
        backgroundColor: colors.theme,
        borderRadius: 2,
        marginHorizontal: wp(1)
    },
    occupiedText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 11
    }
})