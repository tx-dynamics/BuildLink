import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList } from 'react-native'

import { appIcons, colors, fontFamily, hp, wp } from '../../services'
import appStyles from '../../services/utilities/appStyles'

const ProjectView = props => {
    return (
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <View style={{ width: wp(14) }}>
                    <Image source={props.image} style={styles.profileImg} />
                </View>
                <View style={{ flex: 1, paddingLeft: wp(2) }}>
                    <View style={appStyles.rowBtw}>
                        <Text style={styles.title}>{props.title}</Text>
                        <TouchableOpacity>
                            <Image source={appIcons.more} style={styles.moreIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.companyName}>{props.company}</Text>
                    <View style={styles.dateTopView}>
                        <View style={styles.dateView}>
                            <Image source={appIcons.date} style={styles.dateIcon} />
                            <Text style={styles.dateText}>{props.date}</Text>
                        </View>
                        <View style={styles.dateView}>
                            <Image source={appIcons.time} style={styles.dateIcon} />
                            <Text style={styles.dateText}>{props.time}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <FlatList
                keyExtractor={item => item.id}
                data={props.tagArray}
                style={styles.secondHalf}
                renderItem={(item) =>
                    <View style={styles.tagView}>
                        <Text style={styles.tagText}>{item.item.name}</Text>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp(4),
        marginBottom: hp(2),
        paddingVertical: hp(1.8),
        width: wp(90),
        backgroundColor: colors.whitish,
        borderRadius: 8
    },
    topHalf: {
        flexDirection: 'row',
        height: hp(8),
    },
    profileImg: {
        width: wp(11),
        height: wp(11),
        borderRadius: wp(6),
        resizeMode: 'contain',
        backgroundColor: colors.black
    },
    title: {
        fontFamily: fontFamily.appTextBold,
        fontSize: 16,
        color: colors.blackLight,
        maxWidth: wp(60)
    },
    moreIcon: {
        width: wp(2),
        height: hp(2.2),
        resizeMode: 'contain'
    },
    companyName: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: 10,
        color: colors.greyDark
    },
    dateTopView: {
        flexDirection: 'row',
        paddingTop: hp(0.8)
    },
    dateView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: wp(6)
    },
    dateIcon: {
        width: wp(3.5),
        height: wp(3.5),
        resizeMode: 'contain'
    },
    dateText: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: 10,
        paddingLeft: wp(2.5),
        color: colors.blackLight
    },
    secondHalf: {
        flex: 1,
        paddingTop: hp(0.5),
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tagView: {
        backgroundColor: colors.tagColor,
        paddingVertical: hp(0.5),
        marginRight: wp(4),
        paddingHorizontal: wp(3),
        borderRadius: wp(2),
        justifyContent: 'center',
        alignItems: 'center'
    },
    tagText: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: 10,
        color: colors.blackLight
    }

})

export default ProjectView
