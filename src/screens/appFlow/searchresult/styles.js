import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styes = StyleSheet.create({
    mainTopView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp(4),
        marginVertical: hp(2),
        marginTop: hp(5)
    },
    resultText: {
        color: colors.blackLight,
        fontSize: 16.5,
        fontFamily: fontFamily.appTextBold
    },
    crossImg: {
        width: wp(4),
        height: wp(4)
    }
})