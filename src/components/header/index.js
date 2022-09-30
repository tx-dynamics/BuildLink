import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'

import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../services'
import appStyles from '../../services/utilities/appStyles'

const Header = props => {
    const { chatHeader, leftIcon, title, chatTitle, onPressRightIcon, titleStyle, onPress, shadow, rightIcon, leftIconView } = props
    return (
        <View style={[styles.container, shadow && styles.shadow]}>
            <View style={[appStyles.rowBtw]}>
                <TouchableOpacity style={[leftIconView && styles.arrowView, { width: wp(6), marginTop: chatHeader ? hp(3) : null }]} onPress={onPress}>
                    {leftIcon &&
                        <Image style={styles.iconStyle} source={leftIcon} />
                    }
                </TouchableOpacity>
                {
                    chatHeader ?
                        <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
                            <Image resizeMode='contain' source={appImages.chatuser} style={{ width: wp(15), height: wp(15), borderRadius: wp(15 / 2) }} />
                            <Image resizeMode='contain' source={appIcons.greendot} style={{
                                position: "absolute",
                                width: wp(3),
                                height: wp(3),
                                top: hp(6),
                                right: wp(49)
                            }} />
                            <Text style={[titleStyle, styles.chattextStyle]}>
                                {chatTitle}
                            </Text>
                        </View> :
                        <View style={[styles.textViewStyle]}>
                            <Text style={[titleStyle, styles.textStyle]}>
                                {title}
                            </Text>
                        </View>
                }

                <View style={{ width: wp(6), marginTop: chatHeader ? hp(3) : null }}>
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
    chattextStyle: {
        fontSize: 16,
        color: colors.headerText,
        fontFamily: fontFamily.appTextBold,
        marginTop: hp(.7),
        left: wp(1)

    },
    iconStyle: {
        width: wp(2),
        height: wp(4),
        resizeMode: 'contain',
    },
})
export default Header
