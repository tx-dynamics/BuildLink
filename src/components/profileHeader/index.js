import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'

import { appIcons, colors, fontFamily, hp, wp } from '../../services'

const ProfileHeader = props => {
    return (
        <View style={styles.topContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={props.onPressEditProfile} style={styles.editProfileView}>
                    <Text style={styles.editProfile}>Edit Profile</Text>
                </TouchableOpacity>
                <View style={styles.imageTopView}>
                    <Image source={props.profileImage} style={styles.imageStyle} />
                    <TouchableOpacity onPress={props.onPressCamera} style={styles.cameraTopView}>
                        <Image source={appIcons.cameraIcon} style={styles.cameraIcon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>{props.title}</Text>
                <TouchableOpacity>
                    <Text style={styles.addNewProject}>Add New Project</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    topContainer: {
        width: wp(100),
        height: hp(30),
    },
    container: {
        width: wp(100),
        height: hp(12),
        backgroundColor: colors.theme,
        borderBottomLeftRadius: wp(4),
        borderBottomRightRadius: wp(4)
    },
    editProfileView: {
        alignItems: 'flex-end',
        paddingHorizontal: wp(6),
        paddingTop: wp(4)
    },
    editProfile: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: 14,
        color: colors.white
    },
    imageTopView: {
        width: wp(32),
        height: wp(32),
        borderRadius: wp(16),
        backgroundColor: colors.white,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: wp(32),
        height: wp(32),
        borderRadius: wp(16),
        resizeMode: 'contain'
    },
    cameraTopView: {
        width: wp(6),
        height: wp(6),
        borderRadius: wp(3),
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: wp(0),
        right: wp(4),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cameraIcon: {
        width: wp(4),
        height: wp(4),
        resizeMode: 'contain'
    },
    title: {
        fontFamily: fontFamily.appTextBold,
        fontSize: 14,
        color: colors.black,
        alignSelf: 'center',
        paddingTop: hp(1),
        paddingBottom: hp(0.5)
    },
    addNewProject: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: 14,
        color: colors.black,
        alignSelf: 'center',
    },
})

export default ProfileHeader
