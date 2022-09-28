import React, { useContext } from 'react'
import { View, Text, StatusBar, Image, Switch, SafeAreaView } from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import { colors, routes } from '../../../services'
import { appImages } from '../../../services/utilities/assets'
import { styles } from './styles'
import appStyles from '../../../services/utilities/appStyles'
import Button from '../../../components/button';
// import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen = ({ navigation }) => {
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
            <View style={[appStyles.rowCenter, appStyles.pb20]}>
                <View style={[styles.dotComponentActiveStyle, { borderWidth: value.paginationIndex === 0 ? 1 : 0 }]}>
                    <View style={[styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 0 ? colors.theme : colors.grey }]} />
                </View>
                <View style={[styles.dotComponentActiveStyle, appStyles.mh15, { borderWidth: value.paginationIndex === 1 ? 1 : 0 }]}>
                    <View style={[styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 1 ? colors.theme : colors.grey }]} />
                </View>
                <View style={[styles.dotComponentActiveStyle, { borderWidth: value.paginationIndex === 2 ? 1 : 0 }]}>
                    <View style={[styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 2 ? colors.theme : colors.grey }]} />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[appStyles.safeContainer,]}>
            <StatusBar hidden backgroundColor={colors.white} barStyle={'dark-content'} />
            <View style={appStyles.flex1}>


                <SwiperFlatList
                    showPagination
                    // PaginationComponent={(value) => DotComponent(value)}
                    data={onboardingArray}
                    renderItem={({ item }) => (
                        <View style={[styles.swiperTopView]}>
                            <View style={appStyles.aiCenter}>
                                <Text style={[styles.titleStyle]}>{item.title}</Text>
                                <Text style={[styles.subtitleStyle]}>{item.subtitle}</Text>
                            </View>
                            <View style={styles.imageTopView}>
                                <Image source={item.image} style={styles.imageStyle} />
                            </View>
                        </View>
                    )}
                />
            </View>
            {/* <View style={[appStyles.ph20]}>
                <Button onPress={() => navigation.replace(routes.selectAccount)}>GET STARTED</Button>

            </View> */}
        </SafeAreaView>
    )
}

export default OnboardingScreen