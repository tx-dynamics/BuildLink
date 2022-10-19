import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button, ProjectView } from '../../../components';
import { appIcons, appImages, colors, hp, routes, wp, } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'
import SuggestionCard from '../../../components/suggestioncard';
import CustomCalendar from '../../../components/customcalender';
import SkilledNearby from '../../../components/skillednearby';

const SkilledHome = ({ navigation }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 5);
        return date;
    });
    const projectsArray = [
        {
            id: 1,
            title: '8600 Houston Texas',
            company: 'Company Name',
            date: '20 July',
            time: '1 week',
            image: appImages.dummyImg,
            tagsArray: [
                {
                    id: 1,
                    name: 'Electrician 13'
                },
                {
                    id: 2,
                    name: 'Plumber  12'
                },
                {
                    id: 3,
                    name: 'Site Engineer  3'
                }
            ]
        },
        {
            id: 2,
            title: '8600 Houston Texas',
            company: 'Company Name',
            date: '20 July',
            time: '1 week',
            image: appImages.dummyImg,
            tagsArray: [
                {
                    id: 1,
                    name: 'Electrician 13'
                },
                {
                    id: 2,
                    name: 'Plumber  12'
                },
                {
                    id: 3,
                    name: 'Site Engineer  3'
                }
            ]
        },
        {
            id: 3,
            title: '8600 Houston Texas',
            company: 'Company Name',
            date: '20 July',
            time: '1 week',
            image: appImages.dummyImg,
            tagsArray: [
                {
                    id: 1,
                    name: 'Electrician 13'
                },
                {
                    id: 2,
                    name: 'Plumber  12'
                },
                {
                    id: 3,
                    name: 'Site Engineer  3'
                }
            ]
        },
        {
            id: 4,
            title: '8600 Houston Texas',
            company: 'Company Name',
            date: '20 July',
            time: '1 week',
            image: appImages.dummyImg,
            tagsArray: [
                {
                    id: 1,
                    name: 'Electrician 13'
                },
                {
                    id: 2,
                    name: 'Plumber  12'
                },
                {
                    id: 3,
                    name: 'Site Engineer  3'
                }
            ]
        },
    ]
    const categorArray = [
        {
            id: 1,
            labourPic: appImages.labourpic,
            rating: 4.6,
            wage: 25,
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
                            <Button onPress={() => navigation.navigate(routes.category)} containerStyle={styles.containerStyle} style={styles.buttonText} >Get Start</Button>
                        </View>
                    </View>
                    <View style={styles.homeImageView}>
                        <Image resizeMode='contain' source={appImages.laborFemale} style={styles.homeImage} />
                    </View>
                    <View style={styles.searchView}>
                        <TextInput
                            placeholder='Search Tradesman Services'
                            onChangeText={(text) => setIsSearch(text)}
                            placeholderTextColor={colors.greyDark}
                            style={styles.textInputStyle} />
                        <TouchableOpacity onPress={() => navigation.navigate(routes.filter)}>
                            <Image resizeMode='contain' source={appIcons.filter} style={styles.filterImage} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.categoryText}>Your Timeline</Text>
                    <View style={{ height: hp(47) }}>
                        <CustomCalendar
                            lineTop={hp(-1.7)}
                            marginRight={wp(3.5)}
                            boxColor={colors.theme}
                            lineColor={colors.calenderline}
                            //  {...{ showCal, setShowCal }}
                            minDate={new Date()}
                            startDate={startDate}
                            endDate={endDate}
                            startEndDateChange={(startData, endData) => {
                                if (startData != null && endData != null) {
                                    setStartDate(startData);
                                    console.log(startData)
                                    setEndDate(endData);
                                }
                            }}
                        />

                    </View>
                    <Text style={styles.nearByText}>Nearby you</Text>
                    <View style={styles.container}>
                        <FlatList
                            keyExtractor={item => item.id}
                            data={projectsArray}
                            renderItem={(item) =>
                                <SkilledNearby onPress={() => navigation.navigate(routes.skillApply)} tagArray={item.item.tagsArray} image={item.item.image} title={item.item.title} company={item.item.company} date={item.item.date} time={item.item.time} />
                            }
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView >
    )
}
export default SkilledHome