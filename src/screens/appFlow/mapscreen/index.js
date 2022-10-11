import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header } from '../../../components'
import appStyles from '../../../services/utilities/appStyles'
import { appIcons, colors, fontFamily, hp, wp } from '../../../services'
import MapView from 'react-native-maps'

export default function MapScreen() {
    const [isShow, setIsShow] = useState(false)
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Choose Location'} leftIconView={{}} leftIcon={appIcons.backArrow} onPress={() => navigation.goBack()} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1, { borderRadius: 50, zIndex: 10 }]}>
                    <View style={[appStyles.row, {
                        alignItems: "center",
                        borderWidth: .5,
                        borderColor: colors.theme,
                        width: wp(90),
                        alignSelf: "center",
                        paddingHorizontal: wp(3),
                        borderRadius: wp(7),
                        marginBottom: hp(2)
                    }]}>
                        <Image resizeMode='contain' source={appIcons.search} style={{ width: wp(5), height: wp(5) }} />
                        <TextInput style={{
                            color: colors.black,
                            width: wp(70),
                            marginLeft: wp(2),
                            fontFamily: fontFamily.appTextRegular
                        }} placeholder='Search Area,City or State'
                            placeholderTextColor={colors.greyDark} />
                        <TouchableOpacity onPress={() => setIsShow(!isShow)}>
                            <Image resizeMode='contain' source={appIcons.calnderdownarrow} style={{
                                width: wp(5),
                                height: wp(5)
                            }} />
                        </TouchableOpacity>
                    </View>
                    {
                        isShow &&
                        <View style={{
                            position: "absolute",
                            height: hp(12),
                            top: hp(7),
                            width: wp(100),
                            zIndex: 10,
                            backgroundColor: colors.white,
                            paddingHorizontal: wp(5),
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,


                        }}>
                            <TouchableOpacity style={[appStyles.row, { marginTop: hp(2) }]}>
                                <Image resizeMode='contain' source={appIcons.gps} style={{
                                    width: wp(5),
                                    height: wp(5)
                                }} />
                                <Text style={{
                                    color: colors.black,
                                    marginLeft: wp(10),
                                    fontFamily: fontFamily.appTextRegular
                                }}>
                                    Use Current Location
                                </Text>
                            </TouchableOpacity>
                            <Text style={{
                                color: colors.black,
                                marginTop: hp(3),
                                marginLeft: wp(15),
                                fontFamily: fontFamily.appTextBold,
                                borderBottomLeftRadius: 50
                            }}>
                                Reccent Locations
                            </Text>

                        </View>
                    }
                    <MapView style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView >
    )
}