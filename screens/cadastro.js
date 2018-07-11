import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Dimensions, TextInput, Platform, Image, Text, View, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';

import firebase from 'react-native-firebase';

export default class cadastro extends Component{
	render() {
        return (
            <View style={estilo.principal}>

				<View>
                    <Text>Email: </Text>
                    <TextInput style={estilo.entrada} placeholder="email"/>
                </View>

                <View>
                    <Text>CPF: </Text>
                    <TextInput style={estilo.entrada} placeholder="cpf"/>
                </View>

                <View>
                    <Text>Nome do estabelecimento: </Text>
                    <TextInput style={estilo.entrada} placeholder="nomeestabelecimento"/>
                </View>

                <View>
                    <Text>Senha: </Text>
                    <TextInput secureTextEntry={true} style={estilo.entrada} placeholder="senha"/>
                </View>

                <View>
                    <Text>Confirmar senha: </Text>
                    <TextInput secureTextEntry={true} style={estilo.entrada} placeholder="confirmarsenha"/>
                </View>

                <View>
                    <TouchableOpacity style={estilo.botao}>
                        <Text> CADASTRAR </Text>
                    </TouchableOpacity>
                </View>

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
    }
});