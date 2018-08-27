import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';

import firebase from 'react-native-firebase';

export default class Cadastro extends Component{

    static navigationOptions = {
        header: (
            <Header style={ {'backgroundColor' : '#f78f03'}} androidStatusBarColor={'#BF6B03'}>
                <Left/>
                <Body>
                <Title>FoodEx+</Title>
                </Body>
                <Right />
            </Header>
        )
    };

    render() {
        return (
            <Container>
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

const estilo = StyleSheet.create({
    header:{
        backgroundColor: '#f78f03'
    },

    principal:{
        backgroundColor: 'white'
    },

    entrada:{
        width: 300,
        height: 40,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 10
    },

    botao:{
        backgroundColor: '#f78f03',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    }
});