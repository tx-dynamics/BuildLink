import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Input } from '../../../components/textInput';
import { appIcons, appImages, colors, fontFamily, hp, routes, wp } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'
import Button from '../../../components/button';

const Signup = (props) => {
  const [istradesman, setIstradesman] = useState(true)
  const [isConstructor, setIsConstructor] = useState(false)
  const [isText, setIsText] = useState("")
  const [isPassword, setIsPassword] = useState(true)
  const [isConfirmPassword, setIsConfirmPassword] = useState(true)

  const checkTick = isText.length >= 7 ? true : false
  return (
    <SafeAreaView style={[appStyles.safeContainer]} >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={appStyles.scrollContainer}>
        <View style={{ alignItems: "center", }}>
          <Image resizeMode='contain' source={appImages.signupBg} style={styles.bgImgeStyle} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.loginText}>Sign up</Text>
          <Text style={styles.subTitleText}>Are you a</Text>
        </View>
        <View style={styles.selectionMainView}>
          <View style={styles.selectionSubView}>
            <TouchableOpacity onPress={() => { setIstradesman(true), setIsConstructor(false) }} style={{ width: wp(6) }}>
              <Image resizeMode='contain' style={styles.selectImageStyle} source={istradesman ? appIcons.select : appIcons.unSelect} />
            </TouchableOpacity>
            <Text style={styles.selectText}>Tradesman</Text>
          </View>
          <View style={styles.selectionSubView}>
            <TouchableOpacity onPress={() => { setIsConstructor(true), setIstradesman(false) }} style={{ width: wp(6) }}>
              <Image resizeMode='contain' style={styles.selectImageStyle} source={isConstructor ? appIcons.select : appIcons.unSelect} />
            </TouchableOpacity>
            <Text style={styles.selectText}>Contractor</Text>
          </View>
        </View>
        <View style={styles.textInputView}>
          <Input placeholder={"Usernamr/Email"} keyboardType={"email-address"} check={checkTick} onChangeText={(text) => setIsText(text)} value={isText} >Username/Email</Input>
        </View>
        <View style={styles.passwordView}>
          <Input placeholder={"Password"} secureTextEntry={isPassword} eye onPressEye={() => setIsPassword(!isPassword)}  >Password</Input>
        </View>
        <View style={styles.passwordView}>
          <Input placeholder={"Confirm password"} secureTextEntry={isConfirmPassword} eye onPressEye={() => setIsConfirmPassword(!isConfirmPassword)}  >Confirm Password</Input>
        </View>
        <View style={styles.buttonView}>
          <Button onPress={() => props.navigation.navigate(routes.confirmPhone)} containerStyle={styles.buttonStyle} style={{ fontSize: 14 }} >Sign Up</Button>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
export default Signup