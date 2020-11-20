import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import styled from "styled-components/native";
import theme from "~/utils/theme";

const Container = styled.View`
  position: absolute;

  top: 0px;
  left: 0px;

  height: ${Dimensions.get("window").height}px;
  width: ${Dimensions.get("window").width}px;

  justify-content: center;
  align-items: center;
`;

export default function Loader() {
    return (
        <Container>
            <ActivityIndicator animating color="gray" size="small" />
        </Container>
    );
}
