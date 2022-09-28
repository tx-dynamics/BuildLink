import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, } from '@react-navigation/native'
import { AuthNavigation } from './authFlow'
import { routes } from '../constants';

import { TabNavigator } from './tabFlow/index'

const MyStack = createStackNavigator()
export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <MyStack.Navigator initialRouteName={routes.auth} screenOptions={{ headerShown: false, }}>
                <MyStack.Screen name={routes.auth} component={AuthNavigation} />
                <MyStack.Screen name={routes.tab} component={TabNavigator} />
            </MyStack.Navigator>
        </NavigationContainer>
    )
}
