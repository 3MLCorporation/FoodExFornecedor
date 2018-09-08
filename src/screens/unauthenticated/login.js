import React, { Component } from 'react';
import { StyleSheet, Image} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import {estilo_global} from "../../css/style_global";
import { NavigationOptions } from "../../global_components/NavigationOptions";
import firebase from 'react-native-firebase';

export default class Login extends Component{

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }

    _updateEmail = email => {
        this.setState({ email });
    };

    _updatePassword = password => {
        this.setState({ password });
    };

    _signIn = () => {
        // extract the values from state
        const { email, password } = this.state;

        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email.trim(), password)
            .catch((error) => {
                console.error(error);
            });
    };

    _cadastro = () => {
        this.props.navigation.navigate('Cadastro');
    };

	render() {
		return (
            <Container >
                {<NavigationOptions titulo="Foodex"/>}
                <Content padder contentContainerStyle={estilo.principal}>
					<Image source={require('../../../assets/logofoodex.png')} style={estilo.logo}/>
                    <Form >
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input onChangeText={this._updateEmail}
                                   value={this.state.email} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Senha</Label>
                            <Input secureTextEntry={true} onChangeText={this._updatePassword}
                                   value={this.state.password}/>
                        </Item>
                    </Form>

					<Button transparent dark>
						<Text>Esqueceu a sua senha?</Text>
					</Button>

					<Button onPress={this._signIn} full style={estilo.botao}>
						<Text>LOGIN</Text>
					</Button>

					<Button onPress={this._cadastro} transparent dark>
						<Text>Não tem uma conta? CADASTRE-SE</Text>
					</Button>
    			</Content>
            </Container>
        )
	}
}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));
const a = estilo_global;