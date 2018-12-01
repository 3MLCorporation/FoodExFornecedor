import React, { Component } from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Content,
    Button,
    Text,
    Form,
    Item,
    Input,
    Label,
    Spinner,
    Footer,
    FooterTab,
    Icon,
} from 'native-base';
import { StyleSheet, Image} from 'react-native';
import firebase from 'react-native-firebase';
import {estilo_global} from "../../css/style_global";
import {estilo_perfil} from "../../css/perfil";

import Cardapio from './cardapio';

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
            fornecedor : '',
            loading: true,
        };
        console.disableYellowBox = true;
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
                        fornecedor: doc.data(),
                        loading: false,
                    });
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }

    _cardapio = () => {
        this.props.navigation.navigate('Cardapio', { user: firebase.auth().currentUser});
    };

    render() {
        if (this.state.loading) {
            return (<Spinner color='orange'/>);
        } else {
            return (
                <Container>
                    <Content padder>
                        <Image source={require('../../../assets/imageupload.jpg')} style={estilo.imagem}/>
                        <Text style={estilo.titulo}>{this.state.fornecedor.name}  </Text>
                        <Item style={estilo.caixaDescricao}>
                            <Text style={estilo.descricao}> Descrição: {this.state.fornecedor.description}  </Text>
                        </Item>
                    </Content>
                    <Footer>
                        <FooterTab style={{backgroundColor: '#f78f03'}}>
                            <Button active style={{backgroundColor: '#f78f03'}}>
                                <Icon active name="person" />
                                <Text style={{textColor: '#ffffff', fontSize: 12}}>Perfil</Text>
                            </Button>
                            <Button style={{backgroundColor: '#f78f03'}} onPress={this._cardapio}>
                                <Icon name="list" />
                                <Text style={{textColor: '#ffffff', fontSize: 12}}>Cardápio</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            );
        }
    }
}

export default Perfil;

const estilo = StyleSheet.create(Object.assign({}, estilo_global, estilo_perfil, {}));
