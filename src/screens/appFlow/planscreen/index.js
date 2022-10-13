import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import appStyles from '../../../services/utilities/appStyles'
import { appIcons, colors, hp, wp } from '../../../services'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header } from '../../../components'

const PlanScreen = () => {
    const RenderPlan = (props) => {
        return (
            <View>
                <View style={{
                    backgroundColor: colors.theme,
                    width: wp(65),
                    height: hp(15),
                    alignSelf: "center",
                    borderRadius: wp(3)

                }}>

                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={"Choose your plan"} rightIcon={appIcons.cross} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1]}>

                    <RenderPlan backgroundColor={colors.theme} />
                    <View style={{
                        position: "absolute",
                        top: 10,
                        right: wp(3),
                        zIndex: -10
                    }}>

                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default PlanScreen

const styles = StyleSheet.create({})