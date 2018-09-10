import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import {estilo_global} from "../../css/style_global";


import firebase from 'react-native-firebase';

export default class CadastrarLocal extends Component{
    constructor() {
        super();
        this.ref = firebase.firestore().collection('fornecedores');
        this.state = {
            position: {
                latitude: '',
                longitude: '',
            },
        }
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

    render() {
        const { user } = this.props.navigation.state.params;
        /*this.setState({
                user: user,
            }
        );*/
        console.log(JSON.stringify(user));
        return (
            <Container>
                <Content padder contentContainerStyle={estilo.principal}>
                    <Button full style={estilo.botao}>
                        <Text>AQUI VAI TER UM mapa</Text>
                    </Button>
                </Content>
            </Container>

        )

    }
}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));