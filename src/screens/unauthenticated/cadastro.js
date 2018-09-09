import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import { NavigationOptions } from "../../global_components/NavigationOptions";
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

    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                const {latitude, longitude} = coords;

                this.setState({
                    position: {
                        latitude,
                        longitude,
                    },
                })
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 50000}
        )
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

    _confirmaSenha = () => {
        if (this.state.password === this.state.confpassword) {
            confirmacao.setValue('');
            this._updatePassword('');
            Alert.alert('Senhas não batem, tente novamente')
        }
        else {
            this._registerUser()
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
                            <Input secureTextEntry={true} onChangeText={this._updateConfPassword} value={this.state.confPassword}/>
                        </Item>
                    </Form>
                <Button onPress={this._confirmaSenha()} onClick="window.location.href='/confirmacaoEmail';" full style={estilo.botao}>
                    <Text>CADASTRAR</Text>
                </Button>
                </Content>
            </Container>

        )

	}
}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));