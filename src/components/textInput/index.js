import React from 'react';
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';

import { appIcons, colors, fontFamily, hp, wp } from '../../services';
import appStyles from '../../services/utilities/appStyles';

export const Input = props => {
    return (
        <View style={styles.formInput}>
            <View style={[appStyles.row]}>
                <Text style={[styles.titleStyle]}>{props.children}</Text>
            </View>
            <View style={[styles.input, props.containerStyle]} >
                <TextInput
                    style={[styles.inputTextStyle, props.inputStyle]}
                    selectionColor={colors.theme}
                    value={props.value}
                    autoCapitalize="none"
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.greyDark}
                    secureTextEntry={props.secureTextEntry}
                    keyboardType={props.keyboardType}
                    editable={props.editable}
                    onChangeText={props.onChangeText}
                    multiline={props.multiline}
                    maxLength={props.maxLength}
                />
                {props.eye &&
                    <TouchableOpacity onPress={props.onPressEye}>
                        <Image source={props.secureTextEntry ? appIcons.hide : appIcons.show} style={styles.icon} />
                    </TouchableOpacity>
                }
                {props.check &&
                    <View onPress={props.onPressEye}>
                        <Image source={props.check ? appIcons.greenTick : null} style={styles.icon} />
                    </View>
                }
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    inputTextStyle: {
        flex: 1,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 14,
        color: colors.blackLight,

    },
    icon: {
        width: wp(6),
        height: wp(6),
        resizeMode: 'contain'
    },
    formInput: {
        width: wp(90),
        paddingBottom: wp(6)
    },
    titleStyle: {
        paddingBottom: hp(0.3),
        fontSize: 12,
        fontFamily: fontFamily.appTextBold,
        color: colors.greyDark,
    },
    input: {
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
        backgroundColor: colors.inputBg,
        borderRadius: wp(8),
        height: hp(5.5),
        paddingHorizontal: wp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})