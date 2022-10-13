import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import appStyles from '../../../services/utilities/appStyles'
import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../../services'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SuggestionCard from '../../../components/suggestioncard'

const SearchResult = (props) => {
    const categorArray = [
        {
            id: 1,
            labourPic: appImages.labourpic,
            rating: 4.6,
            wage: 25,
            company: "Ms Hannah",
            adress: "8700 Commerce Park Houston texas",
            opening: "9:30AM",
            closing: "8:30PM",
            pic: appIcons.cat1,
            text: "Plumber",
            shade: true
        },
        {
            id: 2,
            labourPic: appImages.labourpic,
            rating: 4.6,
            wage: 25,
            company: "Ms Hannah",
            adress: "8700 Commerce Park Houston texas",
            opening: "9:30AM",
            closing: "8:30PM",
            pic: appIcons.cat2,
            text: "Cleaning",
            shade: true
        },
        {
            id: 3,
            labourPic: appImages.labourpic,
            rating: 4.6,
            wage: 25,
            company: "Ms Hannah",
            adress: "8700 Commerce Park Houston texas",
            opening: "9:30AM",
            closing: "8:30PM",
            pic: appIcons.cat3,
            text: "Laundry",
            shade: false
        },
        {
            id: 4,
            labourPic: appImages.labourpic,
            rating: 4.6,
            wage: 25,
            company: "Ms Hannah",
            adress: "8700 Commerce Park Houston texas",
            opening: "9:30AM",
            closing: "8:30PM",
            pic: appIcons.cat4,
            text: "Repairing",
            shade: false
        },
        {
            id: 5,
            labourPic: appImages.labourpic,
            rating: 4.6,
            wage: 25,
            company: "Ms Hannah",
            adress: "8700 Commerce Park Houston texas",
            opening: "9:30AM",
            closing: "8:30PM",
            pic: appIcons.cat5,
            text: "Polishing",
            shade: false
        },
        {
            id: 6,
            labourPic: appImages.labourpic,
            rating: 4.6,
            wage: 25,
            company: "Ms Hannah",
            adress: "8700 Commerce Park Houston texas",
            opening: "9:30AM",
            closing: "8:30PM",
            pic: appIcons.cat4,
            text: "Painting",
            shade: false
        },
        {
            id: 7,
            labourPic: appImages.labourpic,
            rating: 4.6,
            wage: 25,
            company: "Ms Hannah",
            adress: "8700 Commerce Park Houston texas",
            opening: "9:30AM",
            closing: "8:30PM",
            pic: appIcons.cat4,
            text: "Plumber",
            shade: false
        },
    ]
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1,]}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: wp(4),
                        marginVertical: hp(2),
                    }}>
                        <Text style={{ color: "black", fontSize: 16, fontFamily: fontFamily.appTextBold }}>{`Results for "${props.route.params.item.text}"`}</Text>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image resizeMode='contain' source={appIcons.cross} style={{
                                width: wp(4),
                                height: wp(4)
                            }} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={categorArray}
                        renderItem={({ item, index }) => <SuggestionCard
                            onPress={() => navigation.navigate(routes.serviceProvider)}
                            source={item.labourPic}
                            rating={item.rating}
                            wage={item.wage}
                            company={item.company}
                            adress={item.adress}
                            opening={item.opening}
                            closing={item.closing}
                            work={item.text}
                        />} />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default SearchResult

const styles = StyleSheet.create({})