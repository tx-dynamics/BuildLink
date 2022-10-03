import { StyleSheet } from 'react-native';
import { colors, wp, hp } from '../../../services';

export const styles = StyleSheet.create({
    shadeStyle: {
        width: wp(12),
        height: wp(12),
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: "white",
        borderRadius: wp(12 / 2),
        marginHorizontal: wp(3),
        borderColor: colors.borderLight,
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp(2)
    },
    borderStyle: {
        width: wp(12),
        height: wp(12),
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: wp(12 / 2),
        marginHorizontal: wp(3),
        borderColor: colors.borderLight,
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp(2)
    }
})