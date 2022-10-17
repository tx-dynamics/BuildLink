import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps'

import { Button, Header } from '../../../components'
import { appIcons, appImages, colors, hp, routes, wp } from '../../../services'
import { styles } from './styles'
import appStyles from '../../../services/utilities/appStyles'
import MapWorkerCard from '../../../components/mapworkercard'

export default function MapScreen(props) {
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
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Choose Location'} leftIconView={{}} leftIcon={appIcons.backArrow} onPress={() => props.navigation.goBack()} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1, styles.topMainView]}>
                    <View style={[appStyles.row, styles.searchView]}>
                        <Image resizeMode='contain' source={appIcons.search} style={styles.searchImg} />
                        <TextInput style={styles.searchTextinput} placeholder='Search Area,City or State'
                            placeholderTextColor={colors.greyDark} />
                        <TouchableOpacity onPress={() => setIsShow(!isShow)}>
                            <Image resizeMode='contain' source={appIcons.calnderdownarrow} style={styles.dropDwonImg} />
                        </TouchableOpacity>
                    </View>
                    {
                        isShow &&
                        <View style={styles.gpsView}>
                            <TouchableOpacity style={[appStyles.row, { marginTop: hp(2) }]}>
                                <Image resizeMode='contain' source={appIcons.gps} style={styles.gpsImg} />
                                <Text style={styles.currentLocationText}>Use Current Location</Text>
                            </TouchableOpacity>
                            <Text style={styles.recentLocationText}>Reccent Locations</Text>
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
                    <View style={styles.btnView}>
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