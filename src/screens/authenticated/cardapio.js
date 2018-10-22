import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import { StyleSheet, Image} from 'react-native';
import firebase from 'react-native-firebase';
import {estilo_global} from "../../css/style_global";
import {estilo_perfil} from "../../css/perfil";

export default class Cardapio extends Component{



    constructor() {
        super();
        this.ref = firebase.firestore().collection('fornecedores');
        this.state = {
            fornecedor : ''
        };
    }

    componentWillMount() {
        const {user} = this.props.navigation.state.params;
        this.ref.doc(user.uid).collection('cardapio').get()
            .then(querySnapshot => {
                if (querySnapshot.empty) {
                    console.log('No such document!');
                } else {
                    let cardapio = [];
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, " => ", doc.data());
                        const {nome} = doc.data();

                        this.ref.doc(user.uid).collection('cardapio').doc(doc.id).collection('itens').get()
                            .then(querySnapshot => {
                                let categoria = {
                                    nome: nome
                                };
                            })
                            .catch(err => {
                                console.log('Error getting document', err);
                            });


                        cardapio.push(

                        );

                    });
                    this.setState({
                        cardapio: cardapio
                    });
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }

    _cadastrarCategoria = () => {
        const {user} = this.props.navigation.state.params;
        user.name = this.state.name;
        user.desc = this.state.desc;
        console.log('User - cadastrarCategoria  ' + user);
        this.props.navigation.navigate('CadastrarCategoria', { user: user});
    };

    render(){
        const cardapio = this.state.cardapio;
        const isEmpty = this.state.cardapio.length <= 0;
        return(
            <Container>
                <Content padder contentContainerStyle={estilo.principal}>
                    {isEmpty ? (
                        <Button onPress={this._cadastrarCategoria} full style={estilo.botao}>
                            <Text>Cadastrar categoria</Text>
                        </Button>
                    ) : (
                        <Text> Lista </Text>
                    )}
                </Content>
            </Container>
        )
    }

}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, estilo_perfil, {}));