import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../services'

const SocialComponent = (props) => {
    return (
        <View style={{ marginVertical: hp(2), height: hp(29.5), backgroundColor: colors.whitish, borderRadius: wp(5) }}>
            <ImageBackground borderRadius={wp(5)} style={{ width: wp(90), height: hp(25), }} source={props.source} />

            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: wp(4), marginTop: hp(1) }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: wp(12) }}>
                    <Image resizeMode='contain' source={appIcons.heartGrey} style={{ width: wp(4), height: wp(4) }} />
                    <Image resizeMode='contain' source={appIcons.comment} style={{ width: wp(4), height: wp(4) }} />
                </View>
                <Image resizeMode='contain' source={appIcons.bookmark} style={{ width: wp(4), height: wp(4), }} />
            </View>
            <View style={{ zIndex: 20, bottom: hp(26), flexDirection: "row", justifyContent: "space-between", paddingHorizontal: wp(4), alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image resizeMode='contain' source={props.userPic} style={{ width: wp(10), height: wp(10), borderRadius: wp(5) }} />
                    <View style={{}}>
                        <Text style={{ color: colors.white, fontSize: 11, fontFamily: fontFamily.appTextBold }}>{props.userName}</Text>
                        <Text style={{ color: colors.white, fontSize: 11, fontFamily: fontFamily.appTextRegular }}>{props.time}</Text>
                    </View>
                </View>
                <Image resizeMode='contain' source={appIcons.more} style={{ tintColor: colors.white, width: wp(5), height: wp(5), }} />
            </View>
        </View>
    )
}

export default SocialComponent

const styles = StyleSheet.create({})