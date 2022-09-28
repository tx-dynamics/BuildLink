import React from 'react'
import { View, SafeAreaView, StatusBar, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'

const ProfileScreen = (props) => {
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1, appStyles.pt20]}>
                    <Text>Profile screen</Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen