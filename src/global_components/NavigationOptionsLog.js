import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';
import { Header, Left, Body, Right, Title, Text, Icon, Button} from 'native-base';
import {estilo_global} from "../css/style_global";


export class NavigationOptionsLog extends Component {
    constructor(props) {
        super(props);
        //this.

    }

    _logout = () => {
        firebase.auth().signOut()
            .catch((error) => {
                console.error(error);
            });
    };

    render () {
        return (
                <Header style={estilo.header}  androidStatusBarColor='#BF6B03'>
                    <Left/>
                    <Body>
                    <Title>{this.props.titulo}</Title>
                    </Body>
                    <Right>
                        <Button hasText transparent onPress={this._logout}>
                            <Text>Logout</Text>
                        </Button>
                    </Right>
                </Header>
        )
    }

}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));