import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';

import firebase from 'react-native-firebase';

class Principal extends Component{

    static navigationOptions = {
        header: (
            <Header style={ {'backgroundColor' : '#f78f03'}} androidStatusBarColor={'#BF6B03'}>
                <Left/>
                <Body>
                <Title>Principal</Title>
                </Body>
                <Right />
            </Header>
        )
    };

    constructor() {
        super();
        this.state = {
            fornecedor : ''
        };
    }

    componentWillMount(){
        const email = firebase.auth().currentUser.email;
        console.log('Email do usuario logado: ', email);
        const f = firebase.firestore().collection('fornecedores').doc(email).get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    console.log('Document data:', doc.data());
                    this.setState({
                        fornecedor: doc.data()
                    });
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }

    _logout = () => {
        firebase.auth().signOut()
            .catch((error) => {
                console.error(error);
            });
    };

    render(){
        return(
            <Container>
                <Content padder>
                    <Text> Hello, {this.state.fornecedor.nome}  </Text>
                    <Text> CPF: {this.state.fornecedor.cpf} </Text>
                    <Button onPress={this._logout}>
                        <Text>
                            Logout
                        </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Principal;