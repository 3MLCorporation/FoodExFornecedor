import React, { Component } from 'react';
import { StyleSheet, Image} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';

import firebase from 'react-native-firebase';

export default class Login extends Component{
	render() {
		return (
            <Container >
                <Header style={estilo.header}>
					<Left/>
					<Body>
						<Title>FoodEx+</Title>
					</Body>
					<Right />
                </Header>

                <Content padder contentContainerStyle={estilo.principal}>

					<Image source={require('../assets/logofoodex.png')} style={estilo.logo}/>

                    <Form >
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Senha</Label>
                            <Input />
                        </Item>
                    </Form>

					<Button transparent dark>
						<Text>Esqueceu a sua senha?</Text>
					</Button>

					<Button full style={estilo.botao}>
						<Text>LOGIN</Text>
					</Button>

					<Button transparent dark>
						<Text>Não tem uma conta? CADASTRE-SE</Text>
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

    logo:{
        width: 250,
        height: 200,
        margin: 20
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

	}

});