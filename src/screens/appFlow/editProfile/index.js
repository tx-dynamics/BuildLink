import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button, Header, Input } from '../../../components';
import { appIcons, colors } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'

const EditProfile = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Edit Profile'} leftIcon={appIcons.backArrow} onPress={() => navigation.goBack()} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={styles.container}>
                    <Input placeholder={"Jeff Vanah"} value={name} onChangeText={(text) => setName(text)} containerStyle={styles.inputContainerStyle} inputStyle={styles.inputTextStyle}>Name</Input>
                    <Input placeholder={"Jeff169@gmail.com"} value={email} onChangeText={(text) => setEmail(text)} containerStyle={styles.inputContainerStyle} inputStyle={styles.inputTextStyle}>Email</Input>
                    <Input placeholder={"Password"} secureTextEntry value={password} onChangeText={(text) => setPassword(text)} containerStyle={styles.inputContainerStyle} inputStyle={styles.inputTextStyle}>Password</Input>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Button onPress={() => navigation.goBack()} containerStyle={styles.buttonContainerStyle}>Update</Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default EditProfile