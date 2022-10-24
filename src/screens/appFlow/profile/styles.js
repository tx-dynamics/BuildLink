import { StyleSheet } from 'react-native';
import { fontFamily, hp, wp, colors } from '../../../services';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingHorizontal: wp(6),
        paddingVertical: hp(1.5)
    },
    myProjectTopView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
    },
    myProjects: {
        fontFamily: fontFamily.appTextBold,
        fontSize: 16,
        color: colors.black,
        paddingTop: hp(1),
        paddingBottom: hp(0.5)
    },
    addButtonTopView: {
        width: wp(7),
        height: wp(7),
        borderRadius: wp(1.8),
        backgroundColor: colors.whitish,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButton: {
        width: wp(4),
        height: wp(4),
        resizeMode: 'contain'
    }
})