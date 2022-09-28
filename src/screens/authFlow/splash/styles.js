import { StyleSheet } from 'react-native';
import { colors, fontFamily, hp, wp } from '../../../services';

export const styles = StyleSheet.create({
    logoStyle: {
        width: wp(26),
        height: wp(26),
        resizeMode: 'contain'
    },
    textStyle: {
        fontSize: 32,
        fontFamily: fontFamily.appTextExtraBold,
        color: colors.black,
        paddingTop: hp(1)
    },
})