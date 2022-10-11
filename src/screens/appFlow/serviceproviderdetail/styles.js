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
    }
})