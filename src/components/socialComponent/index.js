import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

import { appIcons, colors, fontFamily, hp, wp } from '../../services'
import appStyles from '../../services/utilities/appStyles'

const SocialComponent = (props) => {
    return (
        <View style={styles.mainView}>
            <ImageBackground borderRadius={wp(5)} style={styles.imgBackgroundStyle} source={props.source} />
            <View style={styles.view1}>
                <View style={styles.commentAreaView}>
                    <Image resizeMode='contain' source={appIcons.heartGrey} style={styles.bottomIcon} />
                    <Image resizeMode='contain' source={appIcons.comment} style={styles.bottomIcon} />
                </View>
                <Image resizeMode='contain' source={appIcons.bookmark} style={styles.bottomIcon} />
            </View>
            <View style={styles.userProfileView}>
                <View style={[appStyles.row, appStyles.aiCenter]}>
                    <Image resizeMode='contain' source={props.userPic} style={styles.userPic} />
                    <View style={styles.userTextView}>
                        <Text style={styles.userNameText}>{props.userName}</Text>
                        <Text style={styles.timeText}>{props.time}</Text>
                    </View>
                </View>
                <Image resizeMode='contain' source={appIcons.more} style={styles.moreImg} />
            </View>
        </View>
    )
}

export default SocialComponent

const styles = StyleSheet.create({
    mainView: {
        marginVertical: hp(2),
        height: hp(29.5),
        backgroundColor: colors.whitish,
        borderRadius: wp(5)
    },
    imgBackgroundStyle: {
        width: wp(90),
        height: hp(25),
    },
    view1: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(4),
        marginTop: hp(1)
    },
    commentAreaView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: wp(12)
    },
    bottomIcon: {
        width: wp(4.5),
        height: wp(4.5)
    },
    userProfileView: {
        zIndex: 20,
        bottom: hp(26),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(4),
        alignItems: "center"
    },
    userPic: {
        width: wp(10),
        height: wp(10),
        borderRadius: wp(5)
    },
    userTextView: {
        marginLeft: wp(1.5)
    },
    userNameText: {
        color: colors.white,
        fontSize: 11,
        fontFamily: fontFamily.appTextBold
    },
    timeText: {
        color: colors.white,
        fontSize: 11,
        fontFamily: fontFamily.appTextRegular
    },
    moreImg: {
        tintColor: colors.white,
        width: wp(5),
        height: wp(5),
    }
})