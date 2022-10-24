import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button } from '../../../components';
import { appIcons, appImages, colors, routes, wp, } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'
import SuggestionCard from '../../../components/suggestioncard';
import SearchFilter from '../../../components/filtersearch';

const HomeScreen = ({ navigation }) => {
  const [isSearch, setIsSearch] = useState("")
  const categorArray = [
    {
      id: 1,
      labourPic: appImages.labourpic,
      rating: 4.6,
      wage: 24,
      company: "Ms Hannah",
      adress: "8700 Commerce Park Houston texas",
      opening: "9:30AM",
      closing: "8:30PM",
      pic: appIcons.cat1,
      text: "Plumber",
      shade: true
    },
    {
      id: 2,
      labourPic: appImages.labourpic,
      rating: 4.6,
      wage: 25,
      company: "Ms Hannah",
      adress: "8700 Commerce Park Houston texas",
      opening: "9:30AM",
      closing: "8:30PM",
      pic: appIcons.cat2,
      text: "Cleaning",
      shade: true
    },
    {
      id: 3,
      labourPic: appImages.labourpic,
      rating: 4.6,
      wage: 25,
      company: "Ms Hannah",
      adress: "8700 Commerce Park Houston texas",
      opening: "9:30AM",
      closing: "8:30PM",
      pic: appIcons.cat3,
      text: "Laundry",
      shade: false
    },
    {
      id: 4,
      labourPic: appImages.labourpic,
      rating: 4.6,
      wage: 25,
      company: "Ms Hannah",
      adress: "8700 Commerce Park Houston texas",
      opening: "9:30AM",
      closing: "8:30PM",
      pic: appIcons.cat4,
      text: "Repairing",
      shade: false
    },
    {
      id: 5,
      labourPic: appImages.labourpic,
      rating: 4.6,
      wage: 25,
      company: "Ms Hannah",
      adress: "8700 Commerce Park Houston texas",
      opening: "9:30AM",
      closing: "8:30PM",
      pic: appIcons.cat5,
      text: "Polishing",
      shade: false
    },
    {
      id: 6,
      labourPic: appImages.labourpic,
      rating: 4.6,
      wage: 25,
      company: "Ms Hannah",
      adress: "8700 Commerce Park Houston texas",
      opening: "9:30AM",
      closing: "8:30PM",
      pic: appIcons.cat4,
      text: "Painting",
      shade: false
    },
    {
      id: 7,
      labourPic: appImages.labourpic,
      rating: 4.6,
      wage: 25,
      company: "Ms Hannah",
      adress: "8700 Commerce Park Houston texas",
      opening: "9:30AM",
      closing: "8:30PM",
      pic: appIcons.cat4,
      text: "Plumber",
      shade: false
    },
  ]
  const RenderCategory = (props) => {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={
          props.shade === true ? styles.shadeStyle : styles.borderStyle
        }>
          <Image resizeMode='contain' source={props.source} style={styles.renderCatImage} />
        </View>
        <View style={styles.renderTextView}>
          <Text style={styles.renderText}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={[appStyles.safeContainer]} >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={appStyles.scrollContainer}>
        <View style={[appStyles.flex1,]}>
          <View style={styles.mainView}>
            <View style={styles.subView}>
              <Image resizeMode='contain' source={appIcons.fourbox} style={styles.imageStyle} />
              <View style={[appStyles.row]}>
                <Text style={styles.locationText}>Current Location</Text>
                <Image resizeMode='contain' source={appIcons.arrowDown} style={styles.downArrowIcon} />
              </View>
              <View style={styles.profileImageView}>
                <Image resizeMode='contain' source={appImages.profileImg} style={styles.profileImage} />
              </View>
            </View>
            <View style={styles.userNameView}>
              <Text Text style={styles.userNameText}>{`Hi, Username`}</Text>
              <Text style={styles.subText}>What type of labour are you looking for</Text>
            </View>
            <View style={styles.buttonView}>
              <Button onPress={() => navigation.navigate(routes.category)} containerStyle={styles.containerStyle} style={styles.buttonText} >Post Service Project</Button>
            </View>
          </View>
          <View style={styles.homeImageView}>
            <Image resizeMode='contain' source={appImages.homeImage} style={styles.homeImage} />
          </View>
          <View style={styles.searchView}>
            <SearchFilter onChangeText={(text) => setIsSearch(text)} placeholder={"Search with categories"} onPress={() => navigation.navigate(routes.filter)} />
          </View>
          {
            isSearch == "" ?
              <View style={styles.categoryView}>
                <Text style={styles.categoryText}>Categories</Text>
              </View> : null
          }
          {
            isSearch == "" ?
              <>
                <View style={[appStyles.flex1, { paddingHorizontal: wp(1.9) }]}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categorArray}
                    renderItem={({ item, index }) => <RenderCategory source={item.pic} text={item.text} shade={item.shade} onPress={() => navigation.navigate(routes.searchResult, { item: item })} />}
                  />
                </View>
              </> : null
          }
          <View style={[appStyles.flex1]}>
            <FlatList data={categorArray}
              ListHeaderComponent={() => {
                return (
                  <Text style={styles.nearByText}>{isSearch == "" ? "Nearby you" : `Results for "${isSearch}"`} </Text>
                )
              }
              }
              renderItem={({ item, index }) => <SuggestionCard
                onPress={() => navigation.navigate(routes.serviceProvider)}
                source={item.labourPic}
                daylist={isSearch == "" ? false : true}
                rating={item.rating}
                wage={item.wage}
                company={item.company}
                adress={item.adress}
                opening={item.opening}
                closing={item.closing}
                work={item.text}
              />
              }
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView >
  )
}
export default HomeScreen