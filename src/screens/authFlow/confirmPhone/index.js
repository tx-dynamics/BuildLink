import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, Image, } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Input } from '../../../components/textInput';
import { appImages, colors, routes, } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'
import Button from '../../../components/button';
import { styles } from './styles';

const ConfirmPhone = (props) => {
    const [isText, setIsText] = useState("")
    const skilledValue = props.route.params.skilledValue
    useEffect(() => {
        console.log(skilledValue)
    }, [])
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1]}>
                    <View style={styles.bgIMageView}>
                        <Image resizeMode='contain' style={styles.imageStyle} source={appImages.confirmPhoneIcon} />
                    </View>
                    <View style={styles.titleView}>
                        <Text style={styles.loginText}>Confirm Phone</Text>
                    </View>
                    <View style={styles.textInputView}>
                        <Input placeholder={"Phone Number"} keyboardType={"number-pad"} onChangeText={(text) => setIsText(text)} value={isText} >Phone Number</Input>
                    </View>
                    <View style={styles.buttonView}>
                        <Button onPress={() => props.navigation.navigate(routes.verification, { skilledValue })} containerStyle={styles.buttonStyle} style={{ fontSize: 13 }} >Send OTP</Button>
                    </View>
                    <View style={styles.noteTextView}>
                        <Text style={styles.noteText}>Note: Please enter a valid phone number where you can receive OTP</Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ConfirmPhone
