import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator()
export class SkilledHomeStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.skilledHome} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.skilledHome} component={App.SkilledHome} />
            </MyStack.Navigator>
        )
    }
}
