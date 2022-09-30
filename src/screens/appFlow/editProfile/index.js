import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button, Header, Input } from '../../../components';
import { appIcons, colors } from '../../../services'
import { styles } from './styles';
import appStyles from '../../../services/utilities/appStyles'

const EditProfile = ({ navigation }) => {
    const [name, setName] = useState('Jeff Vanah')
    const [email, setEmail] = useState('Jeff169@gmail.com')
    const [password, setPassword] = useState('123123123')

    return (
        <SafeAreaView style={[appStyles.safeContainer]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Edit Profile'} leftIcon={appIcons.backArrow} onPress={() => navigation.goBack()} />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={appStyles.scrollContainer}>
                <View style={styles.container}>
                    <Input value={name} onChangeText={(text) => setName(text)} containerStyle={styles.inputContainerStyle} inputStyle={styles.inputTextStyle}>Name</Input>
                    <Input value={email} onChangeText={(text) => setEmail(text)} containerStyle={styles.inputContainerStyle} inputStyle={styles.inputTextStyle}>Email</Input>
                    <Input secureTextEntry value={password} onChangeText={(text) => setPassword(text)} containerStyle={styles.inputContainerStyle} inputStyle={styles.inputTextStyle}>Password</Input>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Button onPress={() => navigation.goBack()} containerStyle={styles.buttonContainerStyle}>Update</Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default EditProfile