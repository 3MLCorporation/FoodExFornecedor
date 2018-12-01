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
    List,
    ListItem,
    Icon,
    H3,
    H2,
    H1,
    Spinner,
    FooterTab,
    Footer,
    Fab,
} from 'native-base';
import { StyleSheet, Image, View, TouchableNativeFeedback} from 'react-native';
import firebase from 'react-native-firebase';
import {estilo_global} from "../../css/style_global";
import {estilo_perfil} from "../../css/perfil";

export default class Cardapio extends Component{



    constructor() {
        super();
        this.ref = firebase.firestore().collection('fornecedores');
        this.state = {
            user: firebase.auth().currentUser,
            fornecedor : '',
            cardapio: [],
            loading: true,
            fabActive: true,
        };
        console.disableYellowBox = true;
    }

    componentDidMount() {
        const {user} = this.props.navigation.state.params;
        console.log('Cardapio - User -> ' + user.uid);
        this.setState({
           user: user,
        });
        this._getCardapio();
    }

    _getCardapio = () =>{
        /*this.setState({
            loading: true,
        });*/
        console.log('***getCardapio chamado***');
        this.ref.doc(this.state.user.uid).collection('cardapio').get()
            .then(querySnapshot => {
                if (querySnapshot.empty) {
                    console.log('Nenhum item cadastrado!');
                } else {
                    let cardapio = [];
                    querySnapshot.forEach((itemDoc) => {
                        console.log(itemDoc.id, " => ", itemDoc.data());
                        const {nome, valor, descricao} = itemDoc.data();
                        let item = {
                            id: itemDoc.id,
                            nome: nome,
                            valor: valor,
                            descricao: descricao,
                            //itens: []
                        };
                        /*this.ref.doc(this.state.user.uid).collection('cardapio').doc(categoriaDoc.id).collection('itens').get()
                            .then(querySnapshot => {

                                if (querySnapshot.empty) {
                                    console.log(categoriaDoc.id + 'Nenhum item cadastrado!');
                                } else{
                                    let itens = [];
                                    querySnapshot.forEach((itemDoc) => {
                                        console.log(itemDoc.id, " => ", itemDoc.data());
                                        const {nome, valor} = itemDoc.data();
                                        itens.push({
                                            id: itemDoc.id,
                                            nome: nome,
                                            valor: valor,
                                        })
                                    });
                                    categoria.itens = itens;
                                }
                            })
                            .catch(err => {
                                console.log('Error getting document', err);
                            });*/
                        cardapio.push(
                            item
                        );
                    });
                    this.setState({
                        cardapio: cardapio,
                        loading: false,
                    });
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    };

    _perfil = () => {
        this.props.navigation.navigate('Perfil');
    };

    _cadastrarItem = () => {
        //const {user} = this.props.navigation.state.params;
       //console.log('User - cadastrarCategoria  ' + user);
        this.props.navigation.navigate('CadastrarItem', {
            user: this.state.user
        });
    };

    /*_cadastrarItem = (id) =>{
        console.log("ID da categoria no cadastro de item -> " + id);
        this.props.navigation.navigate('CadastrarItem', {
            user: this.state.user,
            categoriaId: id,
        });
    };*/
    /*componentWillUnmount() {
        this.willFocus.remove();
    }*/
    render(){
        this.willFocus = this.props.navigation.addListener(
            'willFocus',
            () => {
                this._getCardapio()
            }
        );

        if(this.state.loading){
            return(<Spinner color='orange'/>);
        }else{/*
            let semItem = true;
            this.state.cardapio.map( categoria => {
                if(categoria.itens.length > 0){
                    semItem = false;
                }
            });*/
            const isEmpty = this.state.cardapio.length <= 0 && this;

            return(
                <Container>
                    {isEmpty ? (
                        <Content padder contentContainerStyle={estilo.principal}>
                            <Button onPress={this._cadastrarItem} full style={estilo.botao}>
                                <Text>Cadastrar item</Text>
                            </Button>
                        </Content>
                    ) : (
                        <Content padder contentContainerStyle={estilo.principal}>

                            {console.log(this.state.cardapio)}

                                <List dataArray={this.state.cardapio} renderRow={(item) =>
                                    <ListItem key={item.id}>
                                        <TouchableNativeFeedback>
                                            <Body background={TouchableNativeFeedback.SelectableBackground()}>
                                                <Text>{item.nome}</Text>
                                                <Text note numberOfLines={2}>{item.descricao}</Text>
                                                <Text style={{color: 'green', fontWeight: 'bold'}}>R$ {item.valor}</Text>
                                            </Body>
                                        </TouchableNativeFeedback>

                                        {/*<Right>
                                            <Button transparent warning>
                                                <Icon name="add" onPress={() => this._cadastrarItem(item.id)} />
                                            </Button>
                                        </Right>*/}
                                    </ListItem>
                                }/>
                        </Content>
                    )}
                    <Fab
                        containerStyle={{bottom: 60 }}
                        style={{ backgroundColor: '#283593'}}
                        position="bottomRight"
                        onPress={this._cadastrarItem}>
                        <Icon name="add" />
                    </Fab>
                    <Footer>
                        <FooterTab style={{backgroundColor: '#f78f03'}}>
                            <Button style={{backgroundColor: '#f78f03'}} onPress={this._perfil}>
                                <Icon name="person" />
                                <Text style={{textColor: '#ffffff', fontSize: 12}}>Perfil</Text>
                            </Button>
                            <Button active style={{backgroundColor: '#f78f03'}} onPress={this._cardapio}>
                                <Icon active name="list" />
                                <Text style={{textColor: '#ffffff', fontSize: 12}}>Cardápio</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            )
        }

    }

}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, estilo_perfil, {}));