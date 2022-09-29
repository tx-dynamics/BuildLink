import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { colors, routes } from '../../../services'
import { appIcons } from '../../../services/utilities/assets'
import { styles } from './styles'
import appStyles from '../../../services/utilities/appStyles'

const Splash = ({ navigation }) => {
  React.useEffect(() => {
    performTimeConsumingTask()
  }, [])

  const performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        navigation.replace(routes.onboarding)
      }, 3000),
    )
  }

  return (
    <SafeAreaView style={appStyles.safeContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={appStyles.scrollContainer}>
        <View style={appStyles.colCenter}>
          <Image source={appIcons.logo} style={styles.logoStyle} />
          <Text style={styles.textStyle}>BuildLink</Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Splash