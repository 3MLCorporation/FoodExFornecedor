import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';

import firebase from 'react-native-firebase';

class Principal extends Component{

    static navigationOptions = {
        header: (
            <Header androidStatusBarColor={'#f78f03'}>
                <Left/>
                <Body>
                <Title>Principal</Title>
                </Body>
                <Right />
            </Header>
        )
    };

    _logout = () => {
        firebase.auth().signOut()
            .catch((error) => {
                console.error(error);
            });
    };
    render(){
        return(
            <Container>
                <Content padder>
                    <Text> Principal </Text>
                    <Button onPress={this._logout}>
                        <Text>
                            Logout
                        </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Principal;