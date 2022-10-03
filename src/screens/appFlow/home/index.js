import React from 'react'
import { View, SafeAreaView, StatusBar, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../../../components';

import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'
import { styles } from './styles';

const HomeScreen = (props) => {
  const categorArray = [
    {
      id: 1,
      pic: appIcons.cat1,
      text: "Plumber",
      shade: true
    },
    {
      id: 2,
      pic: appIcons.cat2,
      text: "Cleaning",
      shade: true
    },
    {
      id: 3,
      pic: appIcons.cat3,
      text: "Laundry",
      shade: false
    },
    {
      id: 4,
      pic: appIcons.cat4,
      text: "Repairing",
      shade: false
    },
    {
      id: 5,
      pic: appIcons.cat5,
      text: "Polishing",
      shade: false
    },
    {
      id: 6,
      pic: appIcons.cat4,
      text: "Painting",
      shade: false
    },
    {
      id: 7,
      pic: appIcons.cat4,
      text: "Plumber",
      shade: false
    },
  ]
  const shade = {

  }
  const RenderCategory = (props) => {
    return (
      <TouchableOpacity>

        <View style={
          props.shade === true ? styles.shadeStyle : styles.borderStyle
        }>
          <Image resizeMode='contain' source={props.source} style={{
            width: wp(7),
            height: wp(7)
          }} />

        </View>
        <View style={{ marginTop: hp(.5) }}>
          <Text style={{
            color: colors.blackLight,
            fontFamily: fontFamily.appTextRegular,
            fontSize: 10,
            textAlign: "center"
          }}>{props.text}</Text>
        </View>

      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={[appStyles.safeContainer]} >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={appStyles.scrollContainer}>
        <View style={[appStyles.flex1,]}>
          <View style={{
            backgroundColor: colors.backgrondLight,
            //paddingVertical: hp(2.5),
            paddingHorizontal: wp(4),
            marginTop: hp(2)
          }}>
            <View style={
              {
                flexDirection: "row",
                justifyContent: "space-between",
                //alignItems: "flex-start"
                marginTop: hp(2)
                //paddingHorizontal: wp(4),

              }}>
              <Image resizeMode='contain' source={appIcons.fourbox} style={{
                width: wp(5),
                height: wp(5),
              }} />
              <View style={{ flexDirection: "row", }}>
                <Text style={
                  {
                    color: colors.blackLight,
                    fontFamily: fontFamily.appTextRegular,
                    fontSize: 12

                  }}>Current Location</Text>
                <Image resizeMode='contain' source={appIcons.arrowDown} style={{
                  width: wp(1.5),
                  height: wp(1.5),
                  alignSelf: "center",
                  top: hp(-.4),
                  marginLeft: wp(1.5),
                  tintColor: colors.black
                }} />
              </View>
              <View style={{
                width: wp(8),
                height: wp(8),
                borderRadius: wp(5),
                top: hp(-1)
                // backgroundColor: "red"
              }}>

                <Image resizeMode='contain' source={appImages.profileImg} style={
                  {
                    width: wp(8),
                    height: wp(8),
                    borderRadius: wp(5),


                  }} />
              </View>


            </View>
            <View style={{
              marginTop: hp(2.5)
            }}>
              <Text Text style={{
                color: colors.black,
                fontFamily: fontFamily.appTextRegular,
                fontSize: 12
              }}>{`Hi, Username`}</Text>
              <Text style={{
                color: colors.black,
                width: wp(50),
                fontFamily: fontFamily.appTextBold,
                textAlign: "left",
                fontSize: 14,
              }}>What type of labour are you looking for</Text>
            </View>
            <View style={{
              width: wp(40),
              //marginLeft: wp(4), 
              marginTop: hp(3),

            }}>
              <Button containerStyle={
                {
                  height: hp(3.5),
                  marginBottom: hp(2),
                }
              }
                style={
                  {
                    fontSize: 12,
                    fontFamily: fontFamily.appTextRegular
                  }} >Post Service Project</Button>
            </View>
          </View>
          <View style={{
            position: "absolute",
            top: hp(8),
            right: wp(-.6)
          }}>
            <Image resizeMode='contain' source={appImages.homeImage} style={{
              width: wp(42),
              height: wp(42)
            }} />
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: wp(4),
            marginTop: hp(5.7),
            alignSelf: "center",
            borderRadius: wp(8),
            height: hp(5.5),
            width: wp(90),
            backgroundColor: colors.whitish

          }}>
            <TextInput
              placeholder='Search Tradesman Services'
              placeholderTextColor={colors.greyDark}
              style={{
                flex: 1,
                color: colors.black,
                fontFamily: fontFamily.appTextRegular,
                fontSize: 13
              }} />
            <Image resizeMode='contain' source={appIcons.filter} style={{
              width: wp(5.5),
              height: wp(5.5)
            }} />
          </View>
          <View style={{
            marginTop: hp(1.5),
            paddingHorizontal: wp(4)
          }}>

            <Text style={{ color: colors.black, fontFamily: fontFamily.appTextBold }}>Categories</Text>
          </View>

          <View >
            <FlatList

              horizontal
              data={categorArray}
              renderItem={({ item, index }) => <RenderCategory source={item.pic} text={item.text} shade={item.shade} />}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView >
  )
}

export default HomeScreen