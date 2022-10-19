import { View, Text, SafeAreaView, StatusBar, Image, FlatList } from 'react-native'
import React from 'react'
import appStyles from '../../../services/utilities/appStyles'
import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../../services'
import StarRating from 'react-native-star-rating';

const SkilledProfile = () => {
    const catArray = [
        {
            cat: "Plumber"
        },
        {
            cat: "Electrician"
        },
    ]
    const workPics = [
        {
            pic: appIcons.plumber1
        },
        {
            pic: appIcons.plumber2
        },
        {
            pic: appIcons.plumber3
        },
        {
            pic: appIcons.plumber4
        },
        {
            pic: appIcons.plumber5
        },
        {
            pic: appIcons.plumber6
        },
        {
            pic: appIcons.plumber7
        },
    ]
    const RenderCategories = (props) => {
        return (
            <View style={{ backgroundColor: colors.catColor, padding: 5, paddingHorizontal: wp(4), alignItems: "center", justifyContent: "center", marginLeft: wp(3.5), borderRadius: wp(4) }}>
                <Text style={{ color: colors.black, fontSize: 12, fontFamily: fontFamily.appTextRegular }}>{props.cat}</Text>
            </View>
        )
    }
    const RenderPastWork = (props) => {
        return (
            <View style={{ paddingRight: wp(6), marginBottom: hp(1.5) }}>
                <Image resizeMode='contain' source={props.source} style={{ width: wp(42), height: hp(22), borderRadius: wp(2.1) }} />
            </View>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <View style={[appStyles.flex1, { paddingHorizontal: wp(5), }]}>
                <Image resizeMode='contain' source={appIcons.notification} style={{ width: wp(6), height: wp(6), alignSelf: "flex-end", marginTop: hp(2.5) }} />
                <View style={{ alignItems: "center" }}>
                    <Image resizeMode='contain' source={appImages.profileImg} style={{ width: wp(27), height: wp(27), }} />
                    <View style={{
                        position: "absolute",
                        width: wp(5.5),
                        height: wp(5.5),
                        borderRadius: wp(3),
                        backgroundColor: colors.white,

                        bottom: hp(.01),
                        left: wp(49),
                        alignItems: "center",
                        justifyContent: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 7,
                    }}>
                        <Image resizeMode='contain' source={appIcons.cameraIcon} style={{ width: wp(3), height: wp(3), }} />
                    </View>
                </View>
                <View style={{ marginTop: hp(1), alignItems: "center" }}>
                    <Text style={{ color: colors.black, fontFamily: fontFamily.appTextBold, fontSize: 12 }}>Jeff Vanah</Text>
                    <Text style={{ color: colors.black, fontFamily: fontFamily.appTextRegular, fontSize: 11 }}>City, State</Text>
                    <View style={{ flexDirection: "row", marginTop: hp(1), paddingLeft: wp(14.5) }}>
                        <StarRating
                            disabled={true}
                            emptyStarColor={"#9C9C9C"}
                            fullStarColor={"green"}
                            fullStar={appIcons.star}
                            emptyStar={appIcons.greyStar}
                            starStyle={{ width: wp(3.5), height: wp(3.5), marginHorizontal: wp(.4) }}
                            maxStars={5}
                            rating={4}

                        />
                        <Text style={{ color: colors.black, fontFamily: fontFamily.appTextRegular, fontSize: 11, marginLeft: 10 }}>4.5 (35)</Text>
                    </View>

                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: hp(1.5) }}>
                    <Text style={{ color: colors.black, fontFamily: fontFamily.appTextBold, fontSize: 13 }}>Categories</Text>
                    <Image resizeMode='contain' source={appIcons.addGrey} style={{ width: wp(6), height: wp(6), }} />
                </View>
                <View style={{ marginTop: hp(1.5), marginLeft: wp(5) }}>
                    <FlatList
                        horizontal
                        data={catArray}
                        renderItem={({ item }) => <RenderCategories cat={item.cat} />}
                    />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: hp(2) }}>
                    <Text style={{ color: colors.black, fontFamily: fontFamily.appTextBold, fontSize: 13 }}>Past Work</Text>
                    <Image resizeMode='contain' source={appIcons.addGrey} style={{ width: wp(6), height: wp(6), }} />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={workPics}
                        renderItem={({ item }) => <RenderPastWork source={item.pic} />}
                    />
                </View>
            </View>
        </SafeAreaView>

    )
}

export default SkilledProfile