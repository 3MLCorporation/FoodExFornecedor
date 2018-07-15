import React, { Component } from 'react';
import {Provider} from 'react-redux';

import App from './App';
import store from './store';

function bootstrap() {
    // Init any external libraries here!

    return class extends Component {
        render() {
            return (
                <Provider store={store}>
                    <App />
                </Provider>
            );
        }
    };
}

export default bootstrap;