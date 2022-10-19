import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { appIcons, colors, fontFamily, hp, routes, wp } from '../../services'

const SearchFilter = (props) => {
    return (
        <View style={styles.searchView}>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                placeholderTextColor={colors.greyDark}
                style={styles.textInputStyle} />
            <TouchableOpacity onPress={() => props.navigation.navigate(routes.filter)}>
                <Image resizeMode='contain' source={appIcons.filter} style={styles.filterImage} />
            </TouchableOpacity>
        </View>
    )
}
export default SearchFilter

const styles = StyleSheet.create({
    searchView: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: wp(4),
        alignSelf: "center",
        borderRadius: wp(8),
        height: hp(5.5),
        width: wp(90),
        backgroundColor: colors.whitish
    },
    textInputStyle: {
        flex: 1,
        color: colors.black,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 13
    },
    filterImage: {
        width: wp(5.5),
        height: wp(5.5)
    },
})