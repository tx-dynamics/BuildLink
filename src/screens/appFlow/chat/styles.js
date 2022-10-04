import { StyleSheet } from "react-native";
import { colors, fontFamily, hp, wp } from "../../../services";

export const styles = StyleSheet.create({
    userCardMainView: {
        marginBottom: hp(2.3),
    },
    userCardSubView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(6),
    },
    imageStyle: {
        width: wp(20),
        height: wp(20),
        borderRadius: wp(10),
    },
    greenDotStyle: {
        position: "absolute",
        width: wp(3),
        height: wp(3),
        top: hp(8),
        left: wp(15.5)
    },
    textView: {
        marginLeft: wp(5),
    },
    nameText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 13,
    },
    messageText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 10,
        marginTop: hp(.5),
    },
    dateText: {
        color: colors.dateColor,
        fontSize: 11,
        fontFamily: fontFamily.appTextRegular
    },
    borderView: {
        borderWidth: .5,
        width: wp(60),
        marginLeft: wp(31),
        marginTop: hp(1),
        borderColor: colors.borderColorLight
    },
    flatListMainView: {
        marginTop: hp(3.5),
    },

})