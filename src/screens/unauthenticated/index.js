import { createStackNavigator } from 'react-navigation';
import {NavigationOptions} from "../../global_components/NavigationOptions";

import Login from './login';
import Cadastro from './cadastro';
import CadastrarLocal from './cadastrarLocal';
import React from "react";

export default createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: <NavigationOptions/>
        }),
    },
    Cadastro: {
        screen: Cadastro,
        navigationOptions: () => ({
            header: <NavigationOptions/>
        }),
    },
    CadastrarLocal: {
        screen: CadastrarLocal,
        navigationOptions: () => ({
            header: <NavigationOptions/>
        }),
    },
});