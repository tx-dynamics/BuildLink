import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, { useEffect } from 'react'
import { View, SafeAreaView, StatusBar, Text, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/button';

import { appImages, colors, routes, } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'
import { styles } from './styles';

const Verification = (props) => {
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
                    <View style={styles.bgImageView}>
                        <Image resizeMode='contain' style={styles.imageStyle} source={appImages.otpIcon} />
                    </View>
                    <View style={styles.titleView}>
                        <Text style={styles.loginText}>OTP Verification</Text>
                    </View>
                    <View style={styles.OTPView}>
                        <OTPInputView
                            autoFocusOnLoad
                            selectionColor={colors.blackLight}
                            placeholderTextColor={colors.blackLight}
                            style={styles.otpContainer}
                            pinCount={5}
                            codeInputFieldStyle={[styles.otp]}
                            onCodeFilled={codeEntered => console.log(codeEntered)}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Button onPress={() => props.navigation.navigate(routes.tab, { skilledValue })} containerStyle={styles.buttonStyle} style={{ fontSize: 13 }} >Verify OTP</Button>
                    </View>
                    <View style={styles.lastTextView}>
                        <Text style={styles.timeText}>27sec</Text>
                        <TouchableOpacity>
                            <Text style={styles.resendText}> resend OTP?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default Verification