import React, { useEffect, useReducer, useContext } from "react";
import { FlatList, SafeAreaView, Dimensions } from "react-native";
import styled from "styled-components/native";
import firestore from "@react-native-firebase/firestore";

import Input from "~/components/Input";
import Message from "~/components/Message";
import { UserContext } from "~/contexts";
import { firebaseService } from "~/services";
import messagesReducer from "~/hooks/reducers";
import { COLLECTIONS } from "~/constants";

import theme from "~/utils/theme";

const MessageContainer = styled.View`
  height: ${Dimensions.get("window").height * 0.8}px;
  padding-bottom: 100px;
`;
const InputContainer = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 100px;
  position: absolute;
  bottom: 0px;
  padding-vertical: 10px;
  padding-left: 20px;
  border-top-width: 1px;
  border-top-color: gray;
`;

const Hooks = () => {
    const { uid } = useContext(UserContext);
    const [messages, dispatchMessages] = useReducer(messagesReducer, []);
    useEffect(() => {
        return firebaseService.messageRef
            .orderBy("created_at", "desc")
            .onSnapshot((quarysnapshot) => {
                dispatchMessages({ type: "add", payload: quarysnapshot.docs });
            });
    }, [false]);

    /* const mock = [
                                                                  { id: 1, message: "Hello", side: "left" },
                                                                  { id: 2, message: "Hi!", side: "right" },
                                                              ]; */
    return (
        <SafeAreaView>
            <MessageContainer>
                <FlatList
                    inverted
                    data={messages}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        const data = item.data();
                        const side = data.user_id === uid ? "right" : "left";
                        return <Message side={side} message={data.message} />;
                    }}
                />
            </MessageContainer>
            <InputContainer>
                <Input />
            </InputContainer>
        </SafeAreaView>
    );
};
export default Hooks;
