import { Dimensions } from "react-native"
const { width, height } = Dimensions.get('window');

export const wp = (p) => width * (p / 100);
export const hp = (p) => height * (p / 100);

export const baseURL = ''
export const endPoints = {
    login: 'login',
    courses: 'rooms',
    classes: 'classes',
}
export const routes = {
    auth: 'auth',
    tab: 'TabNavigator',
    app: 'app',
    splash: 'splash',
    login: 'login',
    signup: 'signup',
    confirmPhone: 'confirmPhone',
    verification: 'verification',
    onboarding: 'onboarding',
    homeScreen: 'homeScreen',
    profileScreen: 'profileScreen',
    calandarScreen: 'calandarScreen',
    chatScreen: 'chatScreen',
    editProfile: 'editProfile',
    requestDetail: 'requestDetail',
    message: "message",
    category: "category",
    filter: "filter",
    serviceProvider: "serviceProvider",
    maps: "maps",
    paymentMathod: "paymentMathod",
    searchResult: "searchResult",
    reviewFilter: "reviewFilter",
    plans: "plans"


}

export const loaderStyles = {
    CircleFlip: 'CircleFlip',
    Bounce: 'Bounce',
    Wave: 'Wave',
    WanderingCubes: 'WanderingCubes',
    Pulse: 'Pulse',
    ChasingDots: 'ChasingDots',
    ThreeBounce: 'ThreeBounce',
    Circle: 'Circle',
    CubeGrid: '9CubeGrid',
    WordPress: 'WordPress',
    FadingCircle: 'FadingCircle',
    FadingCircleAlt: 'FadingCircleAlt',
    Arc: 'Arc',
}
