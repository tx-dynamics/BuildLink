import React from 'react'
import { View, SafeAreaView, StatusBar, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors, fontFamily } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'

const CalendarScreen = (props) => {
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1, appStyles.aiCenter, appStyles.jcCenter]}>
                    <Text style={{ fontFamily: fontFamily.appTextBold, fontSize: 18, color: colors.blackLight }}>Calendar screen</Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default CalendarScreen