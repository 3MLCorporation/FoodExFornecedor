import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import {estilo_global} from "../../css/style_global";
import {NavigationOptions} from "../../global_components/NavigationOptions";

import firebase from 'react-native-firebase';

export default class CadastrarPerfil extends Component{

    constructor() {
        super(props);
        this.ref = firebase.firestore().collection('fornecedores');
        this.state = {
            name: '',
            desc: '',
        };
        if(this.props.navigation.state.params) {
            this.user = this.props.navigation.state.params.user;
        }
    }

    _updateName = name => {
        this.setState({ name });
    };

    _updateDesc = desc => {
        this.setState({ desc });
    };

    _anterior = () => {
        this._updateName('');
        this._updateDesc('');
        this.props.navigation.navigate('Cadastro', { user: this.user});
    };
    _proximo = () => {
        this.user.name = this.state.name;
        this.user.desc = this.state.desc;
        this.props.navigation.navigate('CadastrarLocal', { user: this.user});
    };
    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={estilo.principal}>
                    <Image source={require('../../../assets/imageupload.jpg')} style={estilo.logo}/>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nome do estabelecimento</Label>
                            <Input onChangeText={this._updateName}
                                   value={this.state.name}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Descrição</Label>
                            <Input onChangeText={this._updateDesc}
                                   value={this.state.desc}/>
                        </Item>
                    </Form>
                    <Button onPress={this._anterior} full style={estilo.botao}>
                        <Text>ANTERIOR</Text>
                    </Button>
                    <Button onPress={this._proximo} full style={estilo.botao}>
                        <Text>PRÓXIMO</Text>
                    </Button>
                </Content>
            </Container>

        )

    }
}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));