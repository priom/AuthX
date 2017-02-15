import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({ loading: false, error: 'Sorry! Authentication Failed.' });
    }

    onLoginSuccess() {
        this.setState({ email: '', password: '', error: '', loading: false });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                LogIn / Register
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="example@email.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>{this.renderButton()}</CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#FF0000'
    }
};

export default LoginForm;
