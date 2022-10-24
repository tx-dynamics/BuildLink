import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { appIcons, colors, hp, wp, fontFamily } from '../../services'

const EventComponent = (props) => {
    return (
        <View style={styles.mainView}>
            <Image resizeMode='contain' source={props.source} style={styles.sourceImg} />
            <View style={styles.paddingView}>
                <View style={styles.dateView}>
                    <Text style={styles.dateText}>{props.date}</Text>
                    <Image resizeMode='contain' source={appIcons.forward} style={styles.forwardImg} />
                </View>
                <Text style={styles.titleText}>{props.title}</Text>
                <Text style={styles.adressText}>{props.adress}</Text>
                <View style={styles.redHeartView}>
                    <Image resizeMode='contain' source={appIcons.redHeart} style={styles.redHeartImg} />
                    <Text style={styles.likeText} >{props.likes} intrested</Text>
                </View>
            </View>
        </View>
    )
}
export default EventComponent
const styles = StyleSheet.create({
    mainView: {
        alignSelf: "center",
        backgroundColor: colors.whitish,
        justifyContent: "flex-start",
        height: hp(26),
        width: wp(90),
        marginVertical: hp(2),
        borderRadius: wp(5)
    },
    sourceImg: {
        width: wp(90),
        height: hp(16),
        borderRadius: wp(5),
    },
    paddingView: {
        paddingHorizontal: wp(4)
    },
    dateView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: hp(1),
    },
    dateText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 9,
    },
    forwardImg: {
        width: wp(5),
        height: wp(5),
    },
    titleText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 11,
        marginTop: hp(-.5)
    },
    adressText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 8
    },
    redHeartView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: hp(.7)
    },
    redHeartImg: {
        width: wp(3.5),
        height: wp(3.5)
    },
    likeText: {
        color: colors.black,
        fontSize: 8,
        fontFamily: fontFamily.appTextRegular,
        marginLeft: wp(1.5)
    }
})