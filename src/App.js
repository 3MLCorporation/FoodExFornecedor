import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';

import UnauthenticatedStack from './screens/unauthenticated';
import AuthenticatedStack from './screens/authenticated';
import { userStateChanged } from './actions';

import firebase from 'react-native-firebase';

class App extends React.Component {
    constructor() {
        super();
        this.unsubscribe = null; // Set a empty class method
        this.state = {
            loading: true,
            user: null,
        };
    }

    componentDidMount() {
        // Assign the class method to the unsubscriber response
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            firebase.auth().onAuthStateChanged(user => {
                // dispatch the imported action using the dispatch prop:
                this.props.dispatch(userStateChanged(user));
                this.setState({
                    loading: false,
                });
            });
        });

    }

    componentWillUnmount() {
        // Call the unsubscriber if it has been set
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    render() {
        // Render a blank screen whilst we wait for Firebase.
        // The listener generally trigger immediately so it will be too fast for the user to see
        if (this.state.loading) {
            return null;
        }

        if (!this.props.isUserAuthenticated) {
            return <UnauthenticatedStack />;
        }

        return <AuthenticatedStack />;
    }

}

function mapStateToProps(state) {
    return {
        isUserAuthenticated: !!state.user,
    };
}

export default connect(mapStateToProps)(App);
