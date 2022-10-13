import React from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { appIcons, colors, routes, } from '../../../services'
import { Header } from '../../../components'
import { styles } from './styles'
import appStyles from '../../../services/utilities/appStyles'

const CategoryScreen = (props) => {
    const catArray = [
        {
            id: 1,
            pic: appIcons.cat1,
            text: "Plumber"
        },
        {
            id: 2,
            pic: appIcons.cat2,
            text: "Carpentry"
        },
        {
            id: 3,
            pic: appIcons.cat3,
            text: "Electrical"
        },
        {
            id: 4,
            pic: appIcons.cat5,
            text: "Low Voltage"
        },
        {
            id: 5,
            pic: appIcons.cat2,
            text: "Foundation"
        },
        {
            id: 6,
            pic: appIcons.cat1,
            text: "Cleaning"
        },
        {
            id: 7,
            pic: appIcons.cat2,
            text: "Plumber"
        },
        {
            id: 8,
            pic: appIcons.cat3,
            text: "Plumber"
        },
        {
            id: 9,
            pic: appIcons.cat4,
            text: "Cleaning"
        },
        {
            id: 10,
            pic: appIcons.cat5,
            text: "Plumber"
        },
    ]
    const Categories = (props) => {
        return (
            <TouchableOpacity onPress={props.onPress} style={styles.catMainView}>
                <View style={styles.catSubView}>
                    <Image resizeMode='contain' source={props.source} style={styles.catImage} />
                </View>
                <Text style={styles.catText}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={"Categories"} rightIcon={appIcons.cross} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={appStyles.flex1}>
                    <View style={styles.subView}>
                        <Text style={styles.adressText}>8600, Houston Texas</Text>
                        <Text style={styles.subText}>What type of labour you are looking for?</Text>
                    </View>
                    <View style={[appStyles.aiCenter]}>
                        <FlatList data={catArray}
                            numColumns={2}
                            renderItem={({ item, index }) => <Categories source={item.pic} text={item.text} onPress={() => props.navigation.navigate(routes.searchResult, { item: item })} />}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default CategoryScreen

