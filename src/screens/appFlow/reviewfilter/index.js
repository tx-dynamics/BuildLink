import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from 'react'

import { appIcons, colors, routes, wp } from '../../../services'
import { Button, Header } from '../../../components'
import { styles } from './styles'
import appStyles from '../../../services/utilities/appStyles'

const ReviewFilter = (props) => {
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
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header onPressRightIcon={() => props.navigation.goBack()} title={"Filter"} rightIcon={appIcons.cross} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1, { paddingHorizontal: wp(4) }]}>
                    <View style={styles.topView}>
                        <Text style={styles.areaRadiusText}>Area Radius</Text>
                        <Text style={styles.milesText}>10 Miles</Text>
                    </View>
                    <View style={styles.selectedTradesmanView}>
                        <Text style={styles.selectedTradesmanText}>Selected Tradesman</Text>
                        <FlatList
                            horizontal
                            data={TradesmanArray}
                            renderItem={({ item, index }) =>
                                <Tradesmancomponent tradesman={item.text} />} />
                    </View>
                    <View style={styles.RateMainView}>
                        <Text style={styles.rateText}>Rate/hr</Text>
                        <View style={[appStyles.row]}>
                            <Text style={styles.fromPrice}>$10/hr</Text>
                            <Text style={styles.toPrice}>  $24/hr</Text>
                        </View>
                    </View>
                    <Text style={styles.dateTimeRangeText} >Date & Time Range</Text>
                    <View style={[appStyles.row]}>
                        <Text style={styles.fromDate}>22,July,2022 , 6:35PM</Text>
                        <Text style={styles.toDate}>25,July,2022 , 6:35PM</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <Button containerStyle={styles.btnContainerStyle} style={styles.btnText} onPress={() => props.navigation.navigate(routes.homeScreen)} >Apply Filter</Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ReviewFilter

