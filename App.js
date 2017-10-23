import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import Router from './src/Router';
import store from './src/Stores/store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider >
        );
    };
}

export default App;