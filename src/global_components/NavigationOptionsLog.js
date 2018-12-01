import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';
import { Header, Left, Body, Right, Title, Text, Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
        /*<Icon name="dots-vertical" size={30} color="white"/>*/
        return (
                <Header style={estilo.header}  androidStatusBarColor='#BF6B03' noLeft>
                    <Body><Title>{this.props.titulo}</Title></Body>

                    <Right>
                        <Button rounded hasText transparent onPress={this._logout}>

                            <Text>Logout</Text>
                        </Button>
                    </Right>
                </Header>
        )
    }

}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));