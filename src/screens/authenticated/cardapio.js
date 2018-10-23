import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label, List, ListItem } from 'native-base';
import { StyleSheet, Image} from 'react-native';
import firebase from 'react-native-firebase';
import {estilo_global} from "../../css/style_global";
import {estilo_perfil} from "../../css/perfil";

export default class Cardapio extends Component{



    constructor() {
        super();
        this.ref = firebase.firestore().collection('fornecedores');
        this.state = {
            fornecedor : '',
            cardapio: [],
        };
    }

    componentWillMount() {
        const {user} = this.props.navigation.state.params;
        console.log('Cardapio - User -> ' + user.uid);
        this.ref.doc(user.uid).collection('cardapio').get()
            .then(querySnapshot => {
                if (querySnapshot.empty) {
                    console.log('Nenhuma categoria cadastrada!');
                } else {
                    let cardapio = [];
                    querySnapshot.forEach((categoriaDoc) => {
                        console.log(categoriaDoc.id, " => ", categoriaDoc.data());
                        const {nome} = categoriaDoc.data();
                        let categoria = {
                            nome: nome,
                        };
                        this.ref.doc(user.uid).collection('cardapio').doc(categoriaDoc.id).collection('itens').get()
                            .then(querySnapshot => {

                                if (querySnapshot.empty) {
                                    console.log('Nenhum item cadastrado!');
                                } else{
                                    let itens = [];
                                    querySnapshot.forEach((itemDoc) => {
                                        console.log(itemDoc.id, " => ", itemDoc.data());
                                        const {nome, valor} = itemDoc.data();
                                        itens.push({
                                            nome: nome,
                                            valor: (valor*100),
                                        })
                                    });
                                    categoria.itens = itens;
                                }
                            })
                            .catch(err => {
                                console.log('Error getting document', err);
                            });
                        cardapio.push(
                            categoria
                        );
                    });
                    this.setState({
                        cardapio: cardapio,
                    });
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }

    _cadastrarCategoria = () => {
        const {user} = this.props.navigation.state.params;
        console.log('User - cadastrarCategoria  ' + user);
        this.props.navigation.navigate('CadastrarCategoria', { user: user});
    };

    render(){
        const isEmpty = this.state.cardapio.length <= 0;
        return(
            <Container>
                    {isEmpty ? (
                        <Content padder contentContainerStyle={estilo.principal}>
                            <Button onPress={this._cadastrarCategoria} full style={estilo.botao}>
                                <Text>Cadastrar categoria</Text>
                            </Button>
                        </Content>
                    ) : (
                        <Content padder contentContainerStyle={estilo.principal}>
                            <List>
                                {this.state.cardapio.map(categoria => (
                                    <ListItem key={categoria.nome}>
                                        <Text>{categoria.nome}</Text>
                                    </ListItem>
                                ))}
                            </List>
                            <Button onPress={this._cadastrarCategoria} full style={estilo.botao}>
                                <Text>Cadastrar categoria</Text>
                            </Button>
                        </Content>
                    )}
            </Container>
        )
    }

}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, estilo_perfil, {}));