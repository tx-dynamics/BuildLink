import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styes = StyleSheet.create({
    mainTopView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp(5.2),
        marginVertical: hp(2),
        marginTop: hp(5)
    },
    resultText: {
        color: colors.blackLight,
        fontSize: 16.2,
        fontFamily: fontFamily.appTextBold
    },
    crossImg: {
        width: wp(3.5),
        height: wp(3.5),
        paddingRight: wp(5),
        //backgroundColor: "red"
    }
})