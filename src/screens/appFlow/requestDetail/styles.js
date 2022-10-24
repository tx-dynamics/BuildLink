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
        fontFamily: fontFamily.appTextRegular,
        textAlign: 'center'
    },
    textStyle: {
        color: colors.greyLight,
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
        paddingLeft: wp(3)
    },
    textStyle1: {
        color: colors.greyLight,
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
        paddingLeft: wp(7)
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
        alignItems: 'center',
        //paddingLeft: wp(1),
        paddingRight: wp(5),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    rateModelTopView: {
        width: wp(60),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',




    },
    selectionIcon: {
        width: wp(2.5),
        height: wp(2.5),
        resizeMode: 'contain'
    },
    rateTextStyle: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: 14,
        paddingLeft: wp(3.5),
        color: colors.blackLight
    },
    buttonContainerStyle: {
        width: wp(43),
        borderRadius: 16
    },
    bottomMargin: {
        marginBottom: hp(1.5)
    },
    arrowDown: {
        width: wp(3.5),
        height: hp(2),
        resizeMode: 'contain',
    },
    contractorTypeTopView: {
        backgroundColor: '#FBFBFB',
        marginTop: hp(-1),
        zIndex: 0,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        width: wp(90)
    },
    selectionTopView: {
        paddingTop: hp(2.5),
        alignItems: 'flex-start',
        paddingHorizontal: wp(3),
        paddingBottom: hp(0.8)
    },
    gpsIcon: {
        width: wp(5),
        height: wp(5),
        resizeMode: 'contain',
    },
    inputContainerStyle: {
        borderRadius: 16,
        backgroundColor: colors.whitish
    },
    requestSendModalView: {
        backgroundColor: 100,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    requestView: {
        width: wp(80),
        backgroundColor: "white",
        alignItems: "center",
        paddingHorizontal: wp(7),
        borderRadius: wp(5),
        paddingVertical: hp(4.5),
        marginTop: hp(22)
    },
    requestText: {
        fontSize: 17,
        color: colors.black,
        fontFamily: fontFamily.appTextBold
    },
    requestSentText: {
        color: colors.blackLight,
        textAlign: "center",
        marginTop: hp(2)
    },
    TextInputView: {
        backgroundColor: "white",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        alignItems: "center",
        paddingHorizontal: wp(2),
        borderRadius: wp(5),
        marginVertical: hp(2),
        marginTop: hp(30)
    },
    textInputStyle: {
        width: wp(62),
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12,
    },
    sendImg: {
        width: wp(6),
        height: wp(6)
    }
})