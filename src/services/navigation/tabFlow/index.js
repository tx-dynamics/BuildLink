import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ChatStack } from '../appFlow/ChatStack'
import { HomeStack } from '../appFlow/homeStack'
import { CalendarStack } from '../appFlow/CalendarStack'
import { ProfileStack } from '../appFlow/profileStack'
import { appIcons, colors } from '../../utilities'
import { hp, wp } from '../../constants'

const Tab = createBottomTabNavigator()

const tabArray = [
    { route: 'Homee', icon: appIcons.home, component: HomeStack, color: colors.theme },
    { route: 'Calendarr', icon: appIcons.calendar, component: CalendarStack, color: colors.theme },
    { route: 'Chatt', icon: appIcons.chat, component: ChatStack, color: colors.theme },
    { route: 'Profilee', icon: appIcons.profile, component: ProfileStack, color: colors.theme },
]

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props
    const focused = accessibilityState.selected
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container]}>
            <View style={[styles.btn]}>
                <Image source={item.icon} style={[styles.tabIcon, { tintColor: focused ? colors.theme : colors.greyDark }]} />
            </View>
        </TouchableOpacity>
    )
}

export function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.barStyle
            }}>
            {tabArray.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    barStyle: {
        backgroundColor: colors.white,
        height: hp(6.8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIcon: {
        width: wp(5.5),
        height: wp(5.5),
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
    },
})

