import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import {estilo_global} from "../../css/style_global";
import {NavigationOptionsDeslog} from "../../global_components/NavigationOptionsDeslog";

export default class Cadastro extends Component{

    render() {
        return (
            <Container>
                <NavigationOptionsDeslog titulo="Foodex"/>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Formas de pagamento</Title>
                    </Body>
                </Header>
                <Content padder contentContainerStyle={estilo.principal}>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Body>
                        <Text>Cartão de crédito</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox />
                        <Body>
                        <Text>PagSeguro</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox />
                        <Body>
                        <Text>À vista / no dinheiro</Text>
                        </Body>
                    </ListItem>
                    <br/>
                    <Button onclick="window.location.href='/perfilFornecedor';" full style={estilo.botao}>
                        <Text>ANTERIOR</Text>
                    </Button>
                    <Button onclick="window.location.href='/cadastroFinalizado';" full style={estilo.botao}>
                        <Text>PRÓXIMO</Text>
                    </Button>
                    <Button transparent dark onclick="window.location.href='/cadastroFinalizado';">
                        <Text>Pular etapa</Text>
                    </Button>
                </Content>
            </Container>

        )

    }
}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));