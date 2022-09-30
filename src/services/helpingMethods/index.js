import { Platform, PermissionsAndroid } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeDataToStorage = async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
}

export const removeDataFromStorage = async (key) => {
    await AsyncStorage.removeItem(key)
}

export const getDataFromStorage = async (value) => {
    let data = await AsyncStorage.getItem(value)
    let newData = JSON.parse(data)
    return newData
}

export async function getLocationPermission() {
    let response = false;
    if (Platform.OS === 'ios') {
        Geolocation.setRNConfiguration({
            skipPermissionRequests: false,
            authorizationLevel: 'always',
        });
        Geolocation.requestAuthorization();
        response = true;
    } else {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Pinolo',
                    message:
                        'Pinolo wants to access your device location to track your current location upadtes.',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const grantedBackground = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
                    {
                        title: 'Pinolo',
                        message:
                            'Pinolo wants to access your device location to track your live location updates, even when the app is closed or not in use,',
                    },
                );
                response = true;
            } else {
                alert(
                    'Location permission denied, you cannot use location features in the application. Please enable from settings location to view location based services.',
                );
            }
        } catch (err) {
            // alert(err);
        }
    }
    return response;
}

export const getDateTime = (value) => {
    const data = value.toString()
    const date = data.slice(8, 10)
    const month = data.slice(4, 7)
    const year = data.slice(20, 24)
    const time1 = data.slice(11, 16)
    const time = time1.slice(0, 2)
    const mint = time > 12 ? (time - 12) : time1
    const zone = time > 12 ? 'Pm' : 'Am'
    const sec = time1.slice(3, 5)
    const finalDate = `${date}, ${month} ${year} , ${mint}:${sec} ${zone}`
    return finalDate
}
