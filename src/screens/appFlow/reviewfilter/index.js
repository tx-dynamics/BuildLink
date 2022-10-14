import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import appStyles from '../../../services/utilities/appStyles'
import { appIcons, colors, fontFamily, hp, routes, wp } from '../../../services'
import { Button, Header } from '../../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './styles'

const ReviewFilter = (props) => {
    const TradesmanArray = [
        {
            id: 1,
            text: "Plumber",
        },
        {
            id: 2,
            text: "Electrician",
        },
    ]
    const Tradesmancomponent = (props) => {
        return (
            <View style={styles.tradesManView}>
                <Text style={styles.tradesmanText}>{props.tradesman}</Text>
                <TouchableOpacity style={styles.trademanToucView} onPress={() => console.log("first")}>
                    <Image resizeMode='contain' source={appIcons.closebtn} style={styles.tradesmanImage} />
                </TouchableOpacity>
            </View >
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={"Filter"} rightIcon={appIcons.cross} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1, { paddingHorizontal: wp(4) }]}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottomColor: colors.whitish,
                        paddingVertical: hp(2),
                        borderBottomWidth: 1
                    }}>
                        <Text style={{
                            color: colors.black,
                            fontFamily: fontFamily.appTextBold,
                            fontSize: 15
                        }}>Area Radius</Text>
                        <Text style={{
                            color: colors.black,
                            fontFamily: fontFamily.appTextRegular,
                            fontSize: 13
                        }}>10 Miles</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottomColor: colors.whitish,
                        paddingVertical: hp(2),
                        borderBottomWidth: 1
                    }}>
                        <Text style={{
                            color: colors.black,
                            fontFamily: fontFamily.appTextBold,
                            fontSize: 15
                        }}>Selected Tradesman</Text>
                        <FlatList
                            horizontal
                            data={TradesmanArray}
                            renderItem={({ item, index }) =>
                                <Tradesmancomponent tradesman={item.text} />}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottomColor: colors.whitish,
                        paddingVertical: hp(2),
                        borderBottomWidth: 1
                    }}>
                        <Text style={{
                            color: colors.black,
                            fontFamily: fontFamily.appTextBold,
                            fontSize: 15
                        }}>Rate/hr</Text>
                        <View style={{ flexDirection: "row" }}>

                            <Text style={{
                                color: colors.black,
                                fontFamily: fontFamily.appTextRegular,
                                fontSize: 13
                            }}>$10/hr</Text>
                            <Text style={{
                                color: colors.black,
                                fontFamily: fontFamily.appTextRegular,
                                fontSize: 13
                            }}>  $24/hr</Text>
                        </View>
                    </View>
                    <Text style={{
                        color: colors.black,
                        fontFamily: fontFamily.appTextBold,
                        fontSize: 15,
                        marginVertical: hp(2)
                    }} >Date & Time Range</Text>
                    <View style={{
                        flexDirection: "row",
                        //justifyContent: "space-evenly"
                    }}>
                        <Text style={{
                            color: colors.greyDark,
                            marginLeft: wp(5)
                        }}>
                            22,July,2022 , 6:35PM
                        </Text>
                        <Text style={{
                            color: colors.greyDark,
                            marginLeft: wp(10)
                        }}>
                            25,July,2022 , 6:35PM
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <Button containerStyle={styles.btnContainerStyle} style={styles.btnText} onPress={() => props.navigation.navigate(routes.homeScreen)} >Apply Filter</Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ReviewFilter

