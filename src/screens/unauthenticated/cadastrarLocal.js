import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import {estilo_global} from "../../css/style_global";


import firebase from 'react-native-firebase';
import MapView from 'react-native-maps';


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
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.0021,
                    },
                })
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 50000}
        )

    }

    _cadastrarLocal = () =>{
        const { user } = this.props.navigation.state.params;
        /*this.setState({
                user: user,
            }
        );*/
        user.position = this.state.position;
        console.log(user);
        this.props.navigation.navigate('CadastrarLocal', { user: user});
    };

    _registerUser = () => {

        const { email, cpf, password, position } = this.state;

        this.ref.doc(email.trim()).set({
            cpf: cpf,
            coords: position,
        }).catch((error) => {
            console.error(error);
        });

        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email.trim(), password)
            .catch((error) => {
                console.error(error);
            });
    };

    render() {

        /* const { region } = this.props;
         console.log('Region = ' + region);*/
        const {region, position} = this.state;
        return (
            <Container>

                <View style={styles.container}>

                <Button onPress={this._cadastrarLocal} full style={estilo.botao_mapa}>
                    <Text>SELECIONAR LOCAL</Text>
                </Button>
                {this.state.loading ? (
                    <Loading />
                ) : (

                    <MapView
                        style={styles.map}
                        region={region}
                    >

                        {region && (
                            <MapView.Marker
                                draggable
                                coordinate={ region }
                                title={'Fornecedor'}
                                onDragEnd={(e) => this.setState({ position: e.nativeEvent.coordinate })}
                            >
                            </MapView.Marker>
                        )}

                    </MapView>

                )}

                </View>
            </Container>

        )

    }
}

const Loading = () => (
    <View style={styles.container}>
        <Text>Loading...</Text>
    </View>
);

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));

const styles = StyleSheet.create({
    callout:{

    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    map: {
        marginTop: 1.5,
        flex: 0.8,
    },
});

