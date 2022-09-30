import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Input } from '../../../components/textInput';
import { appIcons, appImages, colors, routes, wp } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'
import Button from '../../../components/button';

const Signup = (props) => {
  const selectedData = [
    {
      id: 1,
      name: "Trandesman"
    },
    {
      id: 2,
      name: "Contractor"
    },
  ]
  const [isSelected, setIsSelected] = useState({ id: 1 })
  const [isText, setIsText] = useState("")
  const [isPassword, setIsPassword] = useState(true)
  const [isConfirmPassword, setIsConfirmPassword] = useState(true)

  const checkTick = isText.length >= 7 ? true : false
  const SelectedCard = (props) => {
    return (
      <View>
        <TouchableOpacity onPress={props.onPress} style={styles.selectionSubView}>
          <View onPress={props.onPress} style={styles.imageView}>
            <Image resizeMode='contain' style={props.style} source={props.source} />
          </View>
          <Text style={styles.selectText}>{props.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={[appStyles.safeContainer]} >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={appStyles.scrollContainer}>
        <View style={[appStyles.flex1]}>
          <View style={styles.bgimageView}>
            <Image resizeMode='contain' source={appImages.signupBg} style={styles.bgImgeStyle} />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.loginText}>Sign up</Text>
            <Text style={styles.subTitleText}>Are you a</Text>
          </View>
          <View style={styles.selectionMainView}>
            <FlatList data={selectedData}
              style={styles.flatListStyle}
              horizontal
              renderItem={({ item }) => <SelectedCard
                name={item.name}
                source={isSelected.id === item.id ? appIcons.select : appIcons.unSelect}
                onPress={() => [setIsSelected(item)]}
                style={isSelected.id === item.id ? styles.selectImageStyle : styles.unselectImageStyle} />} />
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
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
export default Signup