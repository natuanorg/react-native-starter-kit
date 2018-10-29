import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import authStore from '../store/authStore';
import BaseComponent from "../components/BaseComponent";

export default class SignIn extends BaseComponent {

    static navigationOptions = {
        title: 'Đăng nhập'
    }

    renderView() {
        return (
            <View style={styles.container}>
                <Button title='Đăng nhập' onPress={() => {
                    this.setState({loading: true});
                    setTimeout(async () => {
                        const result = await authStore.login();
                        this.setState({loading: false});
                        result ? this.props.navigation.navigate('Home') : alert('Đăng nhập thất bại');
                    }, 1000);
                }}/>
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