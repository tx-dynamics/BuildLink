import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'
import ImagePicker from 'react-native-image-crop-picker';

import appStyles from '../../../services/utilities/appStyles'
import { appIcons, colors, hp, routes, wp, } from '../../../services'
import { Button, Header, Input } from '../../../components'
import { styles } from './styles'
import SubscriptionModal from '../../../components/subscriptionmodal';

const SkilledApply = (props) => {
    const [countryCode, setCountryCode] = useState('PK')
    const [country, setCountry] = useState({ callingCode: ['+92'] })
    const [withFilter, setWithFilter] = useState(true)
    const [skillPic, setSkillPic] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
    }
    const ImageComponent = (props) => {
        return (
            skillPic.length !== 0 ?
                <Image resizeMode='contain' source={props.source} style={styles.skilledPic} /> : null
        )
    }
    const imageSelect = () => ImagePicker.openPicker({
        width: 200,
        height: 300,
        cropping: true
    }).then(image => {
        let temp = Object.assign([], skillPic);
        temp.push({
            pic: image.path
        })
        setSkillPic(temp)
    });
    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header leftIconPadding={wp(1.2)} title={'Apply'} leftIconView leftIcon={appIcons.backArrow} onPress={() => props.navigation.goBack()} />
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <SubscriptionModal btnPress={() => { setModalVisible(false) }} skipPress={() => { setRequestVisible(true), setModalVisible(false) }} />
            </Modal>
            <View style={[appStyles.flex1, styles.paddingView]}>
                <View style={{ marginTop: hp(2.5) }}>
                    <Input placeholder={"Enter your name"} containerStyle={styles.nameTextInput} titleStyle={styles.titleText} >Name</Input>
                    <Text style={styles.phoneText}>Phone Number</Text>
                    <View style={styles.subView}>
                        <View style={styles.countryPickerView}>
                            <>
                                <CountryPicker
                                    theme={styles.themeView}
                                    {...{
                                        countryCode,
                                        withFilter,
                                        withFlagButton: true,
                                        onSelect,
                                        withCallingCodeButton: true,
                                    }}
                                    visible={false}
                                />
                            </>
                            <Image resizeMode='contain' source={appIcons.arrowDown} style={styles.dropDownImg} />
                        </View>
                        <Input placeholder={"Type"} containerStyle={styles.typeInputView} titleStyle={styles.titleText} ></Input>
                    </View>
                    <Input placeholder={"Enter your location"} gps onPressGps={() => props.navigation.navigate(routes.maps)} containerStyle={styles.locationInput} titleStyle={styles.titleText} >Adress</Input>
                    <Input placeholder={"Explain your skill"} containerStyle={styles.locationInput} titleStyle={styles.titleText} >About you</Input>
                    <Text style={styles.yourWorkText}>Your Work</Text>
                    <View style={{ marginTop: hp(1) }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={skillPic}
                            horizontal
                            ListFooterComponent={({ item }) =>
                                <TouchableOpacity onPress={() => imageSelect()} ><Image resizeMode='contain' source={appIcons.addImage} style={styles.addImg} /></TouchableOpacity >}
                            renderItem={({ item }) => <ImageComponent source={{ uri: item.pic }} />}
                        />
                    </View>
                    <View style={styles.btnView}>
                        <Button onPress={() => setModalVisible(true)} style={{ fontSize: 14 }} containerStyle={styles.btnContainerView} >Apply</Button>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}
export default SkilledApply
