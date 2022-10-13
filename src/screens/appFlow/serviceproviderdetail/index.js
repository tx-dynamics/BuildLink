import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import { colors, wp, appIcons, hp, appImages, fontFamily, routes, } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'
import { Button, Header } from '../../../components';
import CustomCalendar from '../../../components/customcalender';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';

const ServiceProvider = (props) => {
    const [date, setDate] = useState(new Date())
    const [openfrom, setOpenfrom] = useState(false)
    const [openTo, setOpenTo] = useState(false)
    const [startime, setStartTime] = useState("06:50 AM")
    const [endTime, setEndTime] = useState("06:50 PM")
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 5);
        return date;
    });
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            {/* <Header leftIconView={{}} leftIcon={appIcons.backArrow} onPress={() => navigation.goBack()} /> */}
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1,]}>
                    <View style={styles.topView}>
                        <View style={styles.arrowView}>
                            <Image resizeMode='contain' source={appIcons.backArrow} style={styles.backArrowImage} />
                        </View>
                        <View style={[appStyles.row, { justifyContent: "space-between", paddingHorizontal: wp(6), paddingVertical: hp(2) }]}>
                            <Image source={appImages.labourpic} style={styles.labourImage} />
                            <View>
                                <View style={[appStyles.row]} >
                                    <View style={[appStyles.row, styles.ratingView]} >
                                        <Image resizeMode='contain' source={appIcons.star} style={styles.starStyle} />
                                        <Text style={{ color: colors.black, fontSize: 11 }}>  4.5</Text>
                                    </View>
                                </View>
                                <View style={[appStyles.row, styles.ratingView]}>
                                    <Text style={{ color: colors.black, fontSize: 13 }}>Overall Jobs:</Text>
                                    <Text style={{ color: colors.black, fontSize: 17, fontFamily: fontFamily.appTextBold }}> 46</Text>
                                </View>
                                <Text style={{ color: colors.black, fontSize: 18, fontFamily: fontFamily.appTextBold }}>House Plumber</Text>
                                <Text style={{ color: colors.black, fontSize: 11, fontFamily: fontFamily.appTextRegular }}>{`By Mr. Hannah`}</Text>
                                <View style={[appStyles.row, { alignItems: "center", marginLeft: wp(1) }]}>
                                    <Text style={{ color: colors.greyDark, fontSize: 10 }}>$ </Text>
                                    <Text style={{ color: colors.black, fontSize: 16, fontFamily: fontFamily.appTextBold }} >24</Text>
                                    <Text style={{ color: colors.greyDark, fontSize: 10 }}> /hr</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: wp(6), marginTop: hp(2), }}>
                        <Text style={{ color: colors.black, fontSize: 14, fontFamily: fontFamily.appTextBold }}>About</Text>
                        <View style={{ backgroundColor: colors.whitish, borderRadius: wp(5), marginTop: hp(1) }}>
                            <Text style={{ color: colors.blackLight, fontFamily: fontFamily.appTextRegular, fontSize: 12, paddingHorizontal: wp(3), paddingVertical: hp(.75), }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Proin posuere tempus ultricies. Nullam iaculis,
                                Lorem ipsum dolor sit amet,
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: wp(6), marginTop: hp(3), }}>
                        <Text style={{ color: colors.black, fontSize: 14, fontFamily: fontFamily.appTextBold }}>Address</Text>
                        <View style={{ backgroundColor: colors.whitish, borderRadius: wp(5), marginTop: hp(1), flexDirection: "row", alignItems: "center", paddingHorizontal: wp(2) }}>
                            <Image source={appIcons.location} style={{ width: wp(3), height: wp(3) }} />
                            <Text style={{ color: colors.blackLight, fontFamily: fontFamily.appTextRegular, fontSize: 12, paddingVertical: hp(1.5), marginHorizontal: wp(1) }}>
                                8700 Commerce park houston texas, 770134
                            </Text>
                        </View>
                    </View>
                    <View style={[appStyles.row, { justifyContent: "space-between", alignItems: "center", paddingHorizontal: wp(6), marginTop: hp(2) }]}>
                        <Text style={{ color: colors.black, fontSize: 13, fontFamily: fontFamily.appTextBold }} >Availibility</Text>
                        <Image resizeMode='contain' source={appIcons.calnderdownarrow} style={{ width: wp(4), height: wp(4) }} />
                    </View>
                    <CustomCalendar
                        lineTop={hp(-1.7)}
                        marginRight={wp(3.5)}
                        boxColor={colors.blueBox}
                        lineColor={colors.blueLine}
                        //  {...{ showCal, setShowCal }}
                        minDate={new Date()}
                        startDate={startDate}
                        endDate={endDate}
                        startEndDateChange={(startData, endData) => {
                            if (startData != null && endData != null) {
                                setStartDate(startData);
                                console.log(startData)
                                setEndDate(endData);
                            }
                        }}
                    />
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{
                            color: colors.blackLight,
                            fontFamily: fontFamily.appTextRegular,
                            fontSize: 11
                        }}>
                            Note: Dates with
                        </Text>
                        <View style={{ height: wp(2), width: wp(2), backgroundColor: colors.theme, borderRadius: 2, marginHorizontal: wp(1) }}></View>
                        <Text style={{
                            color: colors.blackLight,
                            fontFamily: fontFamily.appTextRegular,
                            fontSize: 11
                        }}>
                            are occupied
                        </Text>
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
                        <Button onPress={() => props.navigation.navigate(routes.requestDetail)} containerStyle={styles.btnContainerStyle} style={styles.btnText} >Request Service</Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default ServiceProvider