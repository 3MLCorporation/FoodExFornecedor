import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import {estilo_global} from "../../css/style_global";
import {NavigationOptions} from "../../global_components/NavigationOptions";

import firebase from 'react-native-firebase';

export default class Cadastro extends Component{

    constructor() {
        super(props);
        this.ref = firebase.firestore().collection('fornecedores');
        this.state = {
            name: '',
            desc: '',
        };
    }

    _updateName = name => {
        this.setState({ name });
    };

    _updateDesc = desc => {
        this.setState({ desc });
    };

    render() {
        return (
            <Container>
                <NavigationOptions titulo="Foodex"/>
                <Content padder contentContainerStyle={estilo.principal}>
                    <Image source={require('../../../assets/imageupload.jpg')} style={estilo.logo}/>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nome do estabelecimento</Label>
                            <Input onChangeText={this._updateName}
                                   value={this.state.name}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Descrição</Label>
                            <Input onChangeText={this._updateDesc}
                                   value={this.state.desc}/>
                        </Item>
                    </Form>
                    <br/>
                    <Button onclick="window.location.href='/confirmacaoEmail';" full style={estilo.botao}>
                        <Text>ANTERIOR</Text>
                    </Button>
                    <Button onclick="window.location.href='/formaPagamento';" full style={estilo.botao}>
                        <Text>PRÓXIMO</Text>
                    </Button>
                </Content>
            </Container>

        )

    }
}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));