import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import appStyles from '../../../services/utilities/appStyles'
import { appIcons, colors, hp, wp } from '../../../services'
import { Button, Header, Input } from '../../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ForgetPassword = (props) => {
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header onPress={() => navigation.goBack()} title={"Forgot Passoword"} leftIcon={appIcons.backArrow} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1, { alignItems: "center" }]}>
                    <View style={{ marginTop: hp(5) }}>
                        <Input placeholder={"Email"} containerStyle={{}}>Email</Input>
                    </View>
                    <View style={{ width: wp(90), marginTop: hp(15) }}>
                        <Button onPress={() => props.navigation.goBack()} >Confirm</Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ForgetPassword