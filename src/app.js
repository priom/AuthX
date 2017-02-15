import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBQXfOHT9PqcRCs4sJWPY33f_N6m3WIfM0',
            authDomain: 'authx-d6d67.firebaseapp.com',
            databaseURL: 'https://authx-d6d67.firebaseio.com',
            storageBucket: 'authx-d6d67.appspot.com',
            messagingSenderId: '287257948108'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="AuthX" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
