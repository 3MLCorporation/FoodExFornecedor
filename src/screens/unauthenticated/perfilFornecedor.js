import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';

import firebase from 'react-native-firebase';

export default class Cadastro extends Component{

    static navigationOptions = {
        header: (
            <Header style={ {'backgroundColor' : '#f78f03'}} androidStatusBarColor={'#BF6B03'}>
                <Left/>
                <Body>
                <Title>FoodEx+</Title>
                </Body>
                <Right />
            </Header>
        )
    };

    constructor() {
        super();
        this.ref = firebase.firestore().collection('fornecedores');
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
                    <Button onclick="window.location.href='/confirmacaoEmail';" full style={estilo.botao}>
                        <Text>ANTERIOR</Text>
                    </Button>
                    <Button onclick="window.location.href='/formaPagamento';" full style={estilo.botao}>
                        <Text>PRÓXIMO</Text>
                    </Button>
                </Content>
            </Container>

        )

    }
}

const estilo = StyleSheet.create({
    header:{
        backgroundColor: '#f78f03'
    },

    principal:{
        backgroundColor: 'white'
    },

    entrada:{
        width: 300,
        height: 40,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 10
    },

    botao:{
        backgroundColor: '#f78f03',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    }
});