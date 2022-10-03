import React from 'react'
import { View, SafeAreaView, StatusBar, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import { AutoScrollFlatList } from 'react-native-autoscroll-flatlist';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from '../../../components';

import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'

const MessageScreen = (props) => {
    let chatRef = React.createRef();
    const messagesArray = [
        {
            user: 2,
            messsage: 'How are you?',
            pic: appImages.dummyImg
        },
        {
            user: 2,
            messsage: 'How are you?',
            pic: appImages.dummyImg
        },
        {
            user: 1,
            pic: appImages.chatuser,
            messsage: 'Good'
        },
        {
            user: 1,
            pic: appImages.chatuser,
            messsage: 'Good sdfsdfsdfsdfsdfsdfb  sdgsdf  sdfsdfsdf  dfsdfsdfsdfsdf  sdfsdfsdfsdfsd  sdfsf sdfsdfsdfsdfsdfsdfsdfsdfd'
        },
        {
            user: 2,
            messsage: 'How are youfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff sdfsdfsdf sdfsdf?',
            pic: appImages.dummyImg
        },
        {
            user: 1,
            pic: appImages.chatuser,
            messsage: 'Good sdfsdfsdfsdfsdfsdfb  sdgsdf  sdfsdfsdf  dfsdfsdfsdfsdf  sdfsdfsdfsdfsd  sdfsf sdfsdfsdfsdfsdfsdfsdfsdfd'
        },
        {
            user: 2,
            messsage: 'How are youfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff sdfsdfsdf sdfsdf?',
            pic: appImages.dummyImg
        },
        {
            user: 1,
            pic: appImages.chatuser,
            messsage: 'Good sdfsdfsdfsdfsdfsdfb  sdgsdf  sdfsdfsdf  dfsdfsdfsdfsdf  sdfsdfsdfsdfsd  sdfsf sdfsdfsdfsdfsdfsdfsdfsdfd'
        },
        {
            user: 2,
            messsage: 'How are youfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff sdfsdfsdf sdfsdf?',
            pic: appImages.dummyImg
        },

    ]
    const renderCard = ({ item, index }) => (
        item.user == 2 ?
            <View key={index} style={
                {
                    flexDirection: "row",
                    marginLeft: wp(4),
                    alignItems: "center",
                    marginBottom: wp(6)
                }}>
                <View>

                    <Image resizeMode='contain' style={{ width: wp(8), height: wp(8), borderRadius: wp(15 / 2) }} source={appImages.chatuser} />
                    <Image resizeMode='contain' style={{
                        position: "absolute",
                        width: wp(1.5),
                        height: wp(1.5),
                        top: hp(3),
                        left: wp(6)
                    }} source={appIcons.greendot} />
                </View>
                <View style={
                    {
                        justifyContent: "center",
                        width: wp(76),
                        paddingVertical: hp(1.2),
                        marginLeft: wp(1.5),
                        borderRadius: wp(5),
                        paddingHorizontal: wp(4),
                        backgroundColor: colors.white,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,

                        elevation: 4,
                    }}>
                    <Text style={
                        {
                            color: colors.black,
                            fontFamily: fontFamily.appTextRegular,

                        }}> {item.messsage}</Text>
                </View>
            </View> :
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: wp(6) }}>
                <View style={{
                    justifyContent: "center",
                    // marginTop: hp(4),
                    width: wp(75),
                    marginLeft: wp(4),
                    paddingVertical: hp(1.2),
                    borderRadius: wp(5),
                    paddingHorizontal: wp(4),
                    backgroundColor: colors.white,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,

                    elevation: 4,
                }} >

                    <Text style={
                        {
                            color: colors.black,
                            fontFamily: fontFamily.appTextRegular
                        }}>{item.messsage}</Text></View>
                <View style={{ marginLeft: wp(2) }}>

                    <Image style={{ width: wp(8), height: wp(8) }} source={appImages.dummyImg} />
                    <Image resizeMode='contain' style={{
                        position: "absolute",
                        width: wp(1.5),
                        height: wp(1.5),
                        top: hp(3),
                        left: wp(6)
                    }} source={appIcons.greendot} />
                </View>
            </View>
    )
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <View style={{ marginTop: hp(2) }}>
                <Header chatHeader chatTitle={"Zeeshan Ali"} rightIcon={appIcons.language} leftIcon={appIcons.backArrow} leftIconView />
            </View>
            <View style={{ borderBottomWidth: 1, width: wp(85), alignSelf: "center", borderColor: colors.borderColorLight, marginTop: hp(-1) }}>

            </View>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[{}]}>
                    <View style={
                        {
                            alignSelf: "center",
                            backgroundColor: colors.white,
                            paddingHorizontal: wp(1.5),
                            borderRadius: wp(3),
                            marginTop: hp(1),
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62,

                            elevation: 4,
                        }}>
                        <Text style={{ color: colors.black, fontSize: 12, fontFamily: fontFamily.appTextRegular }}>Sep 12, 2020</Text>
                    </View>
                    <View style={{}}>
                        <AutoScrollFlatList
                            ref={chatRef}
                            threshold={10}
                            data={messagesArray}
                            renderItem={renderCard}
                            keyExtractor={item => item.id}
                        />
                    </View>

                </View>

            </KeyboardAwareScrollView>
            <View style={
                {

                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: wp(4),
                    marginBottom: hp(1),

                }}>
                <View style={{
                    flexDirection: "row",
                    borderRadius: wp(7),
                    paddingHorizontal: wp(2),
                    height: hp(5),
                    backgroundColor: colors.white,
                    //  
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,

                    elevation: 4,


                }}>
                    <TextInput style={{
                        width: wp(60),
                        fontSize: 12,
                        fontFamily: fontFamily.appTextRegular,
                        color: colors.black

                    }} placeholder={"Type a message"}
                        placeholderTextColor={colors.dateColor}
                    />
                    <View style={
                        { flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
                        <TouchableOpacity>

                            <Image resizeMode='contain' source={appIcons.attach} style={{
                                width: wp(4.5),
                                height: wp(4.5)
                            }} />
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <Image resizeMode='contain' source={appIcons.cameraIcon} style={{
                                width: wp(6),
                                height: wp(6),
                                marginLeft: wp(4)

                            }} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={
                    {
                        backgroundColor: colors.white,
                        alignItems: "center",
                        justifyContent: "center",

                        width: wp(10),
                        height: hp(5),
                        //paddingHorizontal: wp(2),
                        //paddingVertical: hp(1),
                        borderRadius: wp(4),
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,
                        elevation: 4,
                    }}>
                    <TouchableOpacity>
                        <Image resizeMode='contain' source={appIcons.send} style={{
                            width: wp(5),
                            height: wp(5),
                            left: wp(.2)

                        }} />

                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MessageScreen