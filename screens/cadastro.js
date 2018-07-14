import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';

import firebase from 'react-native-firebase';

export default class cadastro extends Component{
	render() {
        return (
            <Container>
                <Header style={estilo.header}>
                    <Left/>
                    <Body>
                        <Title>FoodEx+</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder contentContainerStyle={estilo.principal}>

                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>CPF</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Nome do Estabelecimento</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Senha</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Confirmar Senha</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                    </Form>

                <Button full style={estilo.botao}>
                    <Text>CADASTRAR</Text>
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
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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