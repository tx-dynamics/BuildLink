import React from 'react'
import { View, SafeAreaView, StatusBar, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors, fontFamily } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'

const Splash = ({ navigation }) => {
  return (
    <SafeAreaView style={[appStyles.safeContainer]} >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={appStyles.scrollContainer}>
        <View style={[appStyles.rowCenter, appStyles.flex1]}>
          <Text style={{ fontFamily: fontFamily.appTextMedium, color: colors.black }}>Splash screen</Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Splash