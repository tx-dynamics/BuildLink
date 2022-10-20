import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    mainView: {
        width: wp(90),
        alignSelf: "center",
        marginTop: hp(1)
    },
    dateText: {
        color: colors.greyDark,
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: 12
    },
    notificationView: {
        backgroundColor: colors.whitish,
        borderRadius: wp(5),
        height: hp(12),
        paddingHorizontal: wp(9),
        paddingTop: hp(2)
    },
    notificationText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 13
    }
})