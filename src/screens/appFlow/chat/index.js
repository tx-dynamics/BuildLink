import { View, FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react'

import { Header } from '../../../components';
import { appIcons, appImages, colors, routes, } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'

const ChatScreen = ({ navigation }) => {
    const chatData = [
        {
            id: 1,
            name: "Zeeshan Ali",
            pic: appImages.chatuser,
            message: "Good Bro",
            data: "27, Sep"
        },
        {
            id: 2,
            name: "Abdul Rehman",
            pic: appImages.dummyImg,
            message: "Good Bro",
            data: "27, Sep"
        },
        {
            id: 3,
            name: "Muhammad Adil",
            pic: appImages.profileImg,
            message: "Good Bro",
            data: "27, Sep"
        },
    ]
    const UserCard = (props) => {
        return (
            <TouchableOpacity onPress={props.onPress} style={styles.userCardMainView}>
                <View style={styles.userCardSubView}>
                    <View style={appStyles.row}>
                        <Image resizeMode='contain' source={props.source} style={styles.imageStyle} />
                        <Image resizeMode='contain' source={appIcons.greendot} style={styles.greenDotStyle} />
                        <View style={styles.textView}>
                            <Text style={styles.nameText}>{props.name}</Text>
                            <Text style={styles.messageText}>{props.message}</Text>
                        </View>
                    </View>
                    <Text style={styles.dateText}>{props.date}</Text>
                </View>
                <View style={styles.borderView}></View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header onPress={() => navigation.goBack()} title={"Inbox"} leftIcon={appIcons.backArrow} leftIconView />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1]}>
                    <View style={styles.flatListMainView}>
                        <FlatList data={chatData}
                            renderItem={({ item }) => <UserCard name={item.name} date={item.data} source={item.pic} message={item.message} onPress={() => navigation.navigate(routes.message)} />} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
export default ChatScreen