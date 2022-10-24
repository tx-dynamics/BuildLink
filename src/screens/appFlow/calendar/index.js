import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors, wp, appIcons, hp, } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'
import CustomCalendar from '../../../components/customcalender';

const CalendarScreen = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 5);
        return date;
    });
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date()
    const PlanComponent = (props) => {
        return (
            <View style={styles.ph3}>
                <View style={styles.planCompView}>
                    <View>
                        <Text style={[styles.dateText, { color: props.textColor }]}>{`${date.getDate()}`}</Text>
                        <Text style={[styles.monthText, { color: props.textColor }]}>{`${months[date.getMonth()]}`}</Text>
                    </View>
                    <View style={[styles.projectView, { backgroundColor: props.backgroundColor }]}>
                        <Text style={styles.projectText}>Project Name</Text>
                        <View style={[appStyles.row, { alignItems: "center" }]}>
                            <Image resizeMode='contain' source={appIcons.location} style={styles.locationImage} />
                            <Text style={styles.adressText}>8600, Orange Street Houston Texas</Text>
                        </View>
                        <Text style={styles.adressText}>{`4 to 8 April`}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1,]}>
                    <View style={{ marginTop: hp(2.5) }}>
                        <CustomCalendar
                            lineTop={hp(-1.7)}
                            marginRight={wp(3.5)}
                            boxColor={colors.theme}
                            lineColor={colors.calenderline}
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

                    </View>
                    <Text style={styles.todaysPlanText}>Today's Plan</Text>
                    <PlanComponent backgroundColor={colors.themeSecondary} textColor={colors.themeSecondary} />
                    <View style={{ marginBottom: hp(2) }}>
                        <Text style={styles.upcomingText}>Upcoming Projects</Text>
                        <PlanComponent backgroundColor={colors.blue} textColor={colors.blue} />
                        <PlanComponent backgroundColor={colors.blue} textColor={colors.blue} />
                        <PlanComponent backgroundColor={colors.blue} textColor={colors.blue} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default CalendarScreen