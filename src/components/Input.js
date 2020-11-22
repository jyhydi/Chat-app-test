import React, { useCallback, useState, useContext } from "react";
import styled from "styled-components/native";
import { Button, Dimensions } from "react-native";
import theme from "../utils/theme";
import { UserContext } from "~/contexts";
import { firebaseService } from "~/services";
import Loader from "~/components/Loader";

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
  const { uid } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePress = useCallback(() => {
    () => {
      console.log("보내기");
      setIsLoading(true);
      firebaseService.createMessage({ message, uid }).then(() => {
        setIsLoading(false);
        setMessage("");
      });
    };
  }, [message]);
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
