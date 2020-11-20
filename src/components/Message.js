import React from "react";

import styled from "styled-components/native";
import theme from "../utils/theme";

const Message = ({ message, side }) => {
    const isLeftSide: boolean = side === "left";
    // 내꺼 상대방거 메시지 따라서 왼쪽/오른쪽 스타일 변환
    const Container = styled.View`
    width: ${(props) => props.theme.dimensions.width}px;
    paddingvertical: 3px;
    paddinghorizontal: 10px;
    flexdirection: row;
    alignitems: center;
    justifycontent: ${isLeftSide ? "flex-start" : "flex-end"};
  `;
    const TextContainer = styled.View`
    width: 160px;
    backgroundcolor: ${isLeftSide ? "gray" : "lightgray"};
    borderradius: 40px;
    paddinghorizontal: 15px;
    paddingvertical: 12px;
    ${isLeftSide ? "marginLeft: 10px;" : "marginRight: 10px; "}
  `;
    const MsgText = styled.Text`
    fontsize: 12px;
    textalign: ${isLeftSide ? "left" : "right"};
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
