import { FlatList, Image, Modal, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import appStyles from '../../../services/utilities/appStyles'
import { appIcons, colors, fontFamily, hp, routes, wp, } from '../../../services'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, Header, Input } from '../../../components'
import { styles } from './styles'

const PaymentMethod = ({ navigation }) => {
    const [isIndex, setIsIndex] = useState(null)
    const [requestVisible, setRequestVisible] = useState(false)
    const data = [
        {
            pic: appIcons.card,
            text: "Credit or Debit Card"
        },
        {
            pic: appIcons.paypal,
            text: "PayPal"
        },
        {
            pic: appIcons.googlepay,
            text: "Google Pay"
        },
        {
            pic: appIcons.applepay,
            text: "Apple Pay"
        },
    ]
    const RenderPayment = (props) => {
        return (
            <TouchableOpacity onPress={props.onPress} style={[styles.mainView, {
                shadowColor: props.tick ? colors.theme : 0,
                shadowOffset: {
                    width: 0,
                    height: props.tick ? 1 : 0,
                },
                shadowOpacity: props.tick ? 0.27 : 0,
                shadowRadius: props.tick ? 4.65 : 0,
                elevation: props.tick ? 8 : 0,
            }]}>
                <View style={[appStyles.row]}>
                    <Image resizeMode='contain' source={props.source} style={styles.cardImage} />
                    <Text style={styles.paymentText}>{props.text}</Text>
                </View>
                {
                    props.tick &&
                    <Image resizeMode='contain' source={appIcons.greenTick} style={styles.greenTick} />
                }
            </TouchableOpacity>
        )
    }
    const RequestSendModal = (props) => {
        return (
            <View style={{
                backgroundColor: 100,
                justifyContent: "center",
                alignItems: "center",
                flex: 1
            }}><KeyboardAwareScrollView  >
                    <View style={{
                        width: wp(80),
                        backgroundColor: "white",
                        alignItems: "center",
                        paddingHorizontal: wp(7),
                        borderRadius: wp(5),
                        paddingVertical: hp(15),
                        marginTop: hp(22)

                    }}>
                        <Image resizeMode='contain' source={appIcons.subscriptionIcon} style={{
                            width: wp(25),
                            height: wp(25)
                        }} />
                        <View style={{
                            marginTop: hp(5),
                            alignItems: "center"
                        }}>

                            <Text style={{ fontSize: 17, color: colors.black, fontFamily: fontFamily.appTextBold }}>Subscription Successfull</Text>
                            <Text style={{ color: colors.blackLight, textAlign: "center", marginTop: hp(2) }}>You have succesfully sibscribed to the
                                Buildlink community. Enjoy extra features and
                                stay updated.</Text>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Choose Payment Method'} leftIcon={appIcons.backArrow} onPress={() => navigation.goBack()} />
            <Modal
                animationType="none"
                transparent={true}
                visible={requestVisible}
                onRequestClose={() => {
                    setRequestVisible(!requestVisible);
                }}>
                <RequestSendModal onPress={() => { navigation.navigate(routes.homeScreen), setRequestVisible(false) }} />
            </Modal>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={[appStyles.flex1, { marginBottom: hp(2) }]}>
                    <View>
                        <FlatList
                            style={{ marginTop: hp(2) }}
                            data={data}
                            renderItem={({ item, index }) => <RenderPayment
                                source={item.pic}
                                text={item.text}
                                onPress={() => setIsIndex(index)}
                                tick={isIndex == index ? true : false}
                            />} />
                    </View>
                    <Text style={styles.addDetailText}>Add Details</Text>
                    <View style={[appStyles.aiCenter]}>
                        <Input containerStyle={styles.inputContainerStyle} titleStyle={styles.titleStyle} placeholder={"Write full name"} keyboardType={'name-phone-pad'} >Name</Input>
                        <Input containerStyle={styles.inputContainerStyle} titleStyle={styles.titleStyle} placeholder={"Type Card Number"} keyboardType={'number-pad'} >Card Number</Input>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.widthView}>
                            <Input inputStyle={styles.dateInput}
                                containerStyle={styles.dateContainer}
                                titleStyle={styles.dateTitle}
                                placeholder={"MM:YY"} keyboardType={'number-pad'} >Issue Date</Input>
                        </View>
                        <View style={styles.widthView}>
                            <Input inputStyle={styles.dateInput} containerStyle={styles.dateContainer} titleStyle={styles.dateTitle} placeholder={"MM:YY"} keyboardType={'number-pad'} >Expiry Date</Input>
                        </View>
                    </View>
                    <View style={[appStyles.aiCenter]}>
                        <Input containerStyle={styles.inputContainerStyle} titleStyle={styles.titleStyle} placeholder={"---"} keyboardType={'number-pad'} >CCV</Input>
                    </View>
                    <View style={styles.btnStyle}>
                        <Button onPress={() => setRequestVisible(true)} style={{ fontSize: 13 }} >Subscribe</Button>
                    </View>
                </View>


            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default PaymentMethod

