import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button } from '../../../components';
import { appIcons, appImages, colors, hp, routes, wp, } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'
import CustomCalendar from '../../../components/customcalender';
import SkilledNearby from '../../../components/skillednearby';
import SearchFilter from '../../../components/filtersearch';

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
                            <Button containerStyle={styles.containerStyle} style={styles.buttonText} >Get Start</Button>
                        </View>
                    </View>
                    <View style={styles.homeImageView}>
                        <Image resizeMode='contain' source={appImages.laborFemale} style={styles.homeImage} />
                    </View>
                    <View style={styles.searchView}>
                        <SearchFilter placeholder={"Search with categories"} />
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
                            }} />
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