import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appIcons, colors, fontFamily, hp, wp } from '../../services'
import appStyles from '../../services/utilities/appStyles'

const SuggestionCard = (props) => {
    const dayArray = [
        {
            text: "S",
            dayOn: false
        },
        {
            text: "M",
            dayOn: true
        },
        {
            text: "T",
            dayOn: true
        },
        {
            text: "W",
            dayOn: true
        },
        {
            text: "T",
            dayOn: true
        },
        {
            text: "F",
            dayOn: true
        },
        {
            text: "S",
            dayOn: false
        },
    ]
    const OnDayIndicator = (props) => {
        return (
            <View style={[styles.onDayView, { backgroundColor: props.dayOn ? colors.theme : colors.grey, }]}>
                <Text style={{ fontSize: 6, color: props.dayOn ? colors.white : colors.blackLight }}>{props.text}</Text>
            </View>
        )
    }
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.mainView}>
            <Image resizeMode='contain' source={props.source} style={styles.mainImageView} />
            <View style={[appStyles.flex1]}>
                <View style={styles.subView}>
                    <View style={[appStyles.row]}>
                        <Image resizeMode='contain' source={appIcons.star} style={styles.starIconStyle} />
                        <Text style={styles.ratingText}>{props.rating}</Text>
                    </View>
                    <View style={styles.wageMainView}>
                        <Text style={styles.wageDollarText}>$</Text>
                        <Text style={styles.wageText}>{props.wage}</Text>
                        <Text style={styles.wageHrText}>/hr</Text>
                    </View>
                </View>
                <View style={styles.workView}>
                    <Text style={styles.workText}>{props.work}</Text>
                    <Text style={styles.companyText}>{`By ${props.company}`}</Text>
                </View>
                <View style={styles.locationView}>
                    <Image resizeMode='contain' source={appIcons.location} style={styles.locationIcon} />
                    <Text style={styles.adressText}>{props.adress}</Text>
                </View>
                <View style={styles.timingView}>
                    <Image resizeMode='contain'
                        source={appIcons.blacktime} style={styles.clockIcon} />
                    <Text style={styles.clockText}
                    >{`${props.opening} - ${props.closing}`}</Text>
                </View>
                {
                    props.daylist &&
                    <FlatList
                        style={{ marginHorizontal: wp(3.5) }}
                        data={dayArray}
                        horizontal
                        renderItem={({ item, index }) => <OnDayIndicator text={item.text} dayOn={item.dayOn} />}
                    />
                }
            </View>
        </TouchableOpacity>
    )
}
export default SuggestionCard

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        backgroundColor: colors.whitish,
        width: wp(90),
        alignSelf: "center",
        borderRadius: wp(3),
        marginBottom: hp(2)
    },
    mainImageView: {
        width: wp(25),
        height: wp(25),
        borderRadius: wp(3)
    },
    subView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(1),
        marginTop: hp(1)
    },
    starIconStyle: {
        width: wp(2),
        height: wp(2),
    },
    ratingText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 9,
        marginTop: hp(-.4),
        marginLeft: wp(.5)
    },
    wageMainView: {
        flexDirection: "row",
        marginRight: wp(2)
    },
    wageDollarText: {
        color: colors.blackLight,
        fontSize: 6.5,
        fontFamily: fontFamily.appTextRegular,
        paddingTop: hp(.2),
        paddingRight: wp(.3)
    },
    wageText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 13.5
    },
    wageHrText: {
        color: colors.blackLight,
        fontSize: 8,
        fontFamily: fontFamily.appTextRegular,
        paddingTop: hp(.9)
    },
    workView: {
        marginTop: hp(-1.5),
        paddingHorizontal: wp(1)
    },
    workText: {
        color: colors.black,
        fontSize: 12,
        fontFamily: fontFamily.appTextBold
    },
    companyText: {
        color: colors.dateColor,
        fontSize: 9,
    },
    locationView: {
        flexDirection: "row",
        marginTop: hp(1),
        alignItems: "center",
        paddingHorizontal: wp(1)
    },
    locationIcon: {
        width: wp(3),
        height: wp(3)
    },
    adressText: {
        color: colors.blackLight,
        fontSize: 8,
        fontFamily: fontFamily.appTextRegular,
        marginLeft: wp(1)
    },
    timingView: {
        flexDirection: "row",
        marginTop: hp(.4),
        alignItems: "center",
        paddingHorizontal: wp(1.2),
    },
    clockIcon: {
        width: wp(2.7),
        height: wp(2.7)
    },
    clockText: {
        color: colors.blackLight,
        fontSize: 8,
        fontFamily: fontFamily.appTextRegular,
        marginLeft: wp(1),

    },
    onDayView: {
        width: wp(3),
        height: wp(3),
        borderRadius: wp(3),
        alignItems: "center",
        alignSelf: "center",
        marginLeft: wp(1),
        justifyContent: "center",
        marginVertical: wp(1),
    }
})