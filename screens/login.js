import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Dimensions, TextInput, Platform, Image, Text, View, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';

import firebase from 'react-native-firebase';

const botaoEsqueceuSenha = () => {
	Alert.alert('Informar email para redefinição da senha...');
};

export default class Login extends Component{
	render() {
		return (
				<View style={estilo.principal}>

					<Image source={require('../assets/logofoodex.png')} style={estilo.logo}/>

					<View>
						<Text>Email: </Text>
						<TextInput style={estilo.entrada} placeholder="email"/>
					</View>

					<View>
						<Text>Senha: </Text>
						<TextInput secureTextEntry={true} style={estilo.entrada} placeholder="senha"/>
					</View>

					<TouchableOpacity onPress={botaoEsqueceuSenha}>
						<View>
							<Text style={estilo.botaoTexto}> Esqueceu a senha?</Text>
						</View>
					</TouchableOpacity>

					<View>
						<TouchableOpacity style={estilo.botao}>
							<Text> LOGIN </Text>
						</TouchableOpacity>
					</View>

                    <View>
                        <Text style={estilo.centerText}>---------- ou ----------</Text>
                    </View>

                    <TouchableOpacity>
                        <View>
                            <Text style={estilo.botaoTextoCenter}> Não tem uma conta? CADASTRE-SE</Text>
                        </View>
                    </TouchableOpacity>

				</View>

			)
	}
}

const estilo = StyleSheet.create({
    principal:{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo:{
        width: 200,
        height: 200,
        margin: 20
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
	},

	botaoTexto:{
		marginTop: 5,
        color:"#212121",
		backgroundColor: "transparent",
		textAlign: "left",
		paddingLeft: 15
	},

    centerText:{
	    marginTop: 10,
        textAlign: "center",
        color:"#212121"
    },

    botaoTextoCenter:{
        marginTop: 10,
        color:"#212121",
        backgroundColor: "transparent",
        textAlign: "center",
    }

});