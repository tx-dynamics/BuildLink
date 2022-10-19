import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'
import ImagePicker from 'react-native-image-crop-picker';

import appStyles from '../../../services/utilities/appStyles'
import { appIcons, appImages, colors, fontFamily, hp, routes, wp } from '../../../services'
import { Button, Header, Input } from '../../../components'
import { styles } from './styles'

const SkilledApply = (props) => {
    const [countryCode, setCountryCode] = useState('PK')
    const [country, setCountry] = useState({ callingCode: ['+92'] })
    const [withFilter, setWithFilter] = useState(true)
    const [skillPic, setSkillPic] = useState([])
    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
    }
    const ImageComponent = (props) => {
        return (
            skillPic.length !== 0 ?
                <Image
                    resizeMode='contain'
                    source={props.source}
                    style={{ width: wp(20), height: wp(20), marginHorizontal: wp(1.5), borderRadius: wp(4), backgroundColor: "blue" }} /> : null
        )
    }
    const imageSelect = () => ImagePicker.openPicker({
        width: 200,
        height: 300,
        cropping: true
    }).then(image => {
        let temp = Object.assign([], skillPic);
        temp.push({
            pic: image.path
        })
        setSkillPic(temp)

        console.log(skillPic)
    });

    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Apply'} leftIconView leftIcon={appIcons.backArrow} onPress={() => props.navigation.goBack()} />
            <View style={[appStyles.flex1, { paddingHorizontal: wp(5) }]}>
                <View >
                    <Input placeholder={"Enter your name"} containerStyle={{ backgroundColor: colors.whitish, borderRadius: wp(4), height: hp(6) }} titleStyle={styles.titleText} >Name</Input>
                    <Text style={{
                        color: colors.black,
                        fontFamily: fontFamily.appTextBold,
                        marginBottom: hp(-2)
                    }}>Phone Number</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        {/* <Input drop flag placeholder={"+92"} placeholderTextColor={colors.black} paddingHorizontal={wp(2)} containerStyle={{ width: wp(25), borderRadius: wp(5) }} titleStyle={styles.titleText}>Phone Number</Input> */}
                        <View style={{
                            backgroundColor: colors.whitish,
                            flexDirection: "row",
                            alignItems: "center",
                            borderRadius: wp(3),
                            height: hp(6),
                            top: hp(-.4)

                        }}>
                            <>
                                <CountryPicker
                                    theme={{ fontSize: 13, fontFamily: fontFamily.appTextRegular, flagSizeButton: 14, }}
                                    {...{
                                        countryCode,
                                        withFilter,
                                        withFlagButton: true,
                                        containerButtonStyle: {},
                                        onSelect,
                                        withCallingCodeButton: true,
                                        // theme: { fontSize: 14, fontFamily: fontFamily.appTextMedium, onBackgroundTextColor: theme.colorLight, filterPlaceholderTextColor: theme.color, backgroundColor: theme.background }
                                    }}
                                    visible={false}
                                />
                            </>
                            <Image resizeMode='contain' source={appIcons.arrowDown} style={{
                                width: wp(3.5),
                                height: wp(3.5),
                                marginHorizontal: wp(1.5),
                                tintColor: colors.black
                            }} />
                        </View>
                        <Input placeholder={"Type"} containerStyle={{ marginLeft: wp(2), backgroundColor: colors.whitish, width: wp(62), borderRadius: wp(4), height: hp(6) }} titleStyle={styles.titleText} ></Input>
                    </View>
                    <Input placeholder={"Enter your location"} gps onPressGps={() => props.navigation.navigate(routes.maps)} containerStyle={{ backgroundColor: colors.whitish, borderRadius: wp(4), height: hp(6) }} titleStyle={styles.titleText} >Adress</Input>
                    <Input placeholder={"Explain your skill"} containerStyle={{ backgroundColor: colors.whitish, borderRadius: wp(4), height: hp(6) }} titleStyle={styles.titleText} >About you</Input>
                    <Text style={{
                        color: colors.black,
                        fontFamily: fontFamily.appTextBold,

                    }}>Your Work</Text>
                    <View style={{ marginTop: hp(1) }}>
                        <FlatList
                            style={{}}
                            data={skillPic}
                            horizontal
                            ListFooterComponent={({ item }) =>
                                <TouchableOpacity style={{}} onPress={() => imageSelect()} >
                                    <Image resizeMode='contain' source={appIcons.addImage} style={{ marginHorizontal: wp(1), width: wp(20.5), height: wp(20.5), borderRadius: wp(4), }} />
                                </TouchableOpacity >
                            }
                            renderItem={({ item }) =>
                                <ImageComponent source={{ uri: item.pic }} />
                            }
                        />
                    </View>
                    <View style={{ width: wp(40), alignSelf: "center", marginTop: hp(12) }}>
                        <Button style={{ fontSize: 14 }} containerStyle={{ borderRadius: wp(3) }} >Apply</Button>
                    </View>
                </View>
            </View>
        </SafeAreaView >

    )
}

export default SkilledApply
