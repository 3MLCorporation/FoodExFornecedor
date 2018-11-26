import { createStackNavigator } from 'react-navigation';
import {NavigationOptionsLog} from "../../global_components/NavigationOptionsLog";
import React from "react";

import Perfil from './perfil';
import Cardapio from './cardapio';
import CadastrarCategoria from './cadastrarCategoria';
import CadastrarItem from './cadastrarItem';

export default createStackNavigator({
    Perfil: {
        screen: Perfil,
        navigationOptions: () => ({
            header: <NavigationOptionsLog titulo="Perfil"/>
        }),
    },
    Cardapio: {
        screen: Cardapio,
        navigationOptions: () => ({
            header: <NavigationOptionsLog titulo="Cardápio"/>
        }),
    },
    CadastrarCategoria: {
        screen: CadastrarCategoria,
        navigationOptions: () => ({
            header: <NavigationOptionsLog titulo="Categoria"/>
        }),
    },
    CadastrarItem: {
        screen: CadastrarItem,
        navigationOptions: () => ({
            header: <NavigationOptionsLog titulo="Cadastrar item"/>
        }),
    },
});