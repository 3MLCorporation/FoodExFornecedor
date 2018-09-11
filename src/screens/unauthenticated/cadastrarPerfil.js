import React, { Component } from 'react';
import { StyleSheet, Image} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import {estilo_global} from "../../css/style_global";

export default class CadastrarPerfil extends Component{

    constructor() {
        super();
        this.state = {
            name: '',
            desc: '',
        };
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
        const {user} = this.props.navigation.state.params;
        this.props.navigation.navigate('Cadastro', { user: user});
    };
    _proximo = () => {
        const {user} = this.props.navigation.state.params;
        user.name = this.state.name;
        user.desc = this.state.desc;
        console.log('User - cadastraPerfil  ' + user);
        this.props.navigation.navigate('CadastrarLocal', { user: user});
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