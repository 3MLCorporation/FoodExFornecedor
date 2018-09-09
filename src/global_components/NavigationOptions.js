import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Header, Left, Body, Right, Title} from 'native-base';
import {estilo_global} from "../css/style_global";


export class NavigationOptions extends Component {
    constructor(props) {
        super(props);
        //this.

    }

    render () {
        return (
                <Header style={estilo.header}  androidStatusBarColor='#BF6B03'>
                    <Left/>
                    <Body>
                    <Title>FoodEx+</Title>
                    </Body>
                    <Right />
                </Header>
        )
    }

}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));