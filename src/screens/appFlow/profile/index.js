import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Image, Text, TouchableOpacity, FlatList } from 'react-native'

import { ProfileHeader, ProjectView } from '../../../components';
import { appIcons, appImages, colors, routes } from '../../../services'
import { styles } from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import appStyles from '../../../services/utilities/appStyles'

const ProfileScreen = ({ navigation }) => {
    const [isImage, setIsImage] = useState(null)
    const selectImg = () => ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
    }).then(image => {
        setIsImage(image.path)
        console.log(image.path)
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
            <ProfileHeader onPressCamera={() => selectImg()} profileImage={isImage ? { uri: isImage } : appImages.profileImg} title={'Jeff Vanah'} onPressEditProfile={() => navigation.navigate(routes.editProfile)} />
            <View style={styles.myProjectTopView}>
                <Text style={styles.myProjects}>My Projects</Text>
                <TouchableOpacity onPress={() => navigation.navigate(routes.requestDetail)} style={styles.addButtonTopView}>
                    <Image source={appIcons.add} style={styles.addButton} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={projectsArray}
                    renderItem={(item) =>
                        <ProjectView tagArray={item.item.tagsArray} image={item.item.image} title={item.item.title} company={item.item.company} date={item.item.date} time={item.item.time} />
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen