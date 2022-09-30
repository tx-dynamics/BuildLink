import React from 'react'
import { View, SafeAreaView, StatusBar, Text, FlatList, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from '../../../components';

import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'

const MessageScreen = (props) => {
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header chatHeader chatTitle={"Zeeshan Ali"} rightIcon={appIcons.language} leftIcon={appIcons.backArrow} leftIconView />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1]}>
                    <Text style={{ color: "black" }}> Message Screen</Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default MessageScreen