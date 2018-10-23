import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import { StyleSheet, Image} from 'react-native';
import firebase from 'react-native-firebase';
import {estilo_global} from "../../css/style_global";
import {estilo_perfil} from "../../css/perfil";

export default class CadastrarCategoria extends Component{

    constructor() {
        super();
        this.ref = firebase.firestore().collection('fornecedores');
        this.state = {
            nome: '',
        };
    }

    _updateNome = nome => {
        this.setState({ nome });
    };

    _cadastrarCategoria = () => {
        const {user} = this.props.navigation.state.params;
        console.log('CadastrarCategoria - User -> ' + user.uid);
        const categoria = {
            nome: this.state.nome,
        };
        firebase.firestore().collection('fornecedores/' + user.uid + '/cardapio').add(categoria)
            .then(doc => {
                console.log('Categoria cadastrada com sucesso - ' + doc.id);
            })
            .catch((error) => {
                console.error(error);
            });
        this.props.navigation.navigate('Cardapio', { user: user});
    };
    render(){
        return(
            <Container>
                <Content padder contentContainerStyle={estilo.principal}>
                    <Text style={estilo.titulo}>kkkkkkkj</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nome</Label>
                            <Input onChangeText={this._updateNome}
                                   value={this.state.nome}/>
                        </Item>
                    </Form>
                    <Button onPress={this._cadastrarCategoria} full style={estilo.botao}>
                        <Text>Adicionar</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, estilo_perfil, {}));