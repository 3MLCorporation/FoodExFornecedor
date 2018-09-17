import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Button, Text, Form, Item } from 'native-base';
import {estilo_global} from "../../css/style_global";
import { NavigationOptionsDeslog } from "../../global_components/NavigationOptionsDeslog";

export default class Cadastro extends Component{

    render() {
        return (
            <Container>
                <NavigationOptionsDeslog titulo={"Foodex"}/>
                <Content padder contentContainerStyle={estilo.principal}>
                    <Image source={require('../../../assets/logofoodex.png')} style={estilo.logo}/>
                    <Form>
                        <Item floatingLabel>
                            <Text>VOCÊ FOI CADASTRADO COM SUCESSO!</Text>
                        </Item>
                    </Form>
                    <br/>
                    <Button full style={estilo.botao}>
                        <Text>FINALIZAR</Text>
                    </Button>
                </Content>
            </Container>

        )

    }
}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));