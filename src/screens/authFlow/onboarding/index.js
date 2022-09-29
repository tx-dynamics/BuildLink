import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StatusBar, Animated, Image, SafeAreaView } from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import { colors, routes } from '../../../services'
import { appIcons, appImages } from '../../../services/utilities/assets'
import { styles } from './styles'
import appStyles from '../../../services/utilities/appStyles'
import Button from '../../../components/button';

const OnboardingScreen = ({ navigation }) => {
    const swiperRef = useRef({});
    const [index, setIndex] = useState(0)
    let animated1 = new Animated.Value(0)
    let animated2 = new Animated.Value(0)
    let animated3 = new Animated.Value(0)
    let animated4 = new Animated.Value(0)
    const onboardingArray = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a quam placerat.',
            image: appImages.onboarding1,
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a quam placerat.',
            image: appImages.onboarding2,
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a quam placerat.',
            image: appImages.onboarding3,
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a quam placerat.',
            image: appImages.onboarding4,
        },
    ]

    useEffect(() => {
        animateImage1()
    }, [])

    useEffect(() => {
        index === 1 ? animateImage2() :
            index === 2 ? animateImage3() :
                index === 3 ? animateImage4() :
                    animateImage1()
    }, [index])

    const animateImage1 = () => {
        Animated.timing(animated1, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }
    const opactiy1 = animated1.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });
    const translate1 = animated1.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 1]
    })
    const transform1 = [{ translateX: translate1 }]

    const animateImage2 = () => {
        Animated.timing(animated2, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }
    const opactiy2 = animated2.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });
    const translate2 = animated2.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 1]
    })
    const transform2 = [{ translateX: translate2 }]

    const animateImage3 = () => {
        Animated.timing(animated3, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }
    const opactiy3 = animated3.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });
    const translate3 = animated3.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 1]
    })
    const transform3 = [{ translateX: translate3 }]

    const animateImage4 = () => {
        Animated.timing(animated4, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }
    const opactiy4 = animated4.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });
    const translate4 = animated4.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 1]
    })
    const transform4 = [{ translateX: translate4 }]

    const onPress = () => {
        index === 3 ? navigation.navigate(routes.tab) :
            swiperRef.current._swiper.scrollToIndex({ index: index + 1 })
    }

    const DotComponent = (value) => {
        return (
            <View style={styles.dotComponentTopView}>
                <View style={[value.paginationIndex === 0 ? styles.dotComponentStyleTwo : styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 0 ? colors.theme : colors.grey }]} />
                <View style={[value.paginationIndex === 1 ? styles.dotComponentStyleTwo : styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 1 ? colors.theme : colors.grey }]} />
                <View style={[value.paginationIndex === 2 ? styles.dotComponentStyleTwo : styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 2 ? colors.theme : colors.grey }]} />
                <View style={[value.paginationIndex === 3 ? styles.dotComponentStyleTwo : styles.dotComponentStyle, { backgroundColor: value.paginationIndex === 3 ? colors.theme : colors.grey }]} />
            </View >
        )
    }

    return (
        <SafeAreaView style={[appStyles.safeContainer]}>
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <View style={appStyles.flex1}>
                <View style={styles.topImageStyle}>
                    <Image source={appIcons.bgIcon} style={styles.topImageIconStyle} />
                </View>
                <SwiperFlatList
                    showPagination
                    mode
                    scrollEnabled={true}
                    ref={(component) => { swiperRef.current._swiper = component }}
                    onChangeIndex={(index) => [setIndex(index.index)]}
                    PaginationComponent={(value) => DotComponent(value)}
                    data={onboardingArray}
                    renderItem={({ item }) => (
                        <View style={[styles.swiperTopView]}>
                            <Animated.View style={[appStyles.aiCenter, { transform: index === 0 ? transform1 : index === 1 ? transform2 : index === 2 ? transform3 : transform4, opacity: index === 0 ? opactiy1 : index === 1 ? opactiy2 : index === 2 ? opactiy3 : opactiy4 }]}>
                                <Image source={item.image} style={styles.imageStyle} />
                            </Animated.View>
                            <View style={styles.titleTopView}>
                                <Text style={styles.titleStyle}>{item.title}</Text>
                            </View>
                        </View>
                    )}
                />
                <View style={styles.buttonTopView}>
                    <Button onPress={() => onPress()}>{index === 3 ? 'Start' : 'Next'}</Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OnboardingScreen