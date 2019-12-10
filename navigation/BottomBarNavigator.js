import React from "react";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Screens
import HomeScreen from "../screens/HomeScreen";
import CameraScreen from "../screens/CameraScreen";
import FingerprintScreen from "../screens/FingerprintScreen";

const BottomBarNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen
    },
    Camera: {
        screen: CameraScreen
    },
    Fingerprint: {
        screen: FingerprintScreen
    },
});

export default createAppContainer(BottomBarNavigator)
