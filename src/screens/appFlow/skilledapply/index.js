import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'

import appStyles from '../../../services/utilities/appStyles'
import { appIcons, colors, wp } from '../../../services'
import { Header, Input } from '../../../components'
import { styles } from './styles'

const SkilledApply = (props) => {
    const [countryCode, setCountryCode] = useState('PK')
    const [country, setCountry] = useState({ callingCode: ['+92'] })
    const [withFilter, setWithFilter] = useState(true)

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
    }
    const countryCodeComponent = (props) => {
        return (
            <View style={{ flexDirection: "row" }}>

            </View>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Apply'} leftIconView leftIcon={appIcons.backArrow} onPress={() => props.navigation.goBack()} />
            <View style={[appStyles.flex1]}>
                <View >
                    <Input titleStyle={styles.titleText} >Name</Input>
                    <View style={{ flexDirection: "row" }}>
                        {/* <Input drop flag placeholder={"+92"} placeholderTextColor={colors.black} paddingHorizontal={wp(2)} containerStyle={{ width: wp(25), borderRadius: wp(5) }} titleStyle={styles.titleText}>Phone Number</Input> */}
                        <View style={{ flex: 1 }}>
                            <>
                                <CountryPicker
                                    {...{
                                        countryCode,
                                        withFilter,
                                        withFlagButton: true,
                                        containerButtonStyle: { paddingLeft: wp(3) },
                                        onSelect,
                                        withCallingCodeButton: true,
                                        // theme: { fontSize: 14, fontFamily: fontFamily.appTextMedium, onBackgroundTextColor: theme.colorLight, filterPlaceholderTextColor: theme.color, backgroundColor: theme.background }
                                    }}
                                    visible={false}
                                />
                            </>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >

    )
}

export default SkilledApply
