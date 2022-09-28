import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';

import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../services';
import appStyles from '../../services/utilities/appStyles';

export const Input = props => {
    const [borderColor, setBorderColor] = useState(false)
    const [countryCode, setCountryCode] = useState('FR')
    const [country, setCountry] = useState(null)
    const onFocus = () => {
        setBorderColor(true)
    }
    const onBlur = () => {
        setBorderColor(false)
    }

    return (
        <View style={[styles.formInput, { paddingTop: props.chat ? 0 : 15 }]}>
            <View style={[appStyles.row]}>
                <Text style={[styles.titleStyle, props.textStyle]}>{props.children}</Text>
                {!props.star &&
                    <Text style={{ color: colors.errorColor, paddingLeft: 3 }}>*</Text>
                }
            </View>
            <View style={[styles.input, props.shadow && styles.shadow, props.containerStyle]} >

                <TextInput
                    style={[styles.inputTextStyle, props.inputStyle, { marginLeft: props.phoneNumber ? 0 : 5, }]}
                    selectionColor={colors.grey}
                    value={props.value}
                    onFocus={onFocus}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.placeholderColor}
                    secureTextEntry={props.secureTextEntry}
                    keyboardType={props.keyboardType}
                    onBlur={onBlur}
                    editable={props.editable}
                    onChangeText={props.onChangeText}
                    multiline={props.multiline}
                    maxLength={props.maxLength}
                />
                {props.eye &&
                    <TouchableOpacity onPress={props.onPressEye}>
                        <Image source={props.secureTextEntry ? appIcons.show : appIcons.hide} style={styles.icon} />
                    </TouchableOpacity>
                }

            </View>
            <View>
                {props.errorText && props.errorText ? (
                    <View style={appStyles.pt5}>
                        <Text style={[styles.errorText]} >{props.errorText}</Text>
                    </View>
                ) : null}
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    inputTextStyle: {
        flex: 1,
        fontFamily: fontFamily.appTextMedium,
        fontSize: 14,
        color: colors.black

    },
    phoneNumberTextStyle: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: 16,
        color: colors.black,
        paddingLeft: 5
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    sendIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    },
    formInput: {

        width: '100%',
    },
    titleStyle: {
        paddingBottom: 5,
        fontSize: 16,
        fontFamily: fontFamily.appTextRegular,
        color: '#666666',

    },
    errorText: {
        color: colors.errorColor,
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular,
        paddingLeft: 25
    },
    input: {
        borderWidth: 1,
        borderColor: '#11111152',
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        height: 55,
        paddingLeft: 10,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bankIconStyle: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    fileIconStyle: {
        width: wp(6),
        height: hp(4),
        resizeMode: 'contain',
    }
})