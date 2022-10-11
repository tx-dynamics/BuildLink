import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Pressable, Platform, Image } from 'react-native';
import { appIcons, colors, fontFamily, hp, wp } from '../../services';
//import Config from '../Config';
import Config from '../../services/config';



const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const CustomCalendar = ({
    minDate,
    startDate,
    endDate,
    startEndDateChange,
    boxColor,
    lineColor,
    lineTop

}) => {
    const [dateList, setDateList] = useState([]);
    let currentMonthDate = useRef(new Date()).current;
    let minimumDate = useRef(minDate).current;
    let maximumDate = useRef(null).current;

    const setListOfDate = useCallback((monthDate) => {
        const dates = [];
        let newDate = new Date();
        newDate.setFullYear(monthDate.getFullYear(), monthDate.getMonth(), 0);
        const prevMonthDate = newDate.getDate();
        let previousMothDay = 0;
        // console.log(new Date().toLocaleDateString('default', { weekday: 'long' }));

        if (newDate.getDay() !== 0) {
            previousMothDay = newDate.getDay() === 0 ? 7 : newDate.getDay();
            for (let i = 1; i <= previousMothDay; i++) {
                const date = new Date(newDate);
                date.setDate(prevMonthDate - (previousMothDay - i));

                dates.push(date);
            }
        }
        for (let i = 0; i < 42 - previousMothDay; i++) {
            const date = new Date(newDate);
            date.setDate(prevMonthDate + (i + 1));
            dates.push(date);
        }
        // console.log(dates);
        setDateList(dates);
    }, []);

    useEffect(() => {
        setListOfDate(new Date());
    }, [setListOfDate]);

    const getIsInRange = (date) => {
        if (startDate != null && endDate != null) {
            // change, "new Date(date.toDateString())" started giving "Inavlid date" for some reason
            /* if (
              new Date(date.toDateString()) > new Date(startDate.toDateString()) &&
              new Date(date.toDateString()) < new Date(endDate.toDateString()) */
            if (date > startDate && date < endDate) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    const getIsItStartAndEndDate = (date) => {
        if (startDate != null && startDate.toDateString() === date.toDateString()) {
            return true;
        } else if (
            endDate != null &&
            endDate.toDateString() === date.toDateString()
        ) {
            return true;
        } else {
            return false;
        }
    };

    const isStartDateRadius = (date) => {
        if (startDate != null && startDate.toDateString() === date.toDateString()) {
            return true;
        } else if (date.getDay() === 1) {
            return true;
        } else {
            return false;
        }
    };

    const isEndDateRadius = (date) => {
        if (endDate != null && endDate.toDateString() === date.toDateString()) {
            return true;
        } else if (date.getDay() === 0) {
            return true;
        } else {
            return false;
        }
    };

    const onDateClick = (date) => {
        if (startDate == null) {
            startDate = date;
        } else if (
            startDate.toDateString() !== date.toDateString() &&
            endDate == null
        ) {
            endDate = date;
        } else if (startDate.toDateString() === date.toDateString()) {
            startDate = null;
        } else if (endDate?.toDateString() === date.toDateString()) {
            endDate = null;
        }
        if (startDate == null && endDate != null) {
            startDate = endDate;
            endDate = null;
        }
        if (startDate != null && endDate != null) {
            if (endDate <= startDate) {
                const d = startDate;
                startDate = endDate;
                endDate = d;
            }
            if (date < startDate) {
                startDate = date;
            }
            if (date > endDate) {
                endDate = date;
            }
        }

        startEndDateChange(startDate, endDate);
    };

    const getDaysNameUI = () => {
        if (dateList.length === 0) {
            return;
        }

        const listUI = [];
        for (let i = 0; i < 7; i++) {
            listUI.push(
                <View key={i.toString()} style={{ flex: 1, alignItems: 'center', marginTop: hp(1), marginRight: wp(5) }}>
                    <Text
                        style={{
                            fontSize: 12,
                            fontFamily: fontFamily.appTextMedium,
                            color: colors.black,
                        }}
                    >
                        {
                            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][
                            dateList[i].getDay()
                            ]
                        }
                    </Text>
                </View>,
            );
        }
        return listUI;
    };

    const getDaysNoUI = () => {
        const noList = [];
        let count = 0;
        for (let i = 0; i < dateList.length / 7; i++) {
            const listUI = [];
            for (let j = 0; j < 7; j++) {
                const date = dateList[count];
                listUI.push(
                    <View key={count.toString()} style={{
                        flex: 1,
                        aspectRatio: 1.0,
                        justifyContent: "center"
                    }}>
                        <View
                            style={{
                                flex: 1,
                                //width: wp(10),
                                //height: wp(5),
                                marginVertical: hp(1.7),
                                top: lineTop,


                                //alignItems: "center",
                                //justifyContent: "center",
                                //paddingVertical: 2,
                                paddingLeft: isStartDateRadius(date) ? 0 : 0,
                                // width: isStartDateRadius(date) ? wp(10) : 0,
                                marginRight: isEndDateRadius(date) ? wp(7) : 0,
                                backgroundColor:
                                    startDate != null && endDate != null
                                        ? getIsItStartAndEndDate(date) || getIsInRange(date)
                                            ? lineColor
                                            : 'transparent'
                                        : 'transparent',
                                borderBottomLeftRadius: isStartDateRadius(date) ? 24 : 0,
                                borderTopLeftRadius: isStartDateRadius(date) ? 24 : 0,
                                borderTopRightRadius: isEndDateRadius(date) ? 24 : 0,
                                borderBottomRightRadius: isEndDateRadius(date) ? 24 : 0,
                            }}
                        />
                        <View
                            style={[
                                {
                                    ...StyleSheet.absoluteFillObject,
                                    flex: 1,
                                    // position: 'absolute',
                                    // flexDirection: 'row',
                                    padding: 2,
                                    borderRadius: 5,
                                    width: wp(6),
                                    height: wp(6),
                                    //borderWidth: getIsItStartAndEndDate(date) ? 2 : 0,
                                    //borderColor: getIsItStartAndEndDate(date)? 'white': 'transparent',
                                    // overflow: 'hidden',
                                    backgroundColor: getIsItStartAndEndDate(date)
                                        ? boxColor
                                        : 'transparent',
                                    /* elevation: getIsItStartAndEndDate(date) ? 4 : 0,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                      width: 0,
                                      height: 3,
                                    },
                                    shadowOpacity: 0.23,
                                    shadowRadius: 2.63, */
                                },
                                getIsItStartAndEndDate(date) && {
                                    ...Platform.select({
                                        ios: {
                                            shadowColor: 'grey',
                                            shadowOffset: { width: 0, height: 0 },
                                            shadowOpacity: 0.6,
                                            shadowRadius: 2.63,
                                        },
                                        android: { elevation: 4 },
                                    }),
                                },
                            ]}
                        >
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        flex: 1,
                                        alignSelf: "center",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: !Config.isAndroid && pressed ? 0.4 : 1,
                                    },
                                ]}
                                android_ripple={{ borderless: true }}
                                onPress={() => {
                                    if (currentMonthDate.getMonth() === date.getMonth()) {
                                        if (minimumDate != null && maximumDate != null) {
                                            const newMinimumDate = new Date(minimumDate);
                                            newMinimumDate.setDate(minimumDate.getDate() - 1);
                                            const newMaximumDate = new Date(maximumDate);
                                            newMaximumDate.setDate(maximumDate.getDate() + 1);
                                            if (date > newMinimumDate && date < newMaximumDate) {
                                                onDateClick(date);
                                            }
                                        } else if (minimumDate != null) {
                                            const newMinimumDate = new Date(minimumDate);
                                            // newMinimumDate.setDate(minimumDate.getDate() - 1);
                                            // // newMinimumDate.setHours(0, 0, 0);
                                            // console.log(date, newMinimumDate);

                                            /* if (
                                              new Date(date.toDateString()) >
                                              new Date(newMinimumDate.toDateString()) */
                                            if (date >= newMinimumDate) {
                                                onDateClick(date);
                                            }
                                        } else if (maximumDate != null) {
                                            const newMaximumDate = new Date(maximumDate);
                                            newMaximumDate.setDate(maximumDate.getDate() + 1);
                                            if (date < newMaximumDate) {
                                                onDateClick(date);
                                            }
                                        } else {
                                            onDateClick(date);
                                        }
                                    }
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontFamily: getIsItStartAndEndDate(date)
                                            ? fontFamily.appTextBold
                                            : 'WorkSans-Regular',
                                        color: getIsItStartAndEndDate(date)
                                            ? 'white'
                                            : currentMonthDate.getMonth() === date.getMonth()
                                                ? 'black'
                                                : 'lightgrey',
                                    }}
                                >
                                    {date.getDate()}
                                </Text>
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: -15,
                                        height: 6,
                                        width: 6,
                                        borderRadius: 3,
                                        backgroundColor:
                                            new Date().toDateString() === date.toDateString()
                                                ? getIsInRange(date)
                                                    ? colors.theme
                                                    : 'rgb(84, 211, 194)'
                                                : 'transparent',
                                    }}
                                />
                            </Pressable>
                        </View>
                    </View>,
                );
                count += 1;
            }
            noList.push(
                <View
                    key={i.toString()}
                    style={{ flexDirection: 'row', marginVertical: 1 }}
                >
                    {listUI}
                </View>,
            );
        }
        return noList;
    };

    return (
        <View style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                <View style={styles.arrowContainerStyle}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.arrowBtnStyle,
                            { opacity: !Config.isAndroid && pressed ? 0.6 : 1 },
                        ]}
                        android_ripple={{ color: 'lighgrey' }}
                        onPress={() => {
                            // currentMonthDate = new Date();
                            currentMonthDate.setMonth(currentMonthDate.getMonth() - 1);
                            setListOfDate(currentMonthDate);
                        }}
                    >
                        {/* <Icon name="keyboard-arrow-left" size={28} color="grey" /> */}
                        <Image resizeMode='contain' source={appIcons.leftarrow} style={{ width: wp(5), height: wp(5) }} />
                    </Pressable>
                </View>
                <Text style={styles.monthHeaderStyle}>
                    {monthNames[currentMonthDate.getMonth()]},{''}
                    {currentMonthDate.getFullYear()}
                </Text>
                <View style={styles.arrowContainerStyle}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.arrowBtnStyle,
                            { opacity: !Config.isAndroid && pressed ? 0.6 : 1 },
                        ]}
                        android_ripple={{ color: 'lighgrey' }}
                        onPress={() => {
                            // currentMonthDate = new Date();
                            currentMonthDate.setMonth(currentMonthDate.getMonth() + 1);
                            setListOfDate(currentMonthDate);
                        }}
                    >
                        {/* <Icon name="keyboard-arrow-right" size={28} color="grey" /> */}
                        <Image resizeMode='contain' source={appIcons.rightarrow} style={{ width: wp(5), height: wp(5) }} />

                    </Pressable>
                </View>
            </View>
            <View
                style={{ flexDirection: 'row', paddingHorizontal: 8, paddingBottom: 8 }}
            >
                {getDaysNameUI()}
            </View>
            <View style={{ paddingHorizontal: 8 }}>{getDaysNoUI()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    arrowContainerStyle: {

    },
    arrowBtnStyle: {
        height: 38,
        width: 38,
        justifyContent: 'center',
        alignItems: 'center',
    },
    monthHeaderStyle: {
        //flex: 1,
        height: hp(3.5),
        paddingHorizontal: wp(2),
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: colors.black,
        borderWidth: .5,
        borderRadius: wp(2),
        borderColor: colors.greyDark
    },
});

export default CustomCalendar;
