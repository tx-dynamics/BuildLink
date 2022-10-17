import { StyleSheet } from "react-native";
import { fontFamily, hp, wp } from "../../../services";

export const styes = StyleSheet.create({
    mainTopView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp(4),
        marginVertical: hp(2),
    },
    resultText: {
        color: "black",
        fontSize: 16,
        fontFamily: fontFamily.appTextBold
    },
    crossImg: {
        width: wp(4),
        height: wp(4)
    }
})