import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, Header } from '../../../components'
import appStyles from '../../../services/utilities/appStyles'
import { appIcons, appImages, colors, fontFamily, hp, routes, wp } from '../../../services'
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps'
import { styles } from './styles'
import MapWorkerCard from '../../../components/mapworkercard'

export default function MapScreen(props) {
    const mapArray = [
        {
            isMarkerShow: true,
            latitude: 37.78830,
            longitude: -122.4220,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },

        {
            isMarkerShow: false,
            latitude: 37.77720,
            longitude: -122.4120,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },

        {
            isMarkerShow: false,
            latitude: 37.7720,
            longitude: -122.4520,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    ]
    useEffect(() => {


    }, [])
    const [isShow, setIsShow] = useState(false)
    const [isIndex, setIsIndex] = useState(null)
    const [mapData, setMapData] = useState([{
        isMarkerShow: true,
        latitude: 37.78830,
        longitude: -122.4220,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },

    {
        isMarkerShow: false,
        latitude: 37.77720,
        longitude: -122.4120,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },

    {
        isMarkerShow: false,
        latitude: 37.7720,
        longitude: -122.4520,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }])
    const setMarker = (index) => {
        if (index === isIndex) {
            setIsIndex(null)
        } else {

            setIsIndex(index)
        }
    }
    let temp = []
    // useEffect(() => {

    //     temp.push({
    //         lat: mapData.longitude
    //     })
    //     console.log(temp)

    // }, [])
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Choose Location'} leftIconView={{}} leftIcon={appIcons.backArrow} onPress={() => props.navigation.goBack()} />
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
                                width: wp(4),
                                height: wp(4)
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
                    <MapView
                        //zoomEnabled={false}
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        {mapData?.map((item, index) => {
                            return (
                                <Marker
                                    onPress={() => setMarker(index)}
                                    key={index}
                                    coordinate={{
                                        longitude: item.longitude,
                                        latitude: item.latitude
                                    }}
                                >
                                    {index == isIndex ?
                                        <MapWorkerCard
                                            source={appImages.labourpic}
                                            rating={"4.5"}
                                            company={"Ms.Hannah"}
                                            adress={"8700 Commerce Park Houston texas"}
                                            opening={"9:00AM"}
                                            closing={"11:30PM"}
                                            work={"Plumber"}
                                        /> : null
                                    }
                                    <View>
                                        <Image resizeMode='contain' style={styles.pinStyle} source={index == isIndex ? appIcons.activelocation : appIcons.inactivelocation} />

                                    </View>
                                </Marker>
                            )
                        })}
                    </MapView>
                    <View style={{
                        width: wp(40),
                        position: "absolute",
                        alignSelf: "center",
                        bottom: hp(7)
                    }}>

                        <Button
                            onPress={() => props.navigation.navigate(routes.requestDetail)}
                            containerStyle={{ borderRadius: wp(4) }}
                            style={{ fontSize: 15 }}

                        >Confirm</Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView >
    )
}