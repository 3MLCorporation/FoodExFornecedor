import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label, Textarea } from 'native-base';
import { StyleSheet, Image} from 'react-native';
import firebase from 'react-native-firebase';
import {estilo_global} from "../../css/style_global";
import {estilo_perfil} from "../../css/perfil";

export default class CadastrarItem extends Component{
    constructor() {
        super();
        this.ref = firebase.firestore().collection('fornecedores');
        this.state = {
            nome: '',
            valor: '',
            descricao:'',
        };
        console.disableYellowBox = true;
    }

    _updateNome = nome => {
        this.setState({ nome });
    };
    _updateValor = valor => {
        this.setState({ valor });
    };
    _updateDescricao = descricao => {
        this.setState({ descricao });
    };

    _cadastrarItem = () => {
        const {user} = this.props.navigation.state.params;
        console.log('CadastrarItem - User -> ' + user.uid);
        //console.log('CadastrarItem - CategoriaId -> ' + categoriaId);
        const item = {
            nome: this.state.nome,
            valor: this.state.valor,
            descricao: this.state.descricao
        };
        firebase.firestore().collection('fornecedores/' + user.uid + '/cardapio').add(item)
            .then(doc => {
                console.log('Item cadastrado com sucesso - ' + doc.id);
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
                    <Form>
                        <Item floatingLabel>
                            <Label>Nome</Label>
                            <Input onChangeText={this._updateNome}
                                   value={this.state.nome}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Valor</Label>
                            <Input keyboardType="numeric" onChangeText={this._updateValor}
                                   value={this.state.valor}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Descrição</Label>
                            <Input maxLength = {100} multiline={true} onChangeText={this._updateDescricao}
                                   value={this.state.descricao}/>
                        </Item>
                    </Form>
                    <Button onPress={this._cadastrarItem} full style={estilo.botao}>
                        <Text>Adicionar</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, estilo_perfil, {}));