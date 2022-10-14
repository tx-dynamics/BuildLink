import React from 'react'
import { View, SafeAreaView, StatusBar, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import { AutoScrollFlatList } from 'react-native-autoscroll-flatlist';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from '../../../components';

import { appIcons, appImages, colors, fontFamily, hp, wp } from '../../../services'
import appStyles from '../../../services/utilities/appStyles'
import { styles } from './styles';

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
            <View key={index} style={styles.renderCardMainView}>
                <View>
                    <Image resizeMode='contain' style={styles.senderImage} source={appImages.chatuser} />
                    <Image resizeMode='contain' style={styles.greenDot} source={appIcons.greendot} />
                </View>
                <View style={styles.messageView}>
                    <Text style={styles.messageText}>{item.messsage}</Text>
                </View>
            </View> :
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: wp(6) }}>
                <View style={styles.view1} >
                    <Text style={styles.text1}>{item.messsage}</Text></View>
                <View style={styles.receiverView}>
                    <Image style={styles.receiverImage} source={appImages.dummyImg} />
                    <Image resizeMode='contain' style={styles.receiverGreenDot} source={appIcons.greendot} />
                </View>
            </View>
    )
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <View style={styles.marginTopView}>
                <Header onPress={() => props.navigation.goBack()} chatHeader chatTitle={"Zeeshan Ali"} rightIcon={appIcons.language} leftIcon={appIcons.backArrow} leftIconView />
            </View>
            <View style={styles.borderView}></View>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[{}]}>
                    <View style={styles.dateView}>
                        <Text style={styles.dateText}>Sep 12, 2020</Text>
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
            <View style={styles.bottomView}>
                <View style={styles.bottomView2}>
                    <TextInput style={styles.textInputStyle} placeholder={"Type a message"} placeholderTextColor={colors.dateColor} />
                    <View style={styles.iconView}>
                        <TouchableOpacity>
                            <Image resizeMode='contain' source={appIcons.attach} style={styles.attachIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode='contain' source={appIcons.cameraIcon} style={styles.cameraIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sendButtonView}>
                    <TouchableOpacity>
                        <Image resizeMode='contain' source={appIcons.send} style={styles.sendImage} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default MessageScreen