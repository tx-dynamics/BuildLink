import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appIcons, colors, fontFamily, hp, wp } from '../../services'

const TrainingComponent = (props) => {
    return (
        <View style={{ alignSelf: "center", backgroundColor: colors.whitish, justifyContent: "flex-start", height: hp(26), width: wp(90), marginVertical: hp(2), borderRadius: wp(5) }}>
            <Image resizeMode='contain' source={props.source} style={{ width: wp(90), height: hp(16), borderRadius: wp(5), }} />
            <View style={{ paddingHorizontal: wp(4) }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp(1), }}>
                    <Text style={{ color: colors.black, fontFamily: fontFamily.appTextRegular, fontSize: 8, }}>{props.date}</Text>
                    <Image resizeMode='contain' source={appIcons.forward} style={{ width: wp(4), height: wp(4) }} />
                </View>
                <Text style={{ color: colors.black, fontFamily: fontFamily.appTextBold, fontSize: 10, marginTop: hp(-.5) }}>{props.title}</Text>
                <Text style={{ color: colors.black, fontFamily: fontFamily.appTextRegular, fontSize: 7 }}>{props.adress}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: hp(.7) }}>
                    <Image resizeMode='contain' source={appIcons.redHeart} style={{ width: wp(3.5), height: wp(3.5) }} />
                    <Text style={{ color: colors.black, fontSize: 7, fontFamily: fontFamily.appTextRegular, marginLeft: wp(1.5) }} >{props.likes} intrested</Text>
                </View>
            </View>
        </View>
    )
}

export default TrainingComponent

const styles = StyleSheet.create({})