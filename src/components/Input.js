import React, { useCallback, useState } from "react";
import styled from "styled-components/native";
import { Button, Dimensions } from "react-native";
import theme from "../utils/theme";
import { firebaseService } from "~/services";
import Loader from "~/components/Loader";
import useStore from "~/useStore";

const { userstore } = useStore();

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: ${Dimensions.get("window").width}px;
`;
const InputContainer = styled.View`
  width: ${Dimensions.get("window").width * 0.7}px;
`;
const MsgInput = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  border-radius: 3px;
  flex-direction: row;
  padding-horizontal: 10px;
`;
const Input = () => {
  const FBUser = userstore.FBUser.user;
  let FBuid = "";

  if (FBUser) {
    FBuid = FBUser.uid;
  }
  console.log("FBUid at input : ", FBuid);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePress = () => {
    console.log("보내기");
    setIsLoading(true);
    firebaseService.createMessage({ message, FBuid }).then(() => {
      setIsLoading(false);
      setMessage("");
      console.log("message sent", message);
    });
  };

  return (
    <Container>
      <InputContainer>
        <MsgInput
          value={message}
          onChangeText={setMessage}
          placeholder="메시지를 입력하세요."
        />
      </InputContainer>
      <Button title="보내기" onPress={handlePress} disabled={isLoading} />
      {isLoading && <Loader />}
    </Container>
  );
};

export default Input;
