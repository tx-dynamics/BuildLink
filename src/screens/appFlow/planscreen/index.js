import { Animated, Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import appStyles from '../../../services/utilities/appStyles'
import { appIcons, colors, fontFamily, hp, routes, wp } from '../../../services'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, Header } from '../../../components'
import Carousel from 'react-native-snap-carousel'

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
            pic: appIcons.primium
        },
        {
            id: 2,
            color: "#2AA9F0",
            pic: appIcons.bronze
        },
        {
            id: 2,
            color: "#54A76B",
            pic: appIcons.silver
        },
    ]
    const CheckComponenet = (props) => {
        return (
            <View style={{
                marginTop: hp(2.5),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: wp(3),
                //marginVertical: hp(.5)
            }}>
                <Text style={{
                    color: colors.black,
                    fontSize: 12,
                    fontFamily: fontFamily.appTextRegular

                }}>{props.text}</Text>
                <Image source={props.source} resizeMode="contain" style={{
                    width: wp(4.5),
                    height: wp(4.5),

                }} />
            </View>
        )
    }
    const RenderPlan = (props) => {
        return (
            <TouchableWithoutFeedback style={{}}>
                <View style={{
                    backgroundColor: props.backgroundColor,
                    width: wp(70),
                    height: hp(16),
                    alignSelf: "center",
                    alignItems: "center",
                    borderRadius: wp(2),
                    marginTop: hp(6),
                    //zIndex: 40
                }}>
                    <View style={{
                        top: hp(-5),
                        width: wp(20),
                        height: wp(20),
                        justifyContent: "center",
                        borderRadius: wp(20),
                        alignItems: "center",
                        alignSelf: "center",
                        backgroundColor: colors.white,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        elevation: 7,
                    }}>
                        <Image resizeMode='contain' source={props.source} style={{
                            width: wp(12),
                            height: wp(12)
                        }} />
                    </View>
                    <Text style={{
                        top: hp(-3),
                        color: colors.white,
                        fontFamily: fontFamily.appTextBold,
                        fontSize: 12
                    }}>PREMIUM</Text>
                    <View style={{
                        flexDirection: "row",
                        top: hp(-2),
                        alignItems: "baseline",
                        marginLeft: wp(14)
                    }}>
                        <Text style={{
                            color: colors.white,
                            fontSize: 11,
                            fontFamily: fontFamily.appTextRegular
                        }}>$ </Text>
                        <Text style={{
                            color: colors.white,
                            fontFamily: fontFamily.appTextBold,
                            fontSize: 19
                        }}>16</Text>
                        <Text style={{
                            color: colors.white,
                            fontSize: 11,
                            fontFamily: fontFamily.appTextRegular
                        }}> / Month</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{
                    color: colors.theme,
                    paddingHorizontal: wp(5),
                    marginTop: hp(2),
                    fontFamily: fontFamily.appTextBold,
                    alignSelf: "flex-end"
                }}>Skip</Text>
            </TouchableOpacity>
            <Header title={"Choose your plan"} />
            <Text style={{
                color: colors.blackLight,
                paddingHorizontal: wp(10),
                fontFamily: fontFamily.appTextRegular,
                fontSize: 13,
                textAlign: "center",
            }}>Start with a <Text style={{
                color: colors.theme,
                fontFamily: fontFamily.appTextRegular,
                fontSize: 13,
            }}>14 days free trial</Text> and you can upgrade and downgrade anytime</Text>
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
                                <RenderPlan backgroundColor={item.color} source={item.pic} />
                                <View style={{
                                    width: wp(70),
                                    top: hp(-2),
                                    zIndex: -1,
                                    alignSelf: "center",
                                    borderRadius: wp(2),
                                    backgroundColor: colors.white,
                                    elevation: 7,
                                }}>
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

                <View style={{
                    width: wp(50),
                    alignSelf: "center",
                    marginTop: hp(3)
                }}>
                    <Button onPress={() => navigation.navigate(routes.paymentMathod)} style={{ fontSize: 14 }} containerStyle={{ height: hp(6) }} >Subscribe Now</Button>
                </View>
            </View>
            {/* </KeyboardAwareScrollView> */}
        </SafeAreaView>
    )
}

export default PlanScreen

const styles = StyleSheet.create({})