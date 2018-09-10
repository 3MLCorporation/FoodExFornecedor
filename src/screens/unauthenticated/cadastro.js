import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import {estilo_global} from "../../css/style_global";


import firebase from 'react-native-firebase';

export default class Cadastro extends Component{

    constructor() {
        super();
        this.ref = firebase.firestore().collection('fornecedores');
        this.state = {
            email: '',
            cpf: '',
            password: '',
            confPassword: '',
        };

    }

    _updateEmail = email => {
        this.setState({ email });
    };

    _updateCpf = cpf => {
        this.setState({ cpf });
    };

    _updatePassword = password => {
        this.setState({ password });
    };
    _updateConfPassword = confPassword => {
        this.setState({ confPassword });
    };

    _registerUser = () => {

        const { email, cpf, password, position } = this.state;

        this.ref.doc(email.trim()).set({
            cpf: cpf,
            coords: position,
        }).catch((error) => {
            console.error(error);
        });

        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email.trim(), password)
            .catch((error) => {
                console.error(error);
            });
    };

    _confirmarSenha = () => {
        if (this.state.password === this.state.confPassword) {
            const { email, cpf, password} = this.state;
            let user = {
                email: email.trim(),
                cpf: cpf.trim(),
                password: password,
            };

           // const { navigation } = this.props.navigation.state.params.data;
           // this.props.navigation.navigate('Login');
            this.props.navigation.navigate('CadastrarLocal', { user: user});
          //  this._registerUser();
        }
        else {
           // confirmacao.setValue('');
            this._updatePassword('');
            alert('Senhas não batem, tente novamente');
        }
    };

	render() {
        return (
            <Container>
                <Content padder contentContainerStyle={estilo.principal}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input onChangeText={this._updateEmail}
                                   value={this.state.email}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>CPF / CNPJ</Label>
                            <Input onChangeText={this._updateCpf}
                                   value={this.state.cpf}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Senha</Label>
                            <Input secureTextEntry={true} onChangeText={this._updatePassword}
                                   value={this.state.password}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Confirmar senha</Label>
                            <Input secureTextEntry={true} onChangeText={this._updateConfPassword}
                                   value={this.state.confPassword}/>
                        </Item>
                    </Form>
                    <Button onPress={this._confirmarSenha} full style={estilo.botao}>
                        <Text>CADASTRAR</Text>
                    </Button>
                </Content>
            </Container>

        )

	}
}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));