import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { View, SafeAreaView, StatusBar, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
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
      pic: appIcons.mail,
      route: routes.signup
    },
    {
      pic: appIcons.facebook,
      route: routes.signup
    },
    {
      pic: appIcons.google,
      route: routes.signup
    },
    {
      pic: appIcons.apple,
      route: routes.signup
    },
  ]
  return (
    <SafeAreaView style={[appStyles.safeContainer]} >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={appStyles.scrollContainer}>
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
          <Input placeholder={"Usernamr/Email"} keyboardType={"email-address"} check={checkTick} onChangeText={(text) => setIsText(text)} value={isText} >Username/Email</Input>
        </View>
        <View style={styles.passwordView}>
          <Input placeholder={"Password"} secureTextEntry={isPassword} eye onPressEye={() => setIsPassword(!isPassword)}  >Password</Input>
        </View>
        <View style={styles.buttonView}>
          <Button containerStyle={styles.buttonStyle} style={{ fontSize: 14 }} >Login</Button>
        </View>
        <View style={styles.signUpView}>
          <Text style={styles.signUpText}>Or, sign up with</Text>
        </View>
        <View style={styles.flatListView}>
          <FlatList data={socialLoginArray}
            horizontal
            renderItem={({ item }) => <TouchableOpacity onPress={() => props.navigation.navigate(item.route)} style={styles.socialImagesView}>
              <Image resizeMode='contain' style={styles.socailImageStyle} source={item.pic} />
            </TouchableOpacity>
            } />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
export default Signin