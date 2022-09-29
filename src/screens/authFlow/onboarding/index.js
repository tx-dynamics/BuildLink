import React, { useContext, useState } from 'react'
import { View, Text, StatusBar, Image, Switch, SafeAreaView } from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import { colors, fontFamily, hp, routes, wp } from '../../../services'
import { appIcons, appImages } from '../../../services/utilities/assets'
import { styles } from './styles'
import appStyles from '../../../services/utilities/appStyles'
import Button from '../../../components/button';

const OnboardingScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0)
    const onboardingArray = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a quam placerat.',
            image: appImages.onboarding1,
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a quam placerat.',
            image: appImages.onboarding2,
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a quam placerat.',
            image: appImages.onboarding3,
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a quam placerat.',
            image: appImages.onboarding4,
        },
    ]

    const DotComponent = (value) => {
        return (
            <View style={[appStyles.rowCenter, {
                position: 'absolute', bottom: hp(20), width: wp(22), alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center',
            }]}>
                <View style={[value.paginationIndex === 0 ? styles.dotComponentStyleTwo : styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 0 ? colors.theme : colors.grey }]} />
                <View style={[value.paginationIndex === 1 ? styles.dotComponentStyleTwo : styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 1 ? colors.theme : colors.grey }]} />
                <View style={[value.paginationIndex === 2 ? styles.dotComponentStyleTwo : styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 2 ? colors.theme : colors.grey }]} />
                <View style={[value.paginationIndex === 3 ? styles.dotComponentStyleTwo : styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 3 ? colors.theme : colors.grey }]} />
            </View >
        )
    }

    return (
        console.log(index),
        <SafeAreaView style={[appStyles.safeContainer]}>
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <View style={appStyles.flex1}>
                <View style={{ position: 'absolute', right: wp(-2.5), top: hp(-4), zIndex: 1 }}>
                    <Image source={appIcons.bgIcon} style={{ width: 112, height: 112, resizeMode: 'contain' }} />
                </View>
                <SwiperFlatList
                    showPagination
                    index={index}
                    PaginationComponent={(value) => [setIndex(value.paginationIndex), DotComponent(value)]}
                    data={onboardingArray}
                    renderItem={({ item }) => (
                        <View style={[styles.swiperTopView]}>
                            <View style={styles.imageTopView}>
                                <Image source={item.image} style={styles.imageStyle} />
                            </View>
                            <View style={{ paddingHorizontal: wp(9), paddingTop: hp(5) }}>
                                <Text style={{ fontFamily: fontFamily.appTextRegular, fontSize: 16, color: colors.black, textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a quam placerat.</Text>
                            </View>
                        </View>
                    )}
                />
                <View style={{ alignSelf: 'center', backgroundColor: 'red', width: 100, marginBottom: hp(7) }}>
                    <Button onPress={() => setIndex(3)}>{index === 3 ? 'Start' : 'Next'}</Button>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default OnboardingScreen