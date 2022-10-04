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
                <MyStack.Screen name={routes.requestDetail} component={App.RequestDetail} />
                <MyStack.Screen name={routes.category} component={App.CategoryScreen} />
                <MyStack.Screen name={routes.filter} component={App.FilterScreen} />

            </MyStack.Navigator>
        )
    }
}
