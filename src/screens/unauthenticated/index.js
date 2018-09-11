import { createStackNavigator } from 'react-navigation';
import {NavigationOptions} from "../../global_components/NavigationOptions";

import Login from './login';
import Cadastro from './cadastro';
import CadastrarLocal from './cadastrarLocal';
import React from "react";
import CadastrarPerfil from "./cadastrarPerfil";

export default createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: <NavigationOptions titulo="FoodEx+"/>
        }),
    },
    Cadastro: {
        screen: Cadastro,
        navigationOptions: () => ({
            header: <NavigationOptions titulo="Cadastro"/>
        }),
    },
    CadastrarPerfil: {
        screen: CadastrarPerfil,
        navigationOptions: () => ({
            header: <NavigationOptions titulo="Cadastro"/>
        }),
    },
    CadastrarLocal: {
        screen: CadastrarLocal,
        navigationOptions: () => ({
            header: <NavigationOptions "Cadastro"/>
        }),
    },
});