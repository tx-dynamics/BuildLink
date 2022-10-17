import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList } from 'react-native'

import { appIcons, colors, fontFamily, hp, wp } from '../../services'
import appStyles from '../../services/utilities/appStyles'
import Button from '../button'

const SkilledNearby = props => {
    return (
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <View style={{ width: wp(14) }}>
                    <Image source={props.image} style={styles.profileImg} />
                </View>
                <View style={{ flex: 1, paddingLeft: wp(2) }}>
                    <View style={appStyles.rowBtw}>
                        <Text style={styles.title}>{props.title}</Text>
                        <TouchableOpacity style={[appStyles.row, styles.ratingStyle]}>
                            <Image source={appIcons.star} style={styles.moreIcon} />
                            <Text style={styles.ratingText}>4.5</Text>
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
            <View style={styles.sendView}>
                <View style={styles.blackSendView}>
                    <Image resizeMode='contain' source={appIcons.blackSend} style={styles.blackSendImg} />
                    <Text style={styles.milesText}>10 miles away</Text>
                </View>
                <View style={{
                    width: wp(16)
                }}>
                    <Button style={{ fontSize: 10 }} containerStyle={styles.btcContainer} >Apply</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp(4),
        marginBottom: hp(2),
        paddingVertical: hp(1),
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
        flexWrap: 'wrap',
        borderBottomWidth: .5,
        borderBottomColor: colors.borderLine

    },
    tagView: {
        backgroundColor: colors.tagColor,
        paddingVertical: hp(0.5),
        marginRight: wp(3),
        paddingHorizontal: wp(3),
        borderRadius: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp(2)
    },
    tagText: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: 10,
        color: colors.blackLight,
    },
    ratingStyle: {
        alignItems: "center"
    },
    ratingText: {
        color: colors.black,
        fontSize: 8,
        marginLeft: 3,
        fontFamily: fontFamily.appTextRegular
    },
    sendView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    blackSendView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: wp(-2)
    },
    blackSendImg: {
        width: wp(10),
        height: wp(10),
        top: wp(.7)
    },
    milesText: {
        color: colors.black,
        fontSize: 9
    },
    btcContainer: {
        borderRadius: 5,
        height: hp(3)
    },
})

export default SkilledNearby
