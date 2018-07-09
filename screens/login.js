import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Dimensions, TextInput, Platform, Image, Text, View, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';

import firebase from 'react-native-firebase';

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

					<View>
						<TouchableOpacity style={estilo.botao}>
							<Text> ENTRAR </Text>
						</TouchableOpacity>
					</View>

				</View>

			)
	}
}

const estilo = StyleSheet.create({
	entrada:{
		width: 300,
		height: 40,
		borderColor: 'gray',
		backgroundColor: 'white',
		borderWidth: 1,
		marginTop: 10
	},

	logo:{
		width: 200,
		height: 200,
		margin: 20
	},

	principal:{
		backgroundColor: 'white',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	botao:{
		backgroundColor: '#f78f03',
		paddingVertical: 10,
		paddingHorizontal: 40,
		marginTop: 20
	}
});