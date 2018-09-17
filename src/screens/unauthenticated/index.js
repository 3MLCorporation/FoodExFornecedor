import { createStackNavigator } from 'react-navigation';
import {NavigationOptionsDeslog} from "../../global_components/NavigationOptionsDeslog";

import Login from './login';
import Cadastro from './cadastro';
import CadastrarPerfil from "./cadastrarPerfil";
import CadastrarLocal from './cadastrarLocal';
import React from "react";

export default createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: <NavigationOptionsDeslog titulo="FoodEx+"/>
        }),
    },
    Cadastro: {
        screen: Cadastro,
        navigationOptions: () => ({
            header: <NavigationOptionsDeslog titulo="Cadastro"/>
        }),
    },
    CadastrarPerfil: {
        screen: CadastrarPerfil,
        navigationOptions: () => ({
            header: <NavigationOptionsDeslog titulo="Cadastro"/>
        }),
    },
    CadastrarLocal: {
        screen: CadastrarLocal,
        navigationOptions: () => ({
            header: <NavigationOptionsDeslog titulo="Cadastro"/>
        }),
    },
});