import { StyleSheet } from 'react-native';
import { wp, colors, hp, fontFamily, appIcons } from '../../../services';

export const styles = StyleSheet.create({
    pinStyle: {
        width: wp(12),
        height: wp(12),
        alignSelf: "center",
    },
    topMainView: {
        borderRadius: 50,
        zIndex: 10
    },
    searchView: {
        alignItems: "center",
        borderWidth: .5,
        borderColor: colors.theme,
        width: wp(90),
        alignSelf: "center",
        paddingHorizontal: wp(3),
        borderRadius: wp(7),
        marginBottom: hp(2)
    },
    searchImg: {
        width: wp(5),
        height: wp(5)
    },
    searchTextinput: {
        color: colors.black,
        width: wp(70),
        marginLeft: wp(2),
        fontFamily: fontFamily.appTextRegular
    },
    dropDwonImg: {
        width: wp(4),
        height: wp(4)
    },
    gpsView: {
        position: "absolute",
        height: hp(12),
        top: hp(7),
        width: wp(100),
        zIndex: 10,
        backgroundColor: colors.white,
        paddingHorizontal: wp(5),
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    gpsImg: {
        width: wp(5),
        height: wp(5)
    },
    currentLocationText: {
        color: colors.black,
        marginLeft: wp(10),
        fontFamily: fontFamily.appTextRegular
    },
    recentLocationText: {
        color: colors.black,
        marginTop: hp(3),
        marginLeft: wp(15),
        fontFamily: fontFamily.appTextBold,
        borderBottomLeftRadius: 50
    },
    btnView: {
        width: wp(40),
        position: "absolute",
        alignSelf: "center",
        bottom: hp(7)
    }
})