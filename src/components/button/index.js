import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import { appIcons, colors, fontFamily } from '../../services'
import appStyles from '../../services/utilities/appStyles'

const Button = props => {
    const { style, disable, containerStyle, onPress, themeColor, light, arrowRight, borderButton, borderWidth } = props

    return (
        <View style={[appStyles.mb15]}>
            <TouchableOpacity
                disabled={disable}
                style={
                    {
                        ...styles.container,
                        ...containerStyle,
                        backgroundColor: themeColor,
                        borderWidth: borderWidth ? borderWidth : 0
                    }}
                onPress={onPress}>
                <View style={[appStyles.rowCenter]}>
                    <Text style={{ ...styles.label, ...style, color: colors.white, fontFamily: light ? fontFamily.appTextSemiBold : fontFamily.appTextBold }}>
                        {props.children}
                    </Text>
                    {arrowRight &&
                        <Image source={appIcons.arrowRightCircle} style={{ marginLeft: 10, width: 17, height: 17, resizeMode: 'contain' }} />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 30,
        height: 70,
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    label: {
        fontSize: 18
    },
})

export default Button
