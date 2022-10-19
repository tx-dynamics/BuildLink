import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StarRating from 'react-native-star-rating';

import { appIcons, colors, fontFamily, hp, wp, appImages } from '../../../services'
import { Button, Header } from '../../../components'
import SearchFilter from '../../../components/filtersearch'
import appStyles from '../../../services/utilities/appStyles'
import EventComponent from '../../../components/eventscomponent';
import SocialComponent from '../../../components/socialComponent';
import TrainingComponent from '../../../components/trainingcomponent';
import { styles } from './styles';

const CommunityScreen = (props) => {
    const [isStart, setIsStart] = useState(Math.ceil(4))
    const [isEvent, setIsEvent] = useState(false)
    const [isSocial, setIsSocial] = useState(true)
    const [isTraining, setIsTraining] = useState(false)

    const EventComp = () => {
        setIsEvent(true)
        setIsSocial(false)
        setIsTraining(false)
    }
    const SocialComp = () => {
        setIsEvent(false)
        setIsSocial(true)
        setIsTraining(false)
    }
    const TrainingComp = () => {
        setIsEvent(false)
        setIsSocial(false)
        setIsTraining(true)
    }

    const onStarRatingPress = (rating) => {
        setIsStart(rating)
    }
    const dataArray = [
        {
            name: "Sean Paul",
            pic: appIcons.review1,
            rating: 2
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
            name: "Dennis Reynolds",
            source: appImages.eventPic,
            time: "2 hrs ago",
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
            name: "Dennis Reynoldwwwwwwwwwwws",
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
                        emptyStarColor={"#9C9C9C"}
                        fullStarColor={"green"}
                        fullStar={appIcons.star}
                        emptyStar={appIcons.greyStar}
                        starStyle={{ width: wp(2.2), height: wp(2.2), marginHorizontal: wp(.4) }}
                        maxStars={5}
                        rating={props.rating}
                        selectedStar={(rating) => onStarRatingPress(rating)}
                    />
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
                <Text style={{
                    color: colors.black,
                    fontFamily: fontFamily.appTextBold, marginTop: hp(1)
                }}>Community reviews</Text>
                <View style={{}}>

                    <FlatList
                        contentContainerStyle={{ paddingTop: hp(3), }}
                        data={dataArray}
                        horizontal
                        renderItem={({ item }) => <ReviewComponent source={item.pic} name={item.name} rating={item.rating} />}
                    />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp(4), marginBottom: hp(2) }}>
                    <Button onPress={() => EventComp()} style={{ fontSize: 11, color: isEvent ? colors.white : colors.black, fontFamily: isEvent ? fontFamily.appTextBold : fontFamily.appTextMedium }} themeColor={isEvent ? colors.theme : colors.whitish} containerStyle={{ width: wp(30), height: wp(9) }}>Events</Button>
                    <Button onPress={() => SocialComp()} style={{ fontSize: 11, color: isSocial ? colors.white : colors.black, fontFamily: isSocial ? fontFamily.appTextBold : fontFamily.appTextMedium }} themeColor={isSocial ? colors.theme : colors.whitish} containerStyle={{ width: wp(22), height: wp(9) }}>Social</Button>
                    <Button onPress={() => TrainingComp()} style={{ fontSize: 11, color: isTraining ? colors.white : colors.black, fontFamily: isTraining ? fontFamily.appTextBold : fontFamily.appTextMedium }} themeColor={isTraining ? colors.theme : colors.whitish} containerStyle={{ width: wp(30), height: wp(9) }}>Trainings</Button>
                </View>
                {
                    isEvent ?
                        <FlatList data={eventArray}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <EventComponent source={item.source} date={item.date} likes={item.likes} title={item.title} adress={item.adress} />}
                        /> : null
                }
                {
                    isSocial ?
                        <FlatList data={eventArray}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <SocialComponent source={item.socialPic} time={item.time} userPic={item.userPic} userName={item.name} />}
                        /> : null
                }
                {
                    isTraining ?
                        <FlatList data={eventArray}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <TrainingComponent source={item.source} date={item.date} likes={item.likes} title={item.title} adress={item.adress} />}
                        /> : null
                }
            </View>
        </SafeAreaView >
    )
}
export default CommunityScreen