import React from "react";

import styled from "styled-components/native";
import { Dimensions } from "react-native";
import theme from "../utils/theme";

const Message = ({ message, side }) => {
  const isLeftSide: boolean = side === "left";
  // 내꺼 상대방거 메시지 따라서 왼쪽/오른쪽 스타일 변환
  const Container = styled.View`
    width: ${Dimensions.get("window").width}px;
    padding-vertical: 3px;
    padding-horizontal: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: ${isLeftSide ? "flex-start" : "flex-end"};
  `;
  const TextContainer = styled.View`
    width: 160px;
    background-color: ${isLeftSide ? "gray" : "lightgray"};
    border-radius: 40px;
    padding-horizontal: 15px;
    padding-vertical: 12px;
    ${isLeftSide ? "marginLeft: 10px;" : "marginRight: 10px; "}
  `;
  const MsgText = styled.Text`
    font-size: 12px;
    text-align: ${isLeftSide ? "left" : "right"};
  `;

  return (
    <Container>
      <TextContainer>
        <MsgText>{message}</MsgText>
      </TextContainer>
    </Container>
  );
};

export default Message;
