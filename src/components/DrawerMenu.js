import React, {Component} from 'react';
import {Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import NavigationService from '../navigation/Navigator';

export default class DrawerMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            screens: [
                {router: 'Home', name: 'Trang chủ'},
                {router: 'Settings', name: 'Cài đặt'}
            ]
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                <FlatList
                    data={this.state.screens}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.router}
                />
            </SafeAreaView>
        );
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.menuItem} onPress={() => this.onItemPress({item})}>
                <Text style={styles.menuText}>{item.name}</Text>
            </TouchableOpacity>
        )
    };
    onItemPress = ({item}) => {
        NavigationService.navigate(item.router);
    }
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuItem: {
        padding: 12,
        flex: 1,
        justifyContent: 'center',
    },
    menuText: {
        color: 'black',
        fontWeight: 'bold'
    }
});