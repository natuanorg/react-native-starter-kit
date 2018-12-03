import React from 'react';
import {
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import DrawerMenu from "../components/DrawerMenu";

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

export const AppNavigation = createAppContainer(
    createSwitchNavigator(
        {
            Main: MainStack,
        },
        {
            initialRouteName: 'Main',
            navigationOptions: {
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        }
    )
);