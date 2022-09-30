import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'

import { colors, fontFamily, wp } from '../../services'
import appStyles from '../../services/utilities/appStyles'

const Header = props => {
    const { leftIcon, title, onPressRightIcon, titleStyle, onPress, shadow, rightIcon, leftIconView } = props
    return (
        <View style={[styles.container, shadow && styles.shadow]}>
            <View style={[appStyles.rowBtw]}>
                <TouchableOpacity style={[leftIconView && styles.arrowView, { width: wp(6) }]} onPress={onPress}>
                    {leftIcon &&
                        <Image style={styles.iconStyle} source={leftIcon} />
                    }
                </TouchableOpacity>
                <View style={[styles.textViewStyle]}>
                    <Text style={[titleStyle, styles.textStyle]}>
                        {title}
                    </Text>
                </View>
                <View style={{ width: wp(6) }}>
                    {rightIcon &&
                        <TouchableOpacity onPress={onPressRightIcon} >
                            <Image style={[styles.iconStyle]} source={rightIcon} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    arrowView: {
        width: wp(4.5),
        height: wp(5.5),
        borderRadius: wp(1.5),
        backgroundColor: colors.whitish,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    container: {
        backgroundColor: colors.white,
        paddingLeft: wp(6),
        paddingRight: wp(3),
        height: wp(15),
        width: wp(100),
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
        color: colors.headerText,
        fontFamily: fontFamily.appTextBold
    },
    iconStyle: {
        width: wp(2),
        height: wp(4),
        resizeMode: 'contain',
    },
})
export default Header
