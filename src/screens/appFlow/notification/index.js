import React from 'react'
import { View, Text, StatusBar, SafeAreaView } from 'react-native'

import { appIcons, colors } from '../../../services'
import { Header } from '../../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './styles'
import appStyles from '../../../services/utilities/appStyles'

const NotificationScreen = (props) => {
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header onPress={() => props.navigation.goBack()} title={"Notifications"} leftIcon={appIcons.backArrow} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1]}>
                    <View style={styles.mainView}>
                        <Text style={styles.dateText}>29/12/2022</Text>
                        <View style={styles.notificationView}>
                            <Text style={styles.notificationText}>Type of notifications will go here.</Text>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default NotificationScreen