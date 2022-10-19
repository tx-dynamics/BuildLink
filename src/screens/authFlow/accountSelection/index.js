import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { appIcons, appImages, colors, hp, routes } from '../../../services'
import { Input } from '../../../components/textInput';
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'
import Button from '../../../components/button';

const AccountSelection = ({ navigation }) => {

  const [isSkilled, setIsSkilled] = useState(false)


  return (
    <SafeAreaView style={[appStyles.safeContainer]} >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={appStyles.scrollContainer}>
        <View style={[appStyles.flex1]}>
          <View style={styles.bgImageView}>
            <ImageBackground resizeMode='contain' source={appImages.loginBg2} style={styles.bgStyle} />
            <View>
              <Image resizeMode='contain' source={appImages.loginBg1} style={styles.topSingleImageStyle} />
            </View>
          </View>
          <View style={styles.buttonView}>
            <Button borderWidth={1} themeColor={colors.white} onPress={() => { navigation.navigate(routes.login, { isSkilled: true }), setIsSkilled(true) }} containerStyle={styles.buttonStyle} style={{ fontSize: 14, color: colors.black }} >Skilled Labour</Button>
          </View>
          <View style={{ alignSelf: "center", marginTop: hp(5) }}>
            <Button onPress={() => navigation.navigate(routes.login, { isSkilled: false })} containerStyle={styles.buttonStyle1} style={{ fontSize: 14 }} >Contractor</Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
export default AccountSelection