import { StyleSheet } from 'react-native';
import { wp, colors, hp, fontFamily } from '../../../services';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(6),
        paddingVertical: hp(1)
    },
    heading: {
        color: colors.blackLight,
        fontSize: 16,
        fontFamily: fontFamily.appTextBold,
        marginBottom: hp(1)
    },
    dateTopView: {
        width: wp(79) / 2,
        paddingVertical: hp(2),
        backgroundColor: colors.whitish,
        borderRadius: wp(4),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp(2)
    },
    dateTextStyle: {
        color: colors.blackLight,
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular
    },
    textStyle: {
        color: colors.greyLight,
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular
    },
    toTextStyle: {
        color: colors.blackLight,
        fontSize: 14,
        fontFamily: fontFamily.appTextBold
    },
    payRateTopView: {
        width: wp(90),
        paddingVertical: hp(2),
        backgroundColor: colors.whitish,
        borderRadius: wp(4),
        paddingLeft: wp(4),
        alignItems: 'center',
        paddingRight: wp(5),
        justifyContent: 'space-between',
        paddingHorizontal: wp(2),
        flexDirection: 'row'
    },
    rateModelTopView: {
        width: wp(60),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectionIcon: {
        width: wp(4),
        height: wp(3),
        resizeMode: 'contain'
    },
    rateTextStyle: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: 14,
        paddingLeft: wp(2),
        color: colors.blackLight
    }
})