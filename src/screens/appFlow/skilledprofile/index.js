import { View, Text, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { appIcons, appImages, colors, fontFamily, hp, routes, wp } from '../../../services'
import { styles } from './styles.js';
import StarRating from 'react-native-star-rating';
import appStyles from '../../../services/utilities/appStyles'
import ImagePicker from 'react-native-image-crop-picker';

const SkilledProfile = (props) => {
    const [isImage, setIsImage] = useState(null)
    const catArray = [
        {
            cat: "Plumber"
        },
        {
            cat: "Electrician"
        },
    ]
    const workPics = [
        {
            pic: appIcons.plumber1
        },
        {
            pic: appIcons.plumber2
        },
        {
            pic: appIcons.plumber3
        },
        {
            pic: appIcons.plumber1
        },
        {
            pic: appIcons.plumber2
        },
        {
            pic: appIcons.plumber3
        },
        {
            pic: appIcons.plumber1
        },
    ]
    const RenderCategories = (props) => {
        return (
            <View style={styles.renderView}>
                <Text style={styles.renderCatText}>{props.cat}</Text>
            </View>
        )
    }
    const RenderPastWork = (props) => {
        return (
            <View style={styles.renderPastWorkView}>
                <Image resizeMode='cover' source={props.source} style={styles.renderPastWorkImg} />
            </View>
        )
    }
    const selectImg = () => ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
    }).then(image => {
        setIsImage(image.path)
        console.log(image.path)
    });
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <View style={[appStyles.flex1, { paddingHorizontal: wp(5), }]}>
                <TouchableOpacity onPress={() => props.navigation.navigate(routes.notification)}>
                    <Image resizeMode='contain' source={appIcons.notification} style={styles.notificationImg} />
                </TouchableOpacity>
                <View style={[appStyles.aiCenter]}>
                    <Image resizeMode='contain' source={isImage ? { uri: isImage } : appImages.profileImg} style={styles.profileImg} />
                    <TouchableOpacity onPress={() => selectImg()} style={styles.cameraView}>
                        <Image resizeMode='contain' source={appIcons.cameraIcon} style={styles.cameraImg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.userNameView}>
                    <Text style={styles.userNameText}>Jeff Vanah</Text>
                    <Text style={styles.cityText}>City, State</Text>
                    <View style={styles.starView}>
                        <StarRating
                            disabled={true}
                            emptyStarColor={"#9C9C9C"}
                            fullStarColor={"green"}
                            fullStar={appIcons.star}
                            emptyStar={appIcons.greyStar}
                            starStyle={styles.startStyle}
                            maxStars={5}
                            rating={4}
                        />
                        <Text style={styles.ratingText}>4.5 (35)</Text>
                    </View>
                </View>
                <View style={styles.categoriesView}>
                    <Text style={styles.categoriesText}>Categories</Text>
                    <Image resizeMode='contain' source={appIcons.addGrey} style={styles.addImg} />
                </View>
                <View style={styles.catFlatlistView}>
                    <FlatList
                        horizontal
                        data={catArray}
                        renderItem={({ item }) => <RenderCategories cat={item.cat} />}
                    />
                </View>
                <View style={styles.pastWorkView}>
                    <Text style={styles.pastWorkText}>Past Work</Text>
                    <Image resizeMode='center' source={appIcons.addGrey} style={styles.addImg} />
                </View>
                <View style={[appStyles.flex1]}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={workPics}
                        renderItem={({ item }) => <RenderPastWork source={item.pic} />}
                    />
                </View>
            </View>
        </SafeAreaView >
    )
}
export default SkilledProfile