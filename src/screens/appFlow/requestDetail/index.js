import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Text, StatusBar, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker'

import { Button, Header, Input } from '../../../components';
import { appIcons, colors, fontFamily, HelpingMethods, hp, wp } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'
import { getDateTime } from '../../../services/helpingMethods';
import moment from 'moment';
import { cleanSingle } from 'react-native-image-crop-picker';

const RequestDetail = ({ navigation }) => {
    const [fromDateModal, setFromDateModal] = useState(false)
    const [date, setDate] = useState(new Date())
    const [fromDate, setFromDate] = useState('2, July 2022 , 6:35 Pm')
    const [toDate, setToDate] = useState('2, July 2022 , 6:35 Pm')
    const [password, setPassword] = useState('123123123')
    const [open, setOpen] = useState(false)
    useEffect(() => {
        // const date = new Date('2022-10-05T11:01:00.000Z')
        console.log(date, '0000000')
        // getDateTime('asd')
    }, [])

    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Inquiry Details'} leftIconView leftIcon={appIcons.backArrow} onPress={() => navigation.goBack()} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.heading}>Date & Time Range</Text>
                        <View style={appStyles.rowBtw}>
                            <TouchableOpacity onPress={() => setOpen(!open)} style={styles.dateTopView}>
                                <Text style={styles.dateTextStyle}>{fromDate}</Text>
                            </TouchableOpacity>
                            <Text style={styles.toTextStyle}>To</Text>
                            <TouchableOpacity style={styles.dateTopView}>
                                <Text style={styles.dateTextStyle}>{toDate}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            {/* <DatePicker
                modal
                open={fromDateModal}
                date={date}
                onConfirm={(date) => {
                    console.log(date, 'Date')
                    // setFromDate(getDateTime(date))
                }}
                onCancel={() => {
                    // console.log('sdsds')
                    setFromDateModal(false)
                }}
            /> */}

            {/* <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    console.log(date);
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            /> */}
        </SafeAreaView>
    )
}

export default RequestDetail