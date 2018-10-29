import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import { observer, inject } from 'mobx-react';
import authStore from "../store/authStore";

@observer
export default class Splash extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        authStore.setUser(await authStore.loadFromStore());
        const isAuthenticated = authStore.isAuthenticated;
        console.log(`isAuthenticated: ${isAuthenticated}`);
        isAuthenticated ? this.props.navigation.navigate('Home')
            : this.props.navigation.navigate('SignIn');
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
            </View>
        );
    }
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    }
});
