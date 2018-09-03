import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Button, Text, Form, Item } from 'native-base';
import {estilo_global} from "../../css/style_global";
import { NavigationOptions } from "../../global_components/NavigationOptions";

import firebase from 'react-native-firebase';

export default class Cadastro extends Component{

    render() {
        return (
            <Container>
                <NavigationOptions titulo={"Foodex"}/>
                <Content padder contentContainerStyle={estilo.principal}>
                    <Image source={require('../../../assets/logofoodex.png')} style={estilo.logo}/>
                    <Form>
                        <Item floatingLabel>
                            <Text>Seu email foi confirmado com sucesso!</Text>
                        </Item>
                    </Form>
                    <br></br>
                    <h1>Continuar cadastro</h1>
                    <Button onclick="window.location.href='/perfilFornecedor';" full style={estilo.botao}>
                        <Text>PRÓXIMO</Text>
                    </Button>
                </Content>
            </Container>

        )

    }
}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));