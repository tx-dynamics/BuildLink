import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import appStyles from '../../services/utilities/appStyles'
import { appIcons, colors, fontFamily, hp, wp } from '../../services'

const SubscriptionModal = (props) => {
    return (
        <View style={[appStyles.flex1, styles.mainView]}>
            <View style={styles.modalMainView}>
                {props.skip &&
                    <TouchableOpacity onPress={props.skipPress} style={styles.skipView}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                }
                <View style={{ alignItems: "center", paddingHorizontal: wp(9.5), }}>
                    <Image resizeMode='contain' source={appIcons.subscriptionIcon} style={styles.subImage} />
                    <Text style={styles.subscriptionText}>Subscription Alert</Text>
                    <Text style={styles.subText}>You have not a premiun member. Join our community to find the most skilled persons near you.</Text>
                    <TouchableOpacity onPress={props.btnPress}>
                        <Image resizeMode='contain' source={appIcons.subscribeButton} style={styles.subBtn} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default SubscriptionModal

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 100,
        alignItems: "center",
        justifyContent: "center"

    },
    modalMainView: {
        backgroundColor: "white",
        alignSelf: "center",
        width: wp(80),
        paddingVertical: hp(3),
        marginTop: hp(3),
        borderRadius: wp(5),


    },
    skipView: {
        alignItems: "flex-end",
        paddingHorizontal: wp(5)

    },
    skipText: {
        color: colors.theme,
        fontSize: 12
    },
    subImage: {
        width: wp(33),
        height: wp(33)
    },
    subscriptionText: {
        color: colors.black,
        fontFamily: fontFamily.appTextBold,
        fontSize: 15,
        marginVertical: hp(2)
    },
    subText: {
        color: colors.blackLight,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 12,
        textAlign: "center"
    },
    subBtn: {
        width: wp(47),
        height: wp(39)
    }
})