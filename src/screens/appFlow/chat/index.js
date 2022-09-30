import React from 'react'
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { Touchable } from 'react-native';
import { View, SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from '../../../components';

import { appIcons, appImages, colors, fontFamily, hp, routes, wp } from '../../../services'
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
            <TouchableOpacity onPress={props.onPress} style={{ marginBottom: hp(2.3) }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: wp(6), }}>

                    <View style={{ flexDirection: "row", }}>
                        <Image resizeMode='contain' source={props.source} style={{ width: wp(20), height: wp(20), borderRadius: wp(10) }} />
                        <Image resizeMode='contain' source={appIcons.greendot} style={{
                            position: "absolute",
                            width: wp(3),
                            height: wp(3),
                            top: hp(8),
                            left: wp(15.5)
                        }} />
                        <View style={{ marginLeft: wp(5) }}>
                            <Text style={{ color: colors.black, fontFamily: fontFamily.appTextBold, fontSize: 13 }}>{props.name}</Text>
                            <Text style={{ color: colors.black, fontFamily: fontFamily.appTextRegular, fontSize: 10, marginTop: hp(.5) }}>{props.message}</Text>

                        </View>
                    </View>
                    <Text style={{ color: colors.dateColor, fontSize: 11, fontFamily: fontFamily.appTextRegular }}>{props.date}</Text>
                </View>
                <View style={{ borderWidth: .5, width: wp(60), marginLeft: wp(31), marginTop: hp(1), borderColor: colors.borderColorLight }}></View>

            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={"Inbox"} leftIcon={appIcons.backArrow} leftIconView />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1]}>
                    <View style={{ marginTop: hp(3.5) }}>
                        <FlatList data={chatData}
                            renderItem={({ item }) => <UserCard name={item.name} date={item.data} source={item.pic} message={item.message} />} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ChatScreen