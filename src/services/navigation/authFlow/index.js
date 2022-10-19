import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { routes } from '../../constants';
import * as Auth from '../../../screens/authFlow';

const AuthStack = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName={routes.splash} screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name={routes.splash} component={Auth.Splash} />
            <AuthStack.Screen name={routes.login} component={Auth.Signin} />
            <AuthStack.Screen name={routes.signup} component={Auth.Signup} />
            <AuthStack.Screen name={routes.onboarding} component={Auth.Onboarding} />
            <AuthStack.Screen name={routes.accountSelection} component={Auth.AccountSelection} />
            <AuthStack.Screen name={routes.verification} component={Auth.Verification} />
            <AuthStack.Screen name={routes.confirmPhone} component={Auth.ConfirmPhone} />
        </AuthStack.Navigator>
    )
}
