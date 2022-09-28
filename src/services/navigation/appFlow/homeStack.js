import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator()
export class HomeStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.homeScreen} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.homeScreen} component={App.HomeScreen} />
            </MyStack.Navigator>
        )
    }
}
