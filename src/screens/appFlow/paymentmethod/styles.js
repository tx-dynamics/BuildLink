import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.whitish,
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(4),
        alignSelf: "center",
        alignItems: "center",
        paddingVertical: hp(1.3),
        borderRadius: wp(3),
        marginBottom: hp(2),
    },
    cardImage: {
        width: wp(6),
        height: wp(6)
    },
    paymentText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        marginLeft: wp(6),
        fontSize: 13
    },
    greenTick: {
        width: wp(6),
        height: wp(6)
    },
    addDetailText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        paddingHorizontal: wp(5),
        marginBottom: hp(.75),
        fontSize: 15
    },
    inputContainerStyle: {
        borderRadius: wp(3),
        height: hp(5.5)
    },
    titleStyle: {
        fontSize: 10,
        fontFamily: fontFamily.appTextSemiBold,
    },
    bottomView: {
        flexDirection: "row",
        width: wp(100),
        alignSelf: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp(5)
    },
    widthView: {
        width: wp(42),
    },
    dateInput: {
        textAlign: "center",
        fontSize: 12
    },
    dateContainer: {
        borderRadius: wp(3),
        height: hp(5.5),
        width: wp(42)
    },
    dateTitle: {
        fontSize: 10,
        fontFamily: fontFamily.appTextSemiBold
    },
    btnStyle: {
        alignSelf: "center",
        width: wp(45),
        marginTop: hp(2)
    }
})