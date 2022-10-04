import { StyleSheet } from 'react-native';
import { colors, wp, hp, fontFamily } from '../../../services';

export const styles = StyleSheet.create({
    renderCardMainView: {
        flexDirection: "row",
        marginLeft: wp(4),
        alignItems: "center",
        marginBottom: wp(6)
    },
    senderImage: {
        width: wp(8),
        height: wp(8),
        borderRadius: wp(15 / 2)
    },
    greenDot: {
        position: "absolute",
        width: wp(1.5),
        height: wp(1.5),
        top: hp(3),
        left: wp(6)
    },
    messageView: {
        justifyContent: "center",
        width: wp(76),
        paddingVertical: hp(1.2),
        marginLeft: wp(1.5),
        borderRadius: wp(5),
        paddingHorizontal: wp(4),
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    messageText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
    },
    view1: {
        justifyContent: "center",
        // marginTop: hp(4),
        width: wp(75),
        marginLeft: wp(4),
        paddingVertical: hp(1.2),
        borderRadius: wp(5),
        paddingHorizontal: wp(4),
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    text1: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular
    },
    receiverView: {
        marginLeft: wp(2),
    },
    receiverImage: {
        width: wp(8),
        height: wp(8),
    },
    receiverGreenDot: {
        position: "absolute",
        width: wp(1.5),
        height: wp(1.5),
        top: hp(3),
        left: wp(6)
    },
    marginTopView: {
        marginTop: hp(2),
    },
    borderView: {
        borderBottomWidth: 1,
        width: wp(85),
        alignSelf: "center",
        borderColor: colors.borderColorLight,
        marginTop: hp(-1),
    },
    dateView: {
        alignSelf: "center",
        backgroundColor: colors.white,
        paddingHorizontal: wp(1.5),
        borderRadius: wp(3),
        marginTop: hp(1),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    dateText: {
        color: colors.black,
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular,
    },
    bottomView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp(4),
        marginBottom: hp(1),
    },
    bottomView2: {
        flexDirection: "row",
        borderRadius: wp(7),
        paddingHorizontal: wp(2),
        height: hp(5),
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    textInputStyle: {
        width: wp(60),
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular,
        color: colors.black
    },
    iconView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    attachIcon: {
        width: wp(4.5),
        height: wp(4.5)
    },
    cameraIcon: {
        width: wp(6),
        height: wp(6),
        marginLeft: wp(4)
    },
    sendButtonView: {
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        width: wp(10),
        height: hp(5),
        borderRadius: wp(4),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    sendImage: {
        width: wp(5),
        height: wp(5),
        left: wp(.2)
    }
})