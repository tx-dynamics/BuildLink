import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator()
export class ProfileStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.profileScreen} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.profileScreen} component={App.ProfileScreen} />
                <MyStack.Screen name={routes.editProfile} component={App.EditProfile} />
                <MyStack.Screen name={routes.requestDetail} component={App.RequestDetail} />
                <MyStack.Screen name={routes.paymentMathod} component={App.PaymentMethod} />
                <MyStack.Screen name={routes.skilledProfile} component={App.SkilledProfile} />
                <MyStack.Screen name={routes.notification} component={App.NotificationScreen} />
            </MyStack.Navigator>
        )
    }
}
