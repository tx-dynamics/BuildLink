import { StyleSheet } from 'react-native';
import { wp, colors } from '../../../services';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    inputContainerStyle: {
        backgroundColor: colors.whitish,
        borderRadius: 16
    },
    inputTextStyle: {
        paddingLeft: wp(4)
    },
    buttonContainerStyle: {
        width: wp(55)
    }
})