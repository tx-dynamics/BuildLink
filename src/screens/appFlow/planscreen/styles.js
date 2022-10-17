import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    checkComponentView: {
        marginTop: hp(2.5),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: wp(3),
        //marginVertical: hp(.5)
    },
    checkText: {
        color: colors.black,
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular
    },
    checkImg: {
        width: wp(4.5),
        height: wp(4.5),
    },
    renderPlanView: {
        width: wp(70),
        height: hp(16),
        alignSelf: "center",
        alignItems: "center",
        borderRadius: wp(2),
        marginTop: hp(6),
        //zIndex: 40
    },
    renderImgView: {
        top: hp(-5),
        width: wp(20),
        height: wp(20),
        justifyContent: "center",
        borderRadius: wp(20),
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    renderImg: {
        width: wp(12),
        height: wp(12)
    },
    preimiumText: {
        top: hp(-3),
        color: colors.white,
        fontFamily: fontFamily.appTextBold,
        fontSize: 12
    },
    priceView: {
        flexDirection: "row",
        top: hp(-2),
        alignItems: "baseline",
        marginLeft: wp(14)
    },
    dollarText: {
        color: colors.white,
        fontSize: 11,
        fontFamily: fontFamily.appTextRegular
    },
    priceText: {
        color: colors.white,
        fontFamily: fontFamily.appTextBold,
        fontSize: 19
    },
    skipText: {
        color: colors.theme,
        paddingHorizontal: wp(5),
        marginTop: hp(2),
        fontFamily: fontFamily.appTextBold,
        alignSelf: "flex-end"
    },
    startText: {
        color: colors.blackLight,
        paddingHorizontal: wp(10),
        fontFamily: fontFamily.appTextRegular,
        fontSize: 13,
        textAlign: "center",
    },
    themeText: {
        color: colors.theme,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 13,
    },
    flatListView: {
        width: wp(70),
        top: hp(-2),
        zIndex: -1,
        alignSelf: "center",
        borderRadius: wp(2),
        backgroundColor: colors.white,
        elevation: 7,
    },
    btnView: {
        width: wp(50),
        alignSelf: "center",
        marginTop: hp(3)
    }

})