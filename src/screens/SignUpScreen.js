
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import styled from "styled-components/native"

const Container = styled.View`
  background-color: #f5f5f5;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const SinUpTitle = styled.Title`
  font-size: 24px;
  margin-bottom: 10px;
`;


const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <SignUpTitle>Register to chat</SignUpTitle>
            <FormInput
                labelName='Email'
                value={email}
                autoCapitalize='none'
                onChangeText={userEmail => setEmail(userEmail)}
            />
            <FormInput
                labelName='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={userPassword => setPassword(userPassword)}
            />
            <FormButton
                title='Signup'
                modeValue='contained'
                labelStyle={styles.loginButtonLabel}
            />
            <IconButton
                icon='keyboard-backspace'
                size={30}
                style={styles.navButton}
                color='#6646ee'
                onPress={() => navigation.goBack()}
            />
        </Container>
    );
}

const styles = StyleSheet.create({

    loginButtonLabel: {
        fontSize: 22
    },
    navButtonText: {
        fontSize: 18
    },
    navButton: {
        marginTop: 10
    }
});

export default SignUpScreen;