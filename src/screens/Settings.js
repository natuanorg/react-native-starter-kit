import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Settings extends Component {

    static navigationOptions = {
        title: 'Cài đặt',
        drawerLabel: 'Cài đặt',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Cài đặt</Text>
            </View>
        );
    }
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});