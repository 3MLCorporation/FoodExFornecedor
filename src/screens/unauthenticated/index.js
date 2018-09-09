import { StackNavigator } from 'react-navigation';
import {NavigationOptions} from "../../global_components/NavigationOptions";

import Login from './login';
import Cadastro from './cadastro';
import React from "react";

export default StackNavigator({
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
});