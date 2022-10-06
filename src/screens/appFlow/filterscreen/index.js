import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Calendar } from 'react-native-calendars';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DatePicker from 'react-native-date-picker'
import moment from 'moment/moment';

import { Button, Header } from '../../../components';
import { appIcons, colors, hp, wp } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'
import { styles } from './styles';

const FilterScreen = (props) => {
    const TradesmanArray = [
        {
            id: 1,
            text: "Plumber",
        },
        {
            id: 2,
            text: "Electrician",
        },
    ]
    const Tradesmancomponent = (props) => {
        return (
            <View style={styles.tradesManView}>
                <Text style={styles.tradesmanText}>{props.tradesman}</Text>
                <TouchableOpacity style={styles.trademanToucView} onPress={() => console.log("first")}>
                    <Image resizeMode='contain' source={appIcons.closebtn} style={styles.tradesmanImage} />
                </TouchableOpacity>
            </View >
        )
    }
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const nonCollidingMultiSliderValuesChange = values => setNonCollidingMultiSliderValue(values);

    const [startime, setStartTime] = useState("06:50 AM")
    const [endTime, setEndTime] = useState("06:50 PM")
    const [date, setDate] = useState(new Date())
    const [openfrom, setOpenfrom] = useState(false)
    const [openTo, setOpenTo] = useState(false)
    const [sliderOneValue, setSliderOneValue] = React.useState([5]);
    const [showCalander, setShowCalander] = useState(false)
    const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue] = React.useState([0, 100]);

    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={"Filter"} rightIcon={appIcons.cross} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1]}>
                    <View style={styles.topView}>
                        <Text style={styles.areaRaduisText}>Area Radius from Project</Text>
                        <View style={styles.radiusView}>
                            <TextInput
                                keyboardType='number-pad'
                                placeholder='Enter Radius in Miles'
                                placeholderTextColor={colors.greyDark}
                                style={styles.radiusTextInput} />
                            <Text style={styles.radiusText}>Miles</Text>
                        </View>
                        <View style={styles.selectedTradesmanView}>
                            <Text style={styles.selectedTradesmanText}>Selected Tradesman</Text>
                            <View style={styles.selectedFlalistView}>
                                <FlatList
                                    horizontal
                                    data={TradesmanArray}
                                    renderItem={({ item, index }) => <Tradesmancomponent tradesman={item.text} />}
                                />
                                <TextInput
                                    keyboardType='number-pad'
                                    placeholderTextColor={colors.greyDark}
                                    style={styles.selectedTextInput} />
                            </View>
                        </View>
                        <View style={styles.margintop}>
                            <Text style={styles.rateText}>Rate/hr</Text>
                            <View style={styles.multiSliderView}>
                                <MultiSlider
                                    selectedStyle={styles.multiSelectorSelected}
                                    unselectedStyle={styles.multiSelectorUnSelected}
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
                                    customMarker={() =>
                                        <View>
                                            <View style={styles.scrollLabel}>
                                                <Image resizeMode='contain' source={appIcons.scrollmarker} style={styles.scrollMarkerImage} />
                                            </View>
                                            <View style={styles.viewTop}>
                                                <Text style={styles.labelText}>{`$ ${sliderOneValue}/hr`}</Text>
                                            </View>
                                        </View>
                                    }
                                />
                            </View>
                            <View style={styles.margintop}>
                                <TouchableOpacity onPress={() => setShowCalander(!showCalander)} style={styles.dateRangeView}>
                                    <Text style={styles.daterangeText}>Date Range</Text>
                                    <View >
                                        <Image resizeMode='contain' source={appIcons.calnderdownarrow} style={styles.dateRangeImage} />
                                    </View>
                                </TouchableOpacity>
                                {showCalander ?
                                    <Calendar
                                        enableSwipeMonths
                                        markingType={'period'}
                                        markedDates={{
                                            '2022-10-17': {
                                                customContainerStyle: {
                                                    backgroundColor: colors.theme,
                                                    borderRadius: 5,
                                                    width: wp(7),
                                                    height: wp(7),
                                                    justifyContent: "flex-end",
                                                    top: hp(.7)

                                                },
                                                customTextStyle: { color: colors.white }
                                            },
                                            '2022-10-18': { customTextStyle: { color: "black", backgroundColor: colors.calenderline, width: wp(21), textAlign: "center", }, customContainerStyle: { borderRadius: 0, width: wp(25), } },
                                            '2022-10-19': { customTextStyle: { color: "black", backgroundColor: colors.calenderline, width: wp(15), textAlign: "center", }, customContainerStyle: { borderRadius: 0, width: wp(17.2), } },
                                            '2022-10-20': { customTextStyle: { color: "black", backgroundColor: colors.calenderline, width: wp(21), textAlign: "center", }, customContainerStyle: { borderRadius: 0, width: wp(25), } },
                                            '2022-10-21': {
                                                customContainerStyle: {
                                                    backgroundColor: colors.theme,
                                                    borderRadius: 5,
                                                    width: wp(7),
                                                    height: wp(7),
                                                    justifyContent: "flex-end",
                                                    top: hp(.7)

                                                },
                                                customTextStyle: { color: colors.white }
                                            },
                                        }}
                                        style={styles.calenderStyle}
                                        renderHeader={(date) => {
                                            return (
                                                <View style={styles.calenderHeaderView}>
                                                    <Text style={styles.calenderHeaderText}>{`${months[date.getMonth()]} ${date.getFullYear()}`}</Text>
                                                </View>
                                            )
                                        }}
                                        renderArrow={arrow => <Image resizeMode='contain' source={arrow == "left" ? appIcons.leftarrow : appIcons.rightarrow}
                                            style={styles.calenderRenderArrow} />}
                                    /> : null
                                }
                            </View>
                            <Text style={styles.timeRangeText}>Time Range</Text>
                            <View style={styles.timeRangeView}>
                                <TouchableOpacity onPress={() => setOpenTo(true)} style={styles.timerangeTouch}>
                                    <Text style={styles.startTimeText}> {startime}</Text>
                                    <DatePicker
                                        modal
                                        textColor={colors.theme}
                                        mode='time'
                                        open={openTo}
                                        date={date}
                                        onConfirm={(date) => {
                                            setOpenTo(false)
                                            setStartTime(moment(date).format('LT'))
                                        }}
                                        onCancel={() => {
                                            setOpenTo(false)
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text style={{ color: "black" }}>To</Text>
                                <TouchableOpacity onPress={() => setOpenfrom(!openfrom)} style={styles.endTimeTouch}>
                                    <Text style={styles.endTimeText}>{endTime}</Text>
                                    <DatePicker
                                        textColor={colors.theme}
                                        modal
                                        mode='time'
                                        open={openfrom}
                                        date={date}
                                        onConfirm={(date) => {
                                            setOpenfrom(false)
                                            setEndTime(moment(date).format('LT'))
                                        }}
                                        onCancel={() => {
                                            setOpenfrom(false)
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonView}>
                                <Button containerStyle={styles.btnContainerStyle} style={styles.btnText} >Review Filters</Button>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default FilterScreen
