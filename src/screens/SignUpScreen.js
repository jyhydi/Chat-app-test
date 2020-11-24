import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Title, IconButton } from "react-native-paper";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: #f5f5f5;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const SignUpTitle = styled.Title`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <SignUpTitle>Register to chat</SignUpTitle>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
            />
            <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={(userPassword) => setPassword(userPassword)}
            />
            <TextInput placeholder="Signup" modeValue="contained" />
            <IconButton
                icon="keyboard-backspace"
                size={30}
                color="#6646ee"
                onPress={() => navigation.goBack()}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    loginButtonLabel: {
        fontSize: 22,
    },
    navButtonText: {
        fontSize: 18,
    },
    navButton: {
        marginTop: 10,
    },
});

export default SignUpScreen;
