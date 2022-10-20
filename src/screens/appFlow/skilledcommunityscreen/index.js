import { FlatList, Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import React, { useState } from 'react'
import StarRating from 'react-native-star-rating';

import { appIcons, colors, fontFamily, hp, wp, appImages } from '../../../services'
import { Button, Header } from '../../../components'
import { styles } from './styles';
import SearchFilter from '../../../components/filtersearch'
import appStyles from '../../../services/utilities/appStyles'
import EventComponent from '../../../components/eventscomponent';
import SocialComponent from '../../../components/socialComponent';
import TrainingComponent from '../../../components/trainingcomponent';

const CommunityScreen = (props) => {
    const [isEvent, setIsEvent] = useState("Social")

    const dataArray = [
        {
            name: "Sean Paull",
            pic: appIcons.review1,
            rating: 3
        },
        {
            name: "Jeff Whittie",
            pic: appIcons.review2,
            rating: 4
        },
        {
            name: "Sill Hamm",
            pic: appIcons.review3,
            rating: 3
        },
        {
            name: "Sean Paul",
            pic: appIcons.review1,
            rating: 2
        },
        {
            name: "Sean Paul",
            pic: appIcons.review3,
            rating: 2
        },
    ]
    const eventArray = [
        {
            name: "Dennis Reynold",
            source: appImages.eventPic,
            time: "1 hrs ago",
            userPic: appImages.labourpic,
            socialPic: appImages.workPic,
            date: "SAT, AUG 12 AT 11 AM",
            title: "Interior designes expo",
            adress: "Houston tower, 87500",
            likes: "5.2k"
        },
        {
            name: "Dennis Reynolds",
            source: appImages.eventPic2,
            time: "2 hrs ago",
            userPic: appImages.labourpic,
            socialPic: appImages.workPic2,
            date: "SAT, AUG 12 AT 11 AM",
            title: "Interior designes expo",
            adress: "Houston tower, 87500",
            likes: "5.2k"
        },
        {
            name: "Dennis Reynolds",
            source: appImages.eventPic2,
            time: "2 hrs ago",
            userPic: appImages.labourpic,
            socialPic: appImages.workPic3,
            date: "SAT, AUG 12 AT 11 AM",
            title: "Interior designes expo",
            adress: "Houston tower, 87500",
            likes: "5.2k"
        },
        {
            name: "Dennis Reynolds",
            source: appImages.eventPic2,
            time: "2 hrs ago",
            userPic: appImages.labourpic,
            socialPic: appImages.workPic,
            date: "SAT, AUG 12 AT 11 AM",
            title: "Interior designes expo",
            adress: "Houston tower, 87500",
            likes: "5.2k"
        },
    ]
    const ReviewComponent = (props) => {
        return (
            <View style={styles.reviewCompView}>
                <View style={styles.sourceView}>
                    <Image resizeMode='contain' source={props.source} style={styles.sourceImg} />
                </View>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text style={styles.titleText}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
                <View style={{ bottom: hp(2.2) }}>
                    <StarRating
                        disabled={true}
                        fullStar={appIcons.star}
                        emptyStar={appIcons.greyStar}
                        starStyle={styles.startStyle}
                        maxStars={5}
                        rating={props.rating} />
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Our Community'} leftIconView leftIcon={appIcons.backArrow} onPress={() => props.navigation.goBack()} />
            <View style={[appStyles.flex1, { paddingHorizontal: wp(5), }]}>
                <View style={{ marginTop: hp(3), }}>
                    <SearchFilter placeholder={"Search with categories"} />
                </View>
                <Text style={styles.communityReviewText}>Community reviews</Text>
                <View>
                    <FlatList
                        contentContainerStyle={{ paddingTop: hp(3), }}
                        data={dataArray}
                        horizontal
                        renderItem={({ item }) => <ReviewComponent source={item.pic} name={item.name} rating={item.rating} />} />
                </View>
                <View style={styles.btnView}>
                    <Button onPress={() => setIsEvent("Event")} style={{ fontSize: 11, color: isEvent === "Event" ? colors.white : colors.black, fontFamily: isEvent === "Event" ? fontFamily.appTextBold : fontFamily.appTextMedium }} themeColor={isEvent === "Event" ? colors.theme : colors.whitish} containerStyle={{ width: wp(30), height: wp(9) }}>Events</Button>
                    <Button onPress={() => setIsEvent("Social")} style={{ fontSize: 11, color: isEvent === "Social" ? colors.white : colors.black, fontFamily: isEvent === "Social" ? fontFamily.appTextBold : fontFamily.appTextMedium }} themeColor={isEvent === "Social" ? colors.theme : colors.whitish} containerStyle={{ width: wp(22), height: wp(9) }}>Social</Button>
                    <Button onPress={() => setIsEvent("Training")} style={{ fontSize: 11, color: isEvent === "Training" ? colors.white : colors.black, fontFamily: isEvent === "Training" ? fontFamily.appTextBold : fontFamily.appTextMedium }} themeColor={isEvent === "Training" ? colors.theme : colors.whitish} containerStyle={{ width: wp(30), height: wp(9) }}>Trainings</Button>
                </View>{isEvent === "Event" ?
                    <FlatList data={eventArray}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <EventComponent source={item.source} date={item.date} likes={item.likes} title={item.title} adress={item.adress} />} /> : null}
                {isEvent === "Social" ?
                    <FlatList data={eventArray}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <SocialComponent source={item.socialPic} time={item.time} userPic={item.userPic} userName={item.name} />} /> : null}
                {isEvent === "Training" ?
                    <FlatList data={eventArray}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <TrainingComponent source={item.source} date={item.date} likes={item.likes} title={item.title} adress={item.adress} />} /> : null}
            </View>
        </SafeAreaView >
    )
}
export default CommunityScreen