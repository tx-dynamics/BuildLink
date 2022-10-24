import { SafeAreaView, Animated, Dimensions, FlatList, Image, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef } from 'react'
import Carousel from 'react-native-snap-carousel'
import { appIcons, colors, hp, routes, wp } from '../../../services'
import { Button, Header } from '../../../components'
import { styles } from './styles'
import appStyles from '../../../services/utilities/appStyles'

const PlanScreen = ({ navigation }) => {
    const carouselRef = useRef(1);
    const { width, height } = Dimensions.get('window');
    const _draggedValue = new Animated.Value(180);
    const detailArray = [
        {
            text: "Infine number of requests",
            greentick: true,
        },
        {
            text: "Daily Guides",
            greentick: true,
        },
        {
            text: "Special offers on Labour",
            greentick: true,
        },
        {
            text: "Speedy contractor's approach",
            greentick: true,
        },
        {
            text: "Discounts",
            greentick: true,
        },
        {
            text: "Weekly Reports",
            greentick: true,
        },
    ]
    const colorData = [
        {
            id: 1,
            color: colors.theme,
            pic: appIcons.primium,
            text: "PREMIUM"
        },
        {
            id: 2,
            color: "#2AA9F0",
            pic: appIcons.bronze,
            text: "BRONZE"
        },
        {
            id: 2,
            color: "#54A76B",
            pic: appIcons.silver,
            text: "SILVER"
        },
    ]
    const CheckComponenet = (props) => {
        return (
            <View style={styles.checkComponentView}>
                <Text style={styles.checkText}>{props.text}</Text>
                <Image source={props.source} resizeMode="contain" style={styles.checkImg} />
            </View>
        )
    }
    const RenderPlan = (props) => {
        return (
            <TouchableWithoutFeedback style={{}}>
                <View style={[styles.renderPlanView, { backgroundColor: props.backgroundColor, }]}>
                    <View style={styles.renderImgView}>
                        <Image resizeMode='contain' source={props.source} style={styles.renderImg} />
                    </View>
                    <Text style={styles.preimiumText}>{props.text}</Text>
                    <View style={styles.priceView}>
                        <Text style={styles.dollarText}>$</Text>
                        <Text style={styles.priceText}>16</Text>
                        <Text style={styles.dollarText}> / Month</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <Header title={"Choose your plan"} />
            <Text style={styles.startText}>Start with a <Text style={styles.themeText}>14 days free trial</Text> and you can upgrade and downgrade anytime</Text>
            {/* <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={appStyles.scrollContainer}> */}
            <View style={[appStyles.flex1, { marginTop: hp(4), }]}>
                <View style={{
                }}>
                    <Carousel
                        layout={'stack'}
                        bounces
                        sliderWidth={width}
                        itemWidth={width}
                        activeSlideOffset={10}
                        swipeThreshold={10}
                        inactiveSlideShift={100}
                        layoutCardOffset={20}
                        ref={carouselRef}
                        data={colorData}
                        renderItem={({ item }) =>
                            <>
                                <RenderPlan backgroundColor={item.color} source={item.pic} text={item.text} />
                                <View style={styles.flatListView}>
                                    <FlatList
                                        ListHeaderComponent={() => <View style={{ marginTop: hp(2) }}></View>}
                                        ListFooterComponent={() => <View style={{ marginBottom: hp(10) }}></View>}
                                        data={detailArray}
                                        renderItem={({ item, index }) => <CheckComponenet text={item.text} source={appIcons.greenTick} />}
                                    />
                                </View>
                            </>
                        }
                    />
                </View>
                <View style={styles.btnView}>
                    <Button onPress={() => navigation.navigate(routes.paymentMathod)} style={{ fontSize: 14 }} containerStyle={{ height: hp(6) }} >Subscribe Now</Button>
                </View>
            </View>
            {/* </KeyboardAwareScrollView> */}
        </SafeAreaView>
    )
}
export default PlanScreen
