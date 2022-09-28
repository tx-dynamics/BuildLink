import React, { useContext } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, ImageBackground } from 'react-native'

import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../services'
import appStyles from '../../services/utilities/appStyles'

const Header = props => {
    const { leftIcon, title, backgroundColor, titleStyle, onPress, shadow, color, rightIcon1, rightIconStyle, fontSize, onpressSearch, searchbackgroundColor, onPressrightIcon2, rightIcon2, curveHeader, lightBackground } = props
    return (
        <View>
            {curveHeader ?
                <ImageBackground style={{ height: hp(30), }} source={appImages.curveImage}>
                    <View style={[appStyles.row, appStyles.jcSpaceBetween, appStyles.pt20]}>
                        <TouchableOpacity onPress={onPress}>
                            <Image source={appIcons.backIcon} style={styles.curveHeaderBackIconStyle} />

                        </TouchableOpacity>
                        <Image source={appImages.logoDark} style={styles.curveImageStyle} />
                        <View />
                    </View>
                </ImageBackground>
                :
                <View style={[styles.container, shadow && styles.shadow]}>
                    <View style={[appStyles.rowBtw]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}>
                            <TouchableOpacity onPress={onPress}>
                                {leftIcon &&
                                    <Image style={styles.iconStyle} source={leftIcon} />
                                }
                            </TouchableOpacity>
                            <View style={[styles.textViewStyle, { marginLeft: leftIcon ? 20 : 0 }]}>
                                <Text style={[titleStyle, styles.textStyle, { color: color, fontSize: fontSize ? fontSize : 18 }]}>
                                    {title}
                                </Text>
                            </View>
                        </View>
                        <View style={[appStyles.row, rightIconStyle]}>
                            {rightIcon1 &&
                                <TouchableOpacity onPress={onpressSearch} style={[styles.rightIconView, { marginRight: 15, }]} >
                                    <Image style={[styles.rightIcon,]} source={appIcons.search} />
                                </TouchableOpacity>
                            }
                            {rightIcon2 &&
                                <TouchableOpacity onPress={onPressrightIcon2} style={[styles.rightIconView,]} >
                                    <Image style={[styles.rightIcon,]} source={rightIcon2} />
                                </TouchableOpacity>
                            }
                        </View>

                    </View>
                </View>

            }
        </View>

    )
}

const styles = StyleSheet.create({
    curveImageStyle: {
        width: '30%',
        resizeMode: 'contain',
        height: 100,
        marginLeft: -20
    },
    curveHeaderBackIconStyle: {
        width: 18,
        marginTop: 10,
        marginLeft: 20,
        height: 18,
        resizeMode: 'contain'
    },
    rightIconView: {
        width: 35,

        height: 35,
        borderRadius: 20,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0
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
        padding: 10,
        height: 60,
        width: wp(100),
        justifyContent: 'flex-end',
        paddingHorizontal: 15,

    },
    textStyle: {
        fontSize: 20,
        color: colors.black,
        fontFamily: fontFamily.appTextSemiBold
    },
    iconStyle: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    rightIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    searchCont: {
        height: '30%',
        width: '90%',
        backgroundColor: 'red',
    },
    searchBar: {
        height: '80%',
        width: '75%',
        marginLeft: -30,
        flexDirection: 'row',
        borderRadius: 9,
        alignItems: 'center',
        backgroundColor: '#F1F1F1'
    },
    searchBar1: {
        height: '43%',
        width: '75%',
        marginLeft: '15%',
        flexDirection: 'row',
        borderRadius: 9,
        alignItems: 'center',
        backgroundColor: '#F1F1F1'
    },
})
export default Header
