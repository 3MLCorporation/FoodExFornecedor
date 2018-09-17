import { createStackNavigator } from 'react-navigation';
import {NavigationOptionsLog} from "../../global_components/NavigationOptionsLog";
import React from "react";

import Perfil from './Perfil';

export default createStackNavigator({
    Perfil: {
        screen: Perfil,
        navigationOptions: () => ({
            header: <NavigationOptionsLog titulo="Perfil"/>
        }),
    },
});