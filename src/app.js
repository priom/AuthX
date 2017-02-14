import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBQXfOHT9PqcRCs4sJWPY33f_N6m3WIfM0',
            authDomain: 'authx-d6d67.firebaseapp.com',
            databaseURL: 'https://authx-d6d67.firebaseio.com',
            storageBucket: 'authx-d6d67.appspot.com',
            messagingSenderId: '287257948108'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="AuthX" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
