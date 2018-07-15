import { StackNavigator } from 'react-navigation';

import Login from './login';
import Cadastro from './cadastro';

export default StackNavigator({
    Login: {
        screen: Login,
    },
    Cadastro: {
        screen: Cadastro,
    },
});