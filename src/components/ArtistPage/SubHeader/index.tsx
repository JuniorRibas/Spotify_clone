import React from "react";

import { Container, TextCountPlays, ContainerBtn, TextBtn } from "./styles";

const SubHeader: React.FC = () => {
  return (
    <Container>
      <TextCountPlays>1,030,903 MONTHLY LISTENERS</TextCountPlays>
      <ContainerBtn>
        <TextBtn>SHUFFLE PLAY</TextBtn>
      </ContainerBtn>
    </Container>
  );
};

export default SubHeader;
