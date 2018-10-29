import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class ItemSeparator extends Component {
    render(){
        return (
            <View style={styles.separator}></View>
        )
    }
}

let styles = StyleSheet.create({
    separator: {
        height: 0.5,
        backgroundColor: '#ccc'
    }
});