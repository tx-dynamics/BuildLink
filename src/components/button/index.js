import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { colors, fontFamily, hp, wp } from '../../services'
import appStyles from '../../services/utilities/appStyles'

const Button = props => {
    const { style, disable, containerStyle, onPress, themeColor, borderWidth } = props

    return (
        <View style={[appStyles.mb15]}>
            <TouchableOpacity
                disabled={disable}
                style={
                    {
                        ...styles.container,
                        ...containerStyle,
                        backgroundColor: themeColor ? themeColor : colors.theme,
                        borderWidth: borderWidth ? borderWidth : 0
                    }}
                onPress={onPress}>
                <View style={[appStyles.rowCenter]}>
                    <Text style={{ ...styles.label, ...style, }}>
                        {props.children}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: wp(8),
        height: hp(5.5),
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    label: {
        fontSize: 18,
        fontFamily: fontFamily.appTextBold,
        color: colors.white
    },
})

export default Button
