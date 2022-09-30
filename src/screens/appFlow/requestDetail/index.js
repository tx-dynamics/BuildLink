import React, { useState } from 'react'
import { View, SafeAreaView, Image, Text, StatusBar, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker'

import { appIcons, colors, fontFamily, hp, wp } from '../../../services'
import { getDateTime } from '../../../services/helpingMethods';
import { Header } from '../../../components';
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'

const RequestDetail = ({ navigation }) => {
    const [fromDateModal, setFromDateModal] = useState(false)
    const [toDateModal, settoDateModal] = useState(false)
    const [date, setDate] = useState(new Date())
    const [fromDate, setFromDate] = useState('2, July 2022 , 6:35 Pm')
    const [toDate, setToDate] = useState('2, July 2022 , 6:35 Pm')
    const [payRateModal, setPayRateModal] = useState(false)
    const [selectedRate, setSelectedRate] = useState({ id: 1 })
    const rateArray = [
        {
            id: 1,
            name: 'Hourly Rate'
        },
        {
            id: 2,
            name: 'Daily Rate'
        }
    ]

    const selectDate = (value) => {
        setTimeout(() => {
            value == 1 ? setFromDateModal(true) : settoDateModal(true)
        }, 10)
    }

    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Inquiry Details'} leftIconView leftIcon={appIcons.backArrow} onPress={() => navigation.goBack()} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={styles.container}>
                    <View style={{ marginBottom: hp(2) }}>
                        <Text style={styles.heading}>Date & Time Range</Text>
                        <View style={appStyles.rowBtw}>
                            <TouchableOpacity
                                onPress={() => selectDate(1)}
                                style={styles.dateTopView}>
                                <Text style={styles.dateTextStyle}>{fromDate}</Text>
                            </TouchableOpacity>
                            <Text style={styles.toTextStyle}>To</Text>
                            <TouchableOpacity onPress={() => selectDate(2)} style={styles.dateTopView}>
                                <Text style={styles.dateTextStyle}>{toDate}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.heading}>Pay Rate</Text>
                        <View style={appStyles.rowBtw}>
                            <View
                                style={[styles.payRateTopView, { paddingLeft: payRateModal ? wp(7) : wp(4) }]}>
                                {!payRateModal ?
                                    <Text style={styles.textStyle}>Select pay and contractor type</Text>
                                    :
                                    <View style={styles.rateModelTopView}>
                                        {rateArray.map((data) => {
                                            return (
                                                <TouchableOpacity onPress={() => setSelectedRate(data)} key={data.id} style={[appStyles.rowCenter]}>
                                                    <Image source={selectedRate.id === data.id ? appIcons.select : appIcons.unSelect} style={styles.selectionIcon} />
                                                    <Text style={styles.rateTextStyle}>{data.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>

                                }
                                <TouchableOpacity onPress={() => setPayRateModal(!payRateModal)}>
                                    <Image source={appIcons.arrowUp} style={{ width: wp(3.5), height: hp(2), resizeMode: 'contain', transform: [{ rotate: '180deg' }] }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    {payRateModal &&
                        <View style={{ marginTop: hp(2) }}>
                            <View style={appStyles.rowBtw}>
                                <View style={styles.payRateTopView}>
                                    <Text style={styles.textStyle}>Contractor Type</Text>
                                    <TouchableOpacity onPress={() => setPayRateModal(!payRateModal)}>
                                        <Image source={appIcons.arrowUp} style={{ width: wp(3.5), height: hp(2), resizeMode: 'contain', transform: [{ rotate: '180deg' }] }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                </View>
            </KeyboardAwareScrollView>
            <DatePicker
                modal
                open={fromDateModal}
                date={date}
                onConfirm={(date) => {
                    setFromDate(getDateTime(date.toLocaleString()))
                }}
                onCancel={() => {
                    setFromDateModal(false)
                }}
            />
            <DatePicker
                modal
                open={toDateModal}
                date={date}
                onConfirm={(date) => {
                    setToDate(getDateTime(date.toLocaleString()))
                }}
                onCancel={() => {
                    settoDateModal(false)
                }}
            />

        </SafeAreaView>
    )
}

export default RequestDetail