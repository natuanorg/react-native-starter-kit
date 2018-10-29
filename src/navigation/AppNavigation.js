import React from 'react';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from "../screens/Home";
import Splash from "../screens/Splash";
import SignIn from "../screens/SignIn";
import Settings from "../screens/Settings";
import DrawerMenu from "../components/DrawerMenu";

const SplashStack = createSwitchNavigator({
    Splash: Splash,
    SignIn: SignIn
},{
    initialRouteName: 'Splash'
});

const HomeStack = createStackNavigator({
    Home: Home
});

const SettingsStack = createStackNavigator({
    Settings: Settings
});

const MainStack = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    Settings: {
        screen: SettingsStack
    }
},{
    contentComponent: DrawerMenu,
    drawerWidth: 300
});

export const AppNavigation = createSwitchNavigator(
    {
        Splash: SplashStack,
        Main: MainStack,
    },
    {
        initialRouteName: 'Splash',
        navigationOptions: {
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);