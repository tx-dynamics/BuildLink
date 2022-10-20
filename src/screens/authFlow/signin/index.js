import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { appIcons, appImages, colors, fontFamily, hp, routes, wp } from '../../../services'
import { Input } from '../../../components/textInput';
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'
import Button from '../../../components/button';

const Signin = (props) => {
  const [isText, setIsText] = useState("")
  const [isPassword, setIsPassword] = useState(true)

  const checkTick = isText.length >= 7 ? true : false
  const socialLoginArray = [
    {
      id: 1,
      pic: appIcons.mail,
      route: routes.signup
    },
    {
      id: 2,
      pic: appIcons.facebook,
      route: routes.signup
    },
    {
      id: 3,
      pic: appIcons.google,
      route: routes.signup
    },
    {
      id: 4,
      pic: appIcons.apple,
      route: routes.signup
    },
  ]
  const skilledValue = props.route.params.isSkilled
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
            <ImageBackground resizeMode='contain' source={appImages.loginBg2} style={styles.bgStyle} />
            <View>
              <Image resizeMode='contain' source={appImages.loginBg1} style={styles.topSingleImageStyle} />
            </View>
          </View>
          <View style={styles.titleView}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={styles.textInputView}>
            <Input placeholder={"Username/Email"} keyboardType={"email-address"} check={checkTick} onChangeText={(text) => setIsText(text)} value={isText} >Username/Email</Input>
          </View>
          <View style={styles.passwordView}>
            <Input placeholder={"Password"} secureTextEntry={isPassword} eye onPressEye={() => setIsPassword(!isPassword)}  >Password</Input>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate(routes.forget)} style={{ paddingHorizontal: wp(7), marginTop: hp(1) }}>
            <Text style={{ color: colors.theme, alignSelf: "flex-end", fontFamily: fontFamily.appTextRegular, fontSize: 11, textDecorationLine: 'underline' }}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.buttonView}>
            <Button onPress={() => props.navigation.navigate(routes.tab, { skilledValue })} containerStyle={styles.buttonStyle} style={{ fontSize: 14 }} >Login</Button>
          </View>
          <View style={styles.signUpView}>
            <Text style={styles.signUpText}>Or, sign up with</Text>
          </View>
          <View style={styles.flatListView}>
            <FlatList data={socialLoginArray}
              horizontal
              renderItem={({ item }) => <TouchableOpacity onPress={() => props.navigation.navigate(item.route, { skilledValue: skilledValue })} style={styles.socialImagesView}>
                <Image resizeMode='contain' style={styles.socailImageStyle} source={item.pic} />
              </TouchableOpacity>
              } />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
export default Signin