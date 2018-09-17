import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import { StyleSheet, Image} from 'react-native';
import firebase from 'react-native-firebase';
import {estilo_global} from "../../css/style_global";
import {estilo_perfil} from "../../css/perfil";

class Perfil extends Component{

    // static navigationOptions = {
    //     header: (
    //         <Header style={ {'backgroundColor' : '#f78f03'}} androidStatusBarColor={'#BF6B03'}>
    //             <Left/>
    //             <Body>
    //             <Title>Principal</Title>
    //             </Body>
    //             <Right />
    //         </Header>
    //     )
    // };

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

    render(){
        return(
            <Container>
                <Content padder>
                    <Image source={require('../../../assets/imageupload.jpg')} style={estilo.imagem}/>
                    <Text style={estilo.titulo}>{this.state.fornecedor.name}  </Text>
                    <Item style={estilo.caixaDescricao}>
                        <Text style={estilo.descricao}> Descrição: {this.state.fornecedor.description}  </Text>
                    </Item>
                </Content>
            </Container>
        );
    }
}

export default Perfil;

const estilo = StyleSheet.create(Object.assign({}, estilo_global, estilo_perfil, {}));
