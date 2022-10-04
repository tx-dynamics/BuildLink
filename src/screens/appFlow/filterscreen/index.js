import React from 'react'
import { View, SafeAreaView, StatusBar, Text, TextInput, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Header } from '../../../components';

import { appIcons, colors, fontFamily, hp, wp } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'
import { ScrollView } from 'react-native-gesture-handler';
import CustomLabel from './CutomLabel';

const FilterScreen = (props) => {
    const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
    const [sliderOneValue, setSliderOneValue] = React.useState([5]);
    const [multiSliderValue, setMultiSliderValue] = React.useState([3, 7]);
    const [
        nonCollidingMultiSliderValue,
        setNonCollidingMultiSliderValue,
    ] = React.useState([0, 100]);

    const sliderOneValuesChangeStart = () => setSliderOneChanging(true);

    const sliderOneValuesChange = values => setSliderOneValue(values);

    const sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

    const multiSliderValuesChange = values => setMultiSliderValue(values);
    const nonCollidingMultiSliderValuesChange = values =>
        setNonCollidingMultiSliderValue(values);

    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={"Filter"} rightIcon={appIcons.cross} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1]}>
                    <View style={{
                        paddingHorizontal: wp(5),
                        marginTop: hp(2.5)
                    }}>
                        <Text style={{
                            color: colors.black,
                            fontFamily: fontFamily.appTextBold,
                            fontSize: 12
                        }}>
                            Area Radius from Project
                        </Text>
                        <View style={
                            {
                                justifyContent: "space-between",
                                paddingHorizontal: wp(4),
                                backgroundColor: colors.whitish,
                                flexDirection: "row",
                                height: hp(5.5),
                                alignItems: "center",
                                borderRadius: wp(4),
                                marginTop: hp(2)

                            }}>
                            <TextInput
                                keyboardType='number-pad'
                                placeholder='Enter Radius in Miles'
                                placeholderTextColor={colors.greyDark}
                                style={{

                                    color: colors.black,
                                    fontFamily: fontFamily.appTextRegular,
                                    fontSize: 12
                                }} />
                            <Text style={{ color: colors.blackLight }}>Miles</Text>
                        </View>
                        <View style={{
                            marginTop: hp(2)
                        }}>
                            <Text style={{
                                color: colors.black,
                                fontFamily: fontFamily.appTextBold
                            }}>
                                Selected Tradesman
                            </Text>
                            <View style={
                                {
                                    justifyContent: "space-between",
                                    paddingHorizontal: wp(4),
                                    backgroundColor: colors.whitish,
                                    flexDirection: "row",
                                    height: hp(5.5),
                                    alignItems: "center",
                                    borderRadius: wp(4),
                                    marginTop: hp(2)

                                }}>
                                <TextInput
                                    keyboardType='number-pad'
                                    placeholder='Enter Radius in Miles'
                                    placeholderTextColor={colors.greyDark}
                                    style={{

                                        color: colors.black,
                                        fontFamily: fontFamily.appTextRegular,
                                        fontSize: 12
                                    }} />
                                <Text style={{ color: colors.blackLight }}>Miles</Text>
                            </View>
                        </View>
                        <View style={{
                            marginTop: hp(1)
                        }}>
                            <Text style={{
                                color: colors.black,
                                fontFamily: fontFamily.appTextBold
                            }}>
                                Rate/hr
                            </Text>
                            <View style={{
                                alignSelf: "center",
                                marginTop: hp(-1)
                            }}>


                                <MultiSlider
                                    selectedStyle={{ borderWidth: .2, width: 0, height: 0, borderColor: colors.theme }}
                                    unselectedStyle={{ borderWidth: .2, width: 0, height: 0, borderColor: colors.greyDark }}
                                    values={[
                                        nonCollidingMultiSliderValue[0],
                                        nonCollidingMultiSliderValue[1],
                                    ]}
                                    sliderLength={280}
                                    onValuesChange={nonCollidingMultiSliderValuesChange}
                                    min={0}
                                    max={100}
                                    step={1}
                                    allowOverlap={false}
                                    snapped
                                    minMarkerOverlapDistance={20}
                                    trackStyle={() => <View style={{ backgroundColor: "red", width: 15, borderColor: "red", height: 50, color: "red" }}></View>}
                                    customMarker={() =>
                                        <View>

                                            <View style={{ alignItems: "center", justifyContent: "center" }}
                                            ><Image resizeMode='contain' source={appIcons.scrollmarker} style={{
                                                width: wp(3),
                                                height: wp(3),
                                                top: hp(1.2)
                                            }} />

                                            </View>
                                            <View style={{
                                                top: hp(1)
                                            }}>

                                                <Text style={{
                                                    color: colors.blackLight,
                                                    fontSize: 12
                                                }}>{`$ ${multiSliderValue}/hr`}</Text>
                                            </View>
                                        </View>
                                    }
                                    customLabel={CustomLabel}
                                />

                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default FilterScreen