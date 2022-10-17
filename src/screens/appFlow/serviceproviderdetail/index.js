import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import { colors, wp, appIcons, hp, appImages, routes, } from '../../../services'
import { styles } from './styles';
import { Button, } from '../../../components';
import CustomCalendar from '../../../components/customcalender';
import DatePicker from 'react-native-date-picker';
import appStyles from '../../../services/utilities/appStyles'
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
                        <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.arrowView}>
                            <Image resizeMode='contain' source={appIcons.backArrow} style={styles.backArrowImage} />
                        </TouchableOpacity>
                        <View style={[appStyles.row, { justifyContent: "space-between", paddingHorizontal: wp(6), paddingVertical: hp(2) }]}>
                            <Image source={appImages.labourpic} style={styles.labourImage} />
                            <View>
                                <View style={[appStyles.row]} >
                                    <View style={[appStyles.row, styles.ratingView]} >
                                        <Image resizeMode='contain' source={appIcons.star} style={styles.starStyle} />
                                        <Text style={styles.ratingText}>  4.5</Text>
                                    </View>
                                </View>
                                <View style={[appStyles.row, styles.ratingView]}>
                                    <Text style={styles.overAllText}>Overall Jobs:</Text>
                                    <Text style={styles.overallnumText}> 46</Text>
                                </View>
                                <Text style={styles.catText}>House Plumber</Text>
                                <Text style={styles.companyText}>{`By Mr. Hannah`}</Text>
                                <View style={[appStyles.row, styles.priceMainView]}>
                                    <Text style={styles.dollarText}>$ </Text>
                                    <Text style={styles.priceText} >24</Text>
                                    <Text style={styles.dollarText}> /hr</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.aboutMainView}>
                        <Text style={styles.aboutText}>About</Text>
                        <View style={styles.aboutDetailView}>
                            <Text style={styles.detailText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Proin posuere tempus ultricies. Nullam iaculis,
                                Lorem ipsum dolor sit amet,
                            </Text>
                        </View>
                    </View>
                    <View style={styles.adressView}>
                        <Text style={styles.adressText}>Address</Text>
                        <View style={styles.locationView}>
                            <Image source={appIcons.location} style={styles.locatoinImg} />
                            <Text style={styles.locationText}>8700 Commerce park houston texas, 770134</Text>
                        </View>
                    </View>
                    <View style={[appStyles.row, styles.availabiltyView]}>
                        <Text style={styles.availabiltyText} >Availibility</Text>
                        <Image resizeMode='contain' source={appIcons.calnderdownarrow} style={styles.downAroowImg} />
                    </View>
                    <CustomCalendar
                        lineTop={hp(-1.7)}
                        marginRight={wp(3.5)}
                        boxColor={colors.blueBox}
                        lineColor={colors.blueLine}
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
                    <View style={styles.noteView}>
                        <Text style={styles.noteText}>Note: Dates with</Text>
                        <View style={styles.noteSubView}></View>
                        <Text style={styles.occupiedText}>are occupied</Text>
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