import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator()
export class ChatStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.chatScreen} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.chatScreen} component={App.ChatScreen} />
                <MyStack.Screen name={routes.message} component={App.MessageScreen} />
            </MyStack.Navigator>
        )
    }
}


