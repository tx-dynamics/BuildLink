import React from 'react'
import { View, SafeAreaView, StatusBar, Text, Image } from 'react-native'
import { Calendar } from 'react-native-calendars';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import { colors, wp, appIcons, hp, } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'

const CalendarScreen = (props) => {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date()
    const PlanComponent = (props) => {
        return (
            <View style={styles.ph3}>
                <View style={styles.planCompView}>
                    <View>
                        <Text style={[styles.dateText, { color: props.textColor }]}>{`0${date.getDate()}`}</Text>
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
                    <View style={{}}>
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
                            style={styles.calenderView}
                            renderHeader={(date) => {
                                return (
                                    <View style={styles.headerCalenderView}>
                                        <Text style={styles.calHeaderText}>{`${date.getDate()}, ${months[date.getMonth()]} ${date.getFullYear()}`}</Text>
                                    </View>
                                )
                            }}
                            renderArrow={arrow => <Image resizeMode='contain' source={arrow == "left" ? appIcons.leftarrow : appIcons.rightarrow}
                                style={styles.arrowView}
                            />}
                        />
                    </View>
                    <Text style={styles.todaysPlanText}>Today's Plan</Text>
                    <PlanComponent backgroundColor={colors.themeSecondary} textColor={colors.themeSecondary} />
                    <Text style={styles.upcomingText}>Upcoming Plans</Text>
                    <PlanComponent backgroundColor={colors.blue} textColor={colors.blue} />
                    <PlanComponent backgroundColor={colors.blue} textColor={colors.blue} />
                    <PlanComponent backgroundColor={colors.blue} textColor={colors.blue} />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default CalendarScreen