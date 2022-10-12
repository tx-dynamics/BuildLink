import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../services'
import appStyles from '../../services/utilities/appStyles'

const MapWorkerCard = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.mainView}>
            <Image resizeMode='contain' source={props.source} style={styles.mainImageView} />
            <View style={[appStyles.flex1, { paddingHorizontal: wp(2), }]}>
                <View style={styles.subView}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: wp(58) }}>
                        <View style={styles.workView}>
                            <Text style={styles.workText}>{props.work}</Text>
                            <Text style={styles.companyText}>{`By ${props.company}`}</Text>
                        </View>
                        <View style={[appStyles.row, {}]}>
                            <Image resizeMode='contain' source={appIcons.star} style={styles.starIconStyle} />
                            <Text style={styles.ratingText}>{props.rating}</Text>
                        </View>
                    </View>
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

            </View>
        </TouchableOpacity>
    )
}
export default MapWorkerCard

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        backgroundColor: colors.whitish,
        paddingHorizontal: wp(3),
        paddingVertical: hp(1),
        width: wp(90),
        alignSelf: "center",
        borderRadius: wp(3),
        marginBottom: hp(2),
        shadowColor: "#000F",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 7,
    },
    mainImageView: {
        width: wp(23),
        height: wp(22),
        borderRadius: wp(4)
    },
    subView: {
        flexDirection: "row",
        justifyContent: "space-between",
        //paddingHorizontal: wp(3),
        marginTop: hp(2)
    },
    starIconStyle: {
        width: wp(3),
        height: wp(3),
    },
    ratingText: {
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 11,
        marginTop: hp(-.4),
        marginLeft: wp(.5)
    },
    wageMainView: {
        flexDirection: "row",
        marginRight: wp(2)
    },
    wageDollarText: {
        color: colors.blackLight,
        fontSize: 7,
        fontFamily: fontFamily.appTextRegular
    },
    wageText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 13
    },
    wageHrText: {
        color: colors.blackLight,
        fontSize: 8,
        fontFamily: fontFamily.appTextRegular,
    },
    workView: {
        marginTop: hp(-1.5),
        paddingHorizontal: wp(1),


    },
    workText: {
        color: colors.black,
        fontSize: 13,
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
        marginTop: .5,
        alignItems: "center",
        paddingHorizontal: wp(1),
    },
    clockIcon: {
        width: wp(3),
        height: wp(3)
    },
    clockText: {
        color: colors.blackLight,
        fontSize: 8,
        fontFamily: fontFamily.appTextRegular,
        marginLeft: wp(1)
    }
})