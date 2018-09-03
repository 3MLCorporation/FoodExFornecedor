import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base';
import {estilo_global} from "../../css/style_global";


export class NavigationOptions extends component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <Header style={estilo.header}>
                <Left/>
                <Body>
                <Title>props.titulo</Title>
                </Body>
                <Right />
            </Header>
        )
    }

}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));