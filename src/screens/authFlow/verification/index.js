import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View, SafeAreaView, StatusBar, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/button';

import { appImages, colors, fontFamily, hp, wp } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'
import { styles } from './styles';

const Verification = (props) => {
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
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
                    <Button onPress={() => props.navigation.navigate(routes.verification)} containerStyle={styles.buttonStyle} style={{ fontSize: 13 }} >Verify OTP</Button>
                </View>
                <View style={styles.lastTextView}>
                    <Text style={styles.timeText}>27Sec</Text>
                    <TouchableOpacity>
                        <Text style={styles.resendText}> resend OTP?</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default Verification