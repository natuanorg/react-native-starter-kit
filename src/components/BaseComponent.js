import React, {Component} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {View} from 'react-native';

export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: false, refreshing: false}
    }

    render() {
        return (
            <View style={{height:'100%', width:'100%'}}>
                <Spinner visible={this.state.loading}/>
                {this.renderView()}
            </View>
        );
    }

    renderView(){
        throw new Error('You have to implement the method renderView!');
    };

    componentWillUnmount() {
        this.setState({loading: false});
    }
};