import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator()
export class SkilledCommunityStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.community} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.community} component={App.CommunityScreen} />
            </MyStack.Navigator>
        )
    }
}
