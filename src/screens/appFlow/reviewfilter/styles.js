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
    }
})