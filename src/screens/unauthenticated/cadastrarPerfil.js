import React, { Component } from 'react';
import { StyleSheet, Image, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import StepIndicator from 'react-native-step-indicator';
import { Container, Header, Left, Body, Right, Title, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import {estilo_global} from "../../css/style_global";

//UP IMAGES -> https://medium.com/@davidjsehl/react-native-and-the-infamous-blob-uploading-images-to-firebase-b1a440f9e078
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

const uploadImage = (uri, imageName, mime = 'image/jpg') => {
    return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        let uploadBlob = null;
        const imageRef = firebaseApp.storage().ref('posts').child(imageName);
        fs.readFile(uploadUri, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
                uploadBlob = blob;
                return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
                uploadBlob.close();
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                resolve(url)
            })
            .catch((error) => {
                reject(error)
            })
    })
};

export default class CadastrarPerfil extends Component{

    constructor() {
        super();
        this.state = {
            name: '',
            desc: '',

            imagePath: null,
            imageHeight: null,
            imageWidth: null,
        };
    }

    _updateName = name => {
        this.setState({ name });
    };

    _updateDesc = desc => {
        this.setState({ desc });
    };

    _anterior = () => {
        this._updateName('');
        this._updateDesc('');
        const {user} = this.props.navigation.state.params;
        this.props.navigation.navigate('Cadastro', { user: user});
    };
    _proximo = () => {
        const {user} = this.props.navigation.state.params;
        user.name = this.state.name;
        user.desc = this.state.desc;
        console.log('User - cadastraPerfil  ' + user);
        this.props.navigation.navigate('CadastrarLocal', { user: user});
    };




    _takePicture = () => {
        const cam_options = {
            mediaType: 'photo',
            maxWidth: 600,
            maxHeight: 600,
            quality: 1,
            noData: true,
        };
        ImagePicker.launchCamera(cam_options, (response) => {
            if (response.didCancel) {
            }
            else if (response.error) {
            }
            else {
                this.setState({
                    imagePath: response.uri,
                    imageHeight: response.height,
                    imageWidth: response.width,
                })
            }
        })
    };
    render() {

        const photo = this.state.imagePath ?     //se houver imagem, ela é renderizada, se não, se renderiza 'imageupload.jpg'
            <View style={{ flex:1, }}>
                <Image
                    source={{ uri:this.state.imagePath }}
                    resizeMode='contain'

                    style={{
                        height: height,
                        width: screenWidth-40,
                        alignSelf: 'center',
                        marginBottom: 10,
                    }}
                />
            </View>
            :
            <View style={{ flex:1, marginBottom: 10,}}>
                <Image
                    source={require('./../../assets/images/imageupload.jpg')}
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor:'#4285f4',
                        alignSelf: 'center',
                        borderRadius: 5,
                    }}
                />
            </View>;

        return (
            <Container>
                <Content padder contentContainerStyle={estilo.principal}>
                    {/*<Image source={require('../../../assets/imageupload.jpg')} style={estilo.imagem}/>*/}
                    {photo}
                    <Form>
                        <Item floatingLabel>
                            <Label>Nome do estabelecimento</Label>
                            <Input onChangeText={this._updateName}
                                   value={this.state.name}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Descrição</Label>
                            <Input onChangeText={this._updateDesc}
                                   value={this.state.desc} multiline={true}/>
                        </Item>
                    </Form>
                    <Button onPress={this._anterior} full style={estilo.botao}>
                        <Text>ANTERIOR</Text>
                    </Button>
                    <Button onPress={this._proximo} full style={estilo.botao}>
                        <Text>PRÓXIMO</Text>
                    </Button>
                </Content>
            </Container>

        )

    }
}

const estilo = StyleSheet.create(Object.assign({}, estilo_global, {}));