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
        const user = firebase.auth().currentUser;
        console.log('Email do usuario logado: ', user.email);
        firebase.firestore().collection('fornecedores').doc(user.uid).get()
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
                    <Text> Hello, {this.state.fornecedor.name}  </Text>
                    <Text> CPF: {this.state.fornecedor.cpf} </Text>
                    <Text> Descrição: {this.state.fornecedor.description}  </Text>
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